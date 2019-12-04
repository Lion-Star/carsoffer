<template>
    <div class="warp">
<<<<<<< HEAD
        <!-- 详情上测标题 -->
        <Head :data="data"></Head>

        <Tab :data="data"></Tab>
        
=======
        <div class="imgs">
             <img :src="data.Picture" alt="">
                <div class="title">
                    <div class="tit">
                        <div class="titleft">
                            <p v-if="data.market_attribute!==undefined">{{data.market_attribute.dealer_price}}</p>
                            <p v-if="data.market_attribute!==undefined">指导价 {{data.market_attribute.official_refer_price}}</p>
                        </div>
                        <div class="titright">
                            <button>询问低价</button>
                        </div>
                    </div>
                </div>  
        </div>
        <div class="main">
            <!-- 数据切换 -->
            <div class="nav">
                <li v-for="(item,index) in nav" :key="index" @click="active(index,item)" :class="index===Index?'active':''">{{item}}</li>
            </div>
            <!-- 下面渲染 -->
            <div class="block" v-for="(item,index) in data.list" :key="index">
                <ul v-if="item.market_attribute.year===year">
                    <li>{{item.market_attribute.year}}款 {{item.car_name}}</li>
                    <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                    <li><span>{{item.market_attribute.dealer_price_min}}起</span><span>指导价{{item.market_attribute.dealer_price_max}}</span></li>
                    <li><button>询问低价</button></li>
                </ul>
                <ul v-if="year==='全部'">
                    <li>{{item.market_attribute.year}}款 {{item.car_name}}</li>
                    <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                    <li><span>{{item.market_attribute.dealer_price_min}}起</span><span>指导价{{item.market_attribute.dealer_price_max}}</span></li>
                    <li><button>询问低价</button></li>
                </ul>
            </div>
        </div>
>>>>>>> wangjian
        <div class="fixed">
            <p>询问低价</p>
            <p>本地营销商为你售价</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '../components/details/Head'
import Tab from '../components/details/Tab'
import { mapState,mapActions, mapMutations } from "vuex";
export default {
    data(){
        return{
            item:'',//数据接口数据
        }  
    },
    components:{
        Head,
        Tab
    },
    computed:{
        ...mapState({
            data:state=>state.details.data
        })
    },
    methods:{
       ...mapActions({getlist:"details/getBaoJia"}),
     
    },
    created(){
         this.item=JSON.parse(sessionStorage.getItem('item'))
          this.getlist(this.item.SerialID)
    }
}
</script>

<style lang="scss" scoped>
.warp{
    width: 100%;
    height: 100%;
    background: #eeeeee;
    position: relative;
    overflow-y: auto;
    .fixed{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        background: #3AACFF;
        font-size: 14px;
        color: #fff;
        p{
            padding-top: 4px;
            text-align: center;
        }
    }
}
</style>