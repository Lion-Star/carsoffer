<template>
  <div class="home">
    <div class="select" v-for="(item,index) in list" :key="index">
      <div class="top">{{item.title}}</div>
      <div class="bottom">
        <li v-for="(val,i) in item.data" :key="i" @click="showPopup(val.MasterID)">
          <img :src="val.CoverPhoto" />
          <span>{{val.Name}}</span>
        </li>
      </div>
      <van-popup v-model="show" position="right" :style="{ height: '100%' }">
        <div class="dialog" v-for="(item,index) in carlist" :key="index">
          <div class="top">{{item.GroupName}}</div>
          <div class="c-bottom" v-for="(val,i) in item.GroupList" :key="i">
            <dl>
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
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      list: [],
      carlist: [],
      show: false,
      newList: []
    };
  },

  created() {
    this.getlist();
  },
  methods: {
    async showPopup(id) {
      this.show = true;
      let res = await this.$http.get(
        `https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`
      );
      this.carlist = res.data.data;
      console.log(this.carlist);
    },
    async getlist() {
      let res = await this.$http.get(
        "https://baojia.chelun.com/v2-car-getMasterBrandList.html"
      );
      res.data.data.forEach((item, index) => {
        item.title = item.Spelling.slice(0, 1);
      });
     

      //操作数据方法 1
      let data2 = [];
      res.data.data.filter(item => {
        if (data2.findIndex(val => item.title == val.title) == -1) {
          data2.push({
            title:item.title
          });
        }
      });
      
      data2.forEach((item, index) => {
        item.data = res.data.data.filter(val => val.Spelling.slice(0,1) == item.title);
      });
      console.log(data2);
      this.list = data2

      //操作数据方法2
      // let arrnum= res.data.data.map((item,index)=>{
      //     return item.Spelling.slice(0,1)
      // })
      // let arrsort= Array.from(new Set(arrnum))
      // let list = res.data.data

      // let result=[]

      // arrsort.forEach((item,index)=>{
      //   let obj = {};
      //   let arr = [];
      //   obj.title = item

      //   for(let i = list.length-1;i>=0;i--){
      //     if(item === list[i].Spelling.slice(0,1)){
      //         arr.unshift(list[i])
      //         res.data.data.splice(i,1)
      //     }
      //   }

      //   obj.data=[...arr]
      //   result.push(obj)
      // })

      // this.list=result
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
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
        font-size: 15px;

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

.van-popup--right {
  width: 75%;
}
</style>


