<template>
    <div class="select-city">
          <div class="location">
              <p>自动定位</p>
              <p @click="$emit('update:showSelect',false)">{{IP}}</p>
          </div>
          <div class="list">
              <p>省份</p>
              <ul>
                  <li v-for="(item,index) in provinceiData" @click="toCity(item.CityID)" :key="index"><span>{{item.CityName}}</span><span>></span></li>
              </ul>
          </div>
          <transition name="scroll-left">
              <div class="city" v-show="showCity">
                    <div class="right">
                        <ul>
                            <li v-for="(item,index) in cityData" @click="setIPs(item)" :key="index">{{item.CityName}}</li>
                        </ul>
                    </div>
                </div>
          </transition>
    </div>
</template>

<script>
import {mapState, mapActions , mapMutations} from 'vuex'
export default {
    props:['IP'],
    data(){
        return{
            showCity:false
        }
    },
    computed:{
        ...mapState({
            provinceiData:state=>state.offer.provinceiData,
            cityData:state=>state.offer.cityData
        })
    },
    methods:{
        ...mapActions({
            getProvincei:"offer/getProvincei",
            getCity:"offer/getCity"
        }),
        ...mapMutations({
            setIP:"offer/setIP"
        }),
        toCity(CityID){
            this.getCity(CityID)
            this.showCity=true
            
        },
        setIPs(item){
            this.setIP(item)
            this.showCity=false
            this.$emit('update:showSelect',false)
        }
    },
    created(){
        this.getProvincei()
    }
}
</script>

<style lang="scss" scoped>
.scroll-left-enter,.scroll-left-leave-to{
    transform: translate3d(100%, 0, 0)
}
.scroll-left-enter-active, .scroll-left-leave-active{
    transition: transform .2s linear;
}
.city{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0,.7);
    .right{
        width: 60%;
        background: #fff;
        height: 100%;
        margin-left: 40%;
        ul{
            list-style-type: none;
            li{
                padding: 0 .3rem;
                font-size: .28rem;
                height: .8rem;
                line-height: .8rem;
                border-bottom: 1px solid #eee;
                box-sizing: border-box;
                margin-left: .1rem;
                position: relative;
                display: flex;
                justify-content: space-between;
                span:nth-child(2){
                    font-size: .45rem;
                    color: #ece3e3;
                }
            }
        }
    }
}
.select-city{
      position: fixed;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      background: #fff;
      overflow-y:scroll;
}
.location{
    p:nth-child(1){
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        padding-left: .2rem;
        background: #f4f4f4;
    }
    p:nth-child(2){
        padding-left: .4rem;
        font-size: .28rem;
        height: .8rem;
        line-height: .8rem;
        background: #fff;
    }
}
.list{
    p{
        height: .4rem;
        line-height: .4rem;
        font-size: .24rem;
        padding-left: .2rem;
        background: #f4f4f4;
    }
    ul{
        list-style-type: none;
        li{
            padding: 0 .3rem;
            font-size: .28rem;
            height: .8rem;
            line-height: .8rem;
            border-bottom: 1px solid #eee;
            box-sizing: border-box;
            margin-left: .1rem;
            position: relative;
            display: flex;
            justify-content: space-between;
            span:nth-child(2){
                font-size: .45rem;
                color: #ece3e3;
            }
        }
    }
}
</style>