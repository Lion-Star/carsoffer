<template>
  <div class="home">
    <div class="select" v-for="(item,index) in select" :key="index">
        <div class="top">
          {{item}}
        </div>
        <div class="bottom" v-for="(item1,index1) in list" :key="index1">
              <li v-if="item1.Spelling.slice(0,1)===item">
                <img :src="item1.CoverPhoto" alt=""><span>{{item1.Name}}</span>
              </li>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    
  },
  data(){
    return {
      select:["A","B","C","D","F","G","H","J","K","L","M","N","O","Q","R","S","T","W","X","Y","Z"],
      list:[]
    }
  },
  
  created(){
    this.getlist()
  },
  methods:{
    async getlist(){
      return await this.$http.get("https://baojia.chelun.com/v2-car-getMasterBrandList.html").then(res=>{
        this.list=res.data.data
        console.log(this.list);
        
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
}

.select{
  width: 100%;
  
  .top{
    height: 30px;
    line-height: 30px;
    background: #f5f5f5;
    color: #aaa;
    padding-left: 12px;
  }
  .bottom{
    width: 100%;
    
    li{
      height: 50px;
      display: flex;
      line-height: 50px;
      margin:15px 15px 0px 15px;
      border-bottom: 1px solid #ccc;
      padding-top: 1px;
      img{
        height: 90%;
        padding-right: 20px;
      }
    }
    li+li{
      border: none;
    }
    
  }
  
}
</style>
