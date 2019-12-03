<template>
    <div class="main">
            <!-- 数据切换 -->
            
                <div class="nav">
                    <li v-for="(item,index) in nav" :key="index" @click="active(index,item)" :class="index===Index?'active':''">{{item}}</li>
                </div>
            <!-- 下面渲染 -->
                <div class="block" v-for="(item,index) in tablist" :key="index">
                    <p>{{item.exhaust_str}}{{item.max_power_str}}</p>
                    <ul>
                        <li>{{item.market_attribute.year}}款 {{item.car_name}}</li>
                        <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                        <li><span>{{item.market_attribute.dealer_price_min}}起</span><span>指导价{{item.market_attribute.dealer_price_max}}</span></li>
                        <li><button>询问低价</button></li>
                    </ul>
                </div>
        </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            Index:0,//高亮
            year:'全部',//年份
            tablist:[],
            nav:['全部']
        }
    },
    computed:{
        ...mapState({
            data:state=>state.details.data
        })
    },
    methods:{
        // tab切换高亮 切换数据
        active(index,year){
            this.Index=index
            this.year=year
            let list=[]
            if(this.year==='全部'){
                tablist=this.data.list
            }else{
                this.data.list.map(item=>{
                    if(item.market_attribute.year===year){ 
                        this.tablist.push(item) 
                    }
                })
            }
        },
        getData(){  
                console.log(this.data)
                // tab数据
                // console.log(this.data)
                // let market_attribute=[]
                // this.data.list.filter(item=>{
                //     market_attribute.push(item.market_attribute)
                // })
                // //年份
                // let year=[]
                // market_attribute.filter(item=>{
                //     year.push(item.year)
                // })
                // year.filter((item,index)=>{
                //     if(this.nav.indexOf(item)===-1){
                //         this.nav.push(item)
                //     }  
                // }) 
                // // 耗油排序
                // this.tablist=this.data.list
                // this.tablist.sort((a,b)=>{
                //     return ( a.exhaust - b.exhaust || a.max_power - b.max_power || a.market_attribute.year - b.market_attribute.year)
                // })
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    padding-bottom: 50px;
    .nav{
        width: 100%;
        height: 30px;
        background: #fff;
        display: flex;
        align-items: center;
        margin-top: 10px;
        .active{
            color: #3AACFF;
        }
        li{
            margin: 0 7px;
            font-size: 15px;
        }
    }
    .block{
        width: 100%;
        height: 120px;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #ccc;
        
        p{
            background: #eeeeee;
            padding:0 8px;
        }
        ul{
            padding:0 8px;
            list-style: none;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            li{
                line-height:21px;
            }
            li:nth-child(1){
                font-size: 14px;
                color: #000;
            }
            li:nth-child(3){
                display: flex;
                flex-direction: row-reverse;
                span:nth-child(1){
                    color: red;
                    margin-left: 10px;
                    font-size: 14px;
                }
                
            }
            button{
                margin-top: 5px;
                width: 100%;
                background: #fff;
                outline: none;
                line-height: 35px;
                border: 0;
                color: #3AACFF;
                border-top: 1px solid #ccc;
            }
        }
    } 
}
</style>