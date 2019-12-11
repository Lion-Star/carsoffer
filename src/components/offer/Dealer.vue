<template>
      <div class="dealer-info">
          <p>选择报价经销商</p>
          <ul>
              <li v-for="(item,index) in dealerlist" :key="index">
                <p><span>{{item.dealerShortName}}</span><span>万</span></p>
                <p><span>{{item.address}}</span><span>仙多市</span></p>
              </li>
          </ul>
      </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            dealerlist:state=>state.offer.dealerlist
        })
    },
    methods:{
        ...mapActions({
            getShang:"offer/getShang"
        })
    },
    created(){
      console.log(sessionStorage.getItem('car_id'),sessionStorage.getItem('CityID'))
        this.getShang({car_id:sessionStorage.getItem('car_id'),CityID:sessionStorage.getItem('CityID')})
    }
}
</script>

<style lang="scss" scoped>
.dealer-info{
    p{
      line-height: .3rem;
      padding: 0 .2rem;
      font-size: .24rem;
      color: #000;
    }
    ul{
      background: #fff;
      padding: 0 .18rem;
      font-size: .3rem;
      li{
          position: relative;
          padding: .26rem 0 .26rem .54rem;
          border-bottom: 1px solid #eee;
          box-sizing: border-box;
          height: 1.65rem;
          p:nth-child(1){
          font-size: .3rem;
          span:nth-child(1){
            font-size: .3rem;
          }
          span:nth-child(2){
            font-size: .24rem;
            float: right;
            color: red;
          }
          }
          p:nth-child(2){
              margin-top: .15rem;
              font-size: .24rem;
              color: #a2a2a2;
              display: flex;
              justify-content: space-between;
              span:nth-child(1){
                display: inline-block;
                line-height: .38rem;
                max-width: 4.6rem;
              }
              span:nth-child(2){
                display: inline-block;
                line-height: .75rem;
              }
          }
      }
    }
}
</style>