<template>
    <div class="main">
            <!-- 数据切换 -->
                    
                <div class="nav">
                    <li 
                    v-for="(item,index) in yearNav" 
                    :key="index" @click="active(index,item)" 
                    :class="index===Index?'active':''">{{item}}</li>
                </div>
            <!-- 下面渲染 -->
                <div class="block" v-for="(item,index) in tablist" :key="index">
                    <p>{{item.key}}</p>
                    <div class="text" v-for="(val,index) in item.list" :key="index">
                        <ul>
                            <li>{{val.market_attribute.year}}款 {{val.car_name}}</li>
                            <li>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</li>
                            <li><span>{{val.market_attribute.dealer_price_min}}起</span><span>指导价{{val.market_attribute.dealer_price_max}}</span></li>  
                        </ul>
                        <button>询问低价</button>
                        <p v-show="index!==item.list.length-1"></p>
                    </div>
                </div>
        </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
<<<<<<< HEAD
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
=======
            Index:0
        }
    },
    computed:{
         ...mapState({
            tablist:state=>state.details.tablist,
            yearNav:state=>state.details.yearNav
        })
    },
    methods:{
        ...mapMutations({navActive:"details/navActive"}),
        // tab切换高亮 切换数据
        active(index,year){
            this.Index=index
            this.navActive(year)
        },
>>>>>>> lailu
    }
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    padding-bottom: 1rem;
    .nav{
        width: 100%;
        height: .8rem;
        background: #fff;
        display: flex;
        align-items: center;
        margin-top: .2rem;
        .active{
            color: #3AACFF;
        }
        li{
            margin: 0 .2rem;
            font-size: .3rem;
        }
    }
    .block{
        width: 100%;
        background: #ffffff;
        display: flex;
        flex-direction: column;
        font-size: .24rem;
        color: #ccc;
        p{
            background: #eeeeee;
            padding:.1rem .2rem;
            color: #999999;
        }
    } 
}
.text{
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ul{
        width: 100%;
        height: 100%;
        padding:0 .2rem;
        li{
        line-height:.40rem;
        }
        li:nth-child(1){
            padding-top: .2rem;
            font-size: .30rem;
            text-decoration: none;
            color: #000;
        }
        li:nth-child(2){
            padding-top: .15rem;
        }
        li:nth-child(3){
            display: flex;
            flex-direction: row-reverse;
            color: #818181;
            span:nth-child(1){
                color: red;
                margin-left: .2rem;
                font-size: .30rem;
            }
        }
    }
    button{
            width: 100%;
            background: #fff;
            outline: none;
            line-height: .7rem;
            border: 0;
            color: #3AACFF;
            border-top: 1px solid #ccc;
    }
}
</style>