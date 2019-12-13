<template>
  <div class="drawer"
    ref="ele"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
    >
        <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
    </div>
</template>

<script>
export default  {
  props:['list'],
  data(){
    return {
      ind:0
    }
  },
  created(){

  },
  watch:{
    list:function(){
      this.$nextTick(()=>{
        this.offsetTop =  (window.innerHeight - this.$refs.ele.offsetHeight)/2
        // console.log(window.innerHeight,this.$refs.ele.offsetHeight);
      })
    }
  },
  methods:{
    touchStart(e){
      let y = e.touches[0].pageY - this.offsetTop
      let height=this.$refs.ele.children[0].offsetHeight
      let index = Math.floor(y/height);         
    },
    touchMove(e){
      let y = e.touches[0].pageY - this.offsetTop
      let height=this.$refs.ele.children[0].offsetHeight
      let index = Math.floor(y/height);
      // 处理边界
      // 处理边界
      // index<1时 index=1 否则 就用index
      // 当 this.list.length-1 >=0 即为本身 否则为null
      index<0?index=0:index>this.list.length-1?index=this.list.length-1:null
      this.$emit('skip', index);
    },
    touchEnd(e){
      // console.log('end.....',e);
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer{
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translate(48%,-50%);
  right: .16rem;
  color: #999;
  align-items: center;
  text-align: center;
  font-size: .30rem;
  padding: 2px;
  li{
      list-style: none;
      &.active{
        color: #f56;
      }
    }
}
  
</style>