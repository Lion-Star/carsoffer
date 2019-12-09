<template>
      <div class="dealer-info">
          <p>选择报价经销商</p>
          <ul>
              <li>
                <p><span>beihfdsj</span><span>万</span></p>
                <p><span>上的观点是的的说法</span><span>仙多市</span></p>
              </li>
          </ul>
      </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions({
            getShang:"offer/getShang"
        })
    },
    created(){
        this.getShang()
    }
}
</script>

<style lang="scss" scoped>
.dealer-info{
    p{
      height: .5rem;
      line-height: .5rem;
      padding: 0 .2rem;
      font-size: .24rem;
      color: #666;
    }
    ul{
      background: #fff;
      padding: 0 .18rem;
      font-size: .3rem;
      li{
          padding: .26rem 0 .26rem .54rem;
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
              margin-top: .1rem;
              font-size: .24rem;
              color: #a2a2a2;
              display: flex;
              justify-content: space-between;
              span:nth-child(1){
                display: inline-block;
                max-width: 4.6rem;
              }
          }
      }
    }
}
</style>