<template>
  <div class="asklowprice-page">
      <header>
         <p>可向多个商家询问最低价，商家及时回复？</p>
      </header>
      <div class="title">
          <img src="" alt="">
          <div class="title-right">
              <p>奥迪A4L</p>
              <p>2019款 35 TFSI 进取版 国V</p>
          </div>
      </div>
  </div>
</template>

<script>
import {Toast} from "vant"
export default {
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
.asklowprice-page{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-y: scroll;
    header{
        height: .6rem;
        line-height: .6rem;
        width: 100%;
        background: #79cd92;
        text-align: center;
        z-index: 99;
        color: #ffffff;
    }
}
.title{
    background: #fff;
    padding: .32rem .18rem .24rem;
    position: relative;
    height: 2rem;
    box-sizing: border-box;
    display: flex;
    img{
        width: 2.3rem;
        height: 1.41rem;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 5px;
    }
    .title-right{
      margin-left: .2rem;
      width: 4.3rem;
      p{
        line-height: .65rem;
      }
      p:nth-child(1){
        font-size: .36rem;
      }
      p:nth-child(2){
        color: #333;
      }
    }
}
</style>