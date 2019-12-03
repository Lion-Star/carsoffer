<template>
  <div class="home">
    <div class="main" >
      <div  class="box" ref="scrolllist">
        <div class="select" v-for="(item,index) in list" :key="index">
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
    </div>
    <!-- 点击跳转 -->
    <div class="jump">
     <ul>
       <li v-for="(item,index) in list" :key="index" :class='{"active":ind==index}' @click='handclick(index)'>{{item.title}}</li>
     </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations,mapActions} from "vuex"
export default {
  name: "home",
  components: {},
  data() {
    return {
      show: false, //弹层显示隐藏
      arrsort:[],
      left:null,
      right:null,
      ind:0,
      scrollH:0
    };
  },
  computed:{
      ...mapState({
      list: state=>state.home.list,
      carlist:state=>state.home.carlist,
    })
  },
  created() {
    this.$nextTick(()=>{
      this.scrollHeight();
      this.left=new BScroll('.main',{
        click:true,
        probeType:2
      })
      this.left.on("scroll",(res)=>{
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
  mounted(){
    this.getMasterBrandList()
  },
  methods: {
    ...mapActions({
      getMasterBrandList: 'home/getMasterBrandList',
      getMakeListByMasterBrandId:'home/getMakeListByMasterBrandId'
    }),
    scrollHeight(){
      let children=this.$refs.scrolllist.children //获取到每个子元素
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
      this.getMakeListByMasterBrandId(id)
      // let res = await this.$http.get(
      //   `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`
      // );
      // this.carlist = res.data.data;
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
 .top {
    font-size: .32rem;
    height: 30px;
    line-height: 30px;
    background: #eee;
    color: #666;
    padding-left: 12px;
  }
.select {
  width: 100%;
 
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