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
      <div class="form">
          <p>个人信息</p>
          <ul>
            <li>姓名<input type="text" placeholder="输入你的真实中文姓名"></li>
            <li>手机<input type="text" placeholder="输入你的真实手机号码"></li>
            <li @click="showSele">城市<span>{{IP}} ></span></li>
          </ul>
          <div class="form-btn">
              <button>询问低价</button>
          </div>
      </div>
      <!-- 报价经销商 -->
      <Dealer />
      <!-- 弹出省份 -->
      <transition name="scroll-top">
          <Select :showSelect.sync=showSelect :IP=IP  v-show="showSelect" />
      </transition>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Select from '../components/offer/Select'
import Dealer from '../components/offer/Dealer'
export default {
  data(){
     return{
          showSelect:false
     }
  },
  components:{
      Select,
      Dealer
  },
  methods: {
      ...mapActions({
            getIP:"offer/getIP"
        }),
        //点击弹出省份
      showSele(){
          this.showSelect=true
      }
  },
  computed:{
      ...mapState({
         IP:state=>state.offer.IP
      })
  },
  created(){
      this.getIP()
  }
}
</script>

<style lang="scss" scoped>
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition: transform .1s linear;
}
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
.form{
    p{
      height: .5rem;
      line-height: .5rem;
      padding: 0 .2rem;
      height: .6rem;
      font-size: .24rem;
      color: #666;
      background: #eee;
    }
    ul{
      background: #fff;
      padding: 0 .2rem;
      list-style-type: none;
      li{
        font-size: .32rem;
        height: .88rem;
        line-height: .88rem;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: #000;
        display: flex;
        justify-content: space-between;
        input{
          font-size: .32rem;
          padding-right: .2rem;
          width: 88%;
          text-align: right;
          box-sizing: border-box;
          color: #555;
          outline: none;
          -webkit-appearance: none;
          border: none;
        }
      }
    }
}
.form-btn{
    background: #fff;
    text-align: center;
    padding-top: .3rem;
    padding-bottom: .28rem;
    button{
        font-size: .32rem;
        color: #fff;
        width: 80%;
        background: #3aacff;
        height: .7rem;
        border-radius: .1rem;
        outline: none;
        -webkit-appearance: none;
        border: none;
    }
}

</style>