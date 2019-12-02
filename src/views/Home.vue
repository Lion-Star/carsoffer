<template>
  <div class="home">
    <div class="main" >
         <div  class="box" ref="scrolllist">
      <div class="select" v-for="(item,index) in list" :key="index" >
      <div class="top" :id="index">{{item.title}}</div>
      <div class="bottom">
        <li v-for="(val,i) in item.data" :key="i" @click="showPopup(val.MasterID)">
          <img :src="val.CoverPhoto" />
          <span>{{val.Name}}</span>
        </li>
      </div>

    </div>
    </div>
 
    
      <!-- 弹窗组件 -->
      <van-popup v-model="show" position="right" :style="{ height: '100%' }">
        <div class="dialog" v-for="(item,index) in carlist" :key="index">
          <div class="top">{{item.GroupName}}</div>
          <div class="c-bottom" v-for="(val,i) in item.GroupList" :key="i">
            <dl @click="detail(val)">
              <dt>
                <img :src="val.Picture" />
              </dt>
              <dd>
                <span>{{val.AliasName}}</span>
               
                <b>{{val.DealerPrice}}</b>
              </dd>
            </dl>
          </div>
        </div>
      </van-popup>

      <!-- 点击跳转 -->
      
    </div>
    <div class="jump">
     <ul>
       <li v-for="(item,index) in arrsort" :key="index" :class='{"active":ind==index}' @click='handclick(index)'>{{item}}</li>
     </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "home",
  components: {},
  data() {
    return {
      list: [],  //主页面数据
      carlist: [], //弹层数据
      show: false, //弹层显示隐藏
      arrsort:[],
      left:null,
      right:null,
      ind:0,
      list:[],
      scrollH:0
    };
  },

  created() {
    this.getlist();
    this.$nextTick(()=>{
      this.scrollHeight();
       console.log(this.list);
      this.left=new BScroll('.main',{
        click:true,
        probeType:2
      })
     this.left.on("scroll",(res)=>{
       console.log(res)
      this.scrollH=Math.abs(res.y) ;
       for(var j=0;j<this.list.length;j++){
         var h1=this.list[j];
         var h2=this.list[j+1]
         if(h2 && (this.scrollH>=h1 && this.scrollH<h2)){
           this.ind=j
         }
       }
     })
    })
  },
  methods: {

    scrollHeight(){
      let children=this.$refs.scrolllist.children //获取到每个子元素
      console.log(children)
      let height = 0
      this.list.push(height)
      for(var i=0;i<children.length;i++){
          height+=children[i].offsetHeight;
          this.list.push(height)
      }
    },
    handclick(i){
       this.ind=i;
        var children=this.$refs.scrolllist.children;
     
        this.left.scrollToElement(children[i],1000)
    },
    //跳转详情
    detail(val){ 
      let item=JSON.stringify(val)
      sessionStorage.setItem('item',item)
      this.$router.push("/details")
    },
    //点击弹窗
    async showPopup(id) {
      this.show = true;
      let res = await this.$http.get(
        `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`
      );
      this.carlist = res.data.data;
    },

    //请求主页面数据
    async getlist() {
      let res = await this.$http.get(
        "https://baojia.chelun.com/v2-car-getMasterBrandList.html"
      );
      res.data.data.forEach((item, index) => {
        item.title = item.Spelling.slice(0, 1);
      });
     

      //操作数据方法 1
      // let data2 = [];
      // res.data.data.filter(item => {
      //   if (data2.findIndex(val => item.title == val.title) == -1) {
      //     data2.push({
      //       title:item.title
      //     });
      //   }
      // });
      
      // data2.forEach((item, index) => {
      //   item.data = res.data.data.filter(val => val.Spelling.slice(0,1) == item.title);
      // });
      // console.log(data2);
      // this.list = data2

      // 操作数据方法2
      let arrnum= res.data.data.map((item,index)=>{
          return item.Spelling.slice(0,1)
      })
      let arrsort= Array.from(new Set(arrnum))
      this.arrsort = arrsort
      let list = res.data.data

      let result=[]

      arrsort.forEach((item,index)=>{
        let obj = {};
        let arr = [];
        obj.title = item

        for(let i = list.length-1;i>=0;i--){
          if(item === list[i].Spelling.slice(0,1)){
              arr.unshift(list[i])
              res.data.data.splice(i,1)
          }
        }

        obj.data=[...arr]
        result.push(obj)
      })

      this.list=result
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
.main{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box{
  width: 100%;
 
}
.select {
  width: 100%;
  
  .top {
    height: 30px;
    line-height: 30px;
    background: #eee;
    color: #666;
    padding-left: 12px;
  }
  .bottom {
    width: 100%;
    li {
      height: 40px;
      display: flex;
      line-height: 40px;
      margin: 15px;
      border-bottom: 1px solid #ccc;
      img {
        height: 100%;
        padding-right: 20px;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
.c-bottom {
  width: 100%;
  display: flex;
  padding: 10px;
  color: #333;
   border-bottom: 1px solid #ccc;
  dl {
    display: flex;
    width: 100%;
    dd{
      height: 100%;
      padding-left: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span{
        font-size: 18px;
      }
      b{
       
        color: #f00;
        font-size: 14px;
        font-weight: 400;
      }
    }
    dt{
      width: 40%;
      height: 100%;
      img{
        width: 90px;
      }
    }
  }
}

.jump{
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translate(48%,-50%);
  right: 15px;
  align-items: center;
  text-align: center;
  font-size: 16px;
  ul{
    li{
      list-style: none;
      &.active{
        color: #f56;
      }
    }
  }
}

.van-popup--right {
  width: 75%;
}
</style>


