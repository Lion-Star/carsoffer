<template>
    <div class="warp">
        <div class="imgs">
             <img :src="data.CoverPhoto" alt="">
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
            <div class="block" v-for="(item,index) in list" :key="index">
                <p>{{item.exhaust_str}}{{item.max_power_str}}</p>
                <ul>
                    <li>{{item.market_attribute.year}}款 {{item.car_name}}</li>
                    <li>{{item.horse_power}}马力{{item.gear_num}}档{{item.trans_type}}</li>
                    <li><span>{{item.market_attribute.dealer_price_min}}起</span><span>指导价{{item.market_attribute.dealer_price_max}}</span></li>
                    <li><button>询问低价</button></li>
                </ul>
            </div>
        </div>
        <div class="fixed">
            <p>询问低价</p>
            <p>本地营销商为你售价</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            nav:['全部'],//nav
            data:[],//总数据
            item:'',//数据接口数据
            Index:0,//高亮
            year:'全部',//年份
            list:[]//tab切换数据
        }
        
    },
    methods:{
        // tab切换高亮
        active(index,item){
            this.Index=index
            let list =[]
            this.data.list.forEach(item=>{
                
                if(item.market_attribute.year===item){
                    list.push(item)
                    this.list=list
                    console.log(item.market_attribute.year)
                }else{
                    list.push(item)
                    this.list=list
                }
            })
        },
        //请求总数据
        getlist(){
            axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.item.SerialID}`).then(res=>{
                if(res.data.code===1){
                    console.log(res.data.data)
                    this.data=res.data.data
                }else{
                    alert('数据请求失败')
                }
                let market_attribute=[]
                this.data.list.filter(item=>{
                    market_attribute.push(item.market_attribute)
                })
                //年份
                let year=[]
                market_attribute.filter(item=>{
                    year.push(item.year)
                })
                year.filter((item,index)=>{
                    if(this.nav.indexOf(item)===-1){
                        this.nav.push(item)
                    }  
                })   
                //耗油排序
                this.data.list.sort((a,b)=>{
                    return ( a.exhaust - b.exhaust || a.max_power - b.max_power || a.market_attribute.year - b.market_attribute.year)
                })
            })
        }
    },
    created(){
         this.item=JSON.parse(sessionStorage.getItem('item'))
         this.getlist()
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
.imgs{
    width: 100%;
    height: 35%;
    img{
    width: 100%;
    height: 75%;
    }
    .title{
        width: 100%;
        height: 25%;
        background: #ffffff;
        .tit{
            padding: 5px 10px ;
            display: flex;
            justify-content: space-between;
            .titleft{
                p:nth-child(1){
                    color: red;
                    font-size: 16px;
                }
                p:nth-child(2){
                    color: #ccc;
                    font-size: 12px;
                }
            }
            .titright{
                padding-right: 1%;
                button{
                    margin-top: 5%;
                    width: 160px;
                    height: 30px;
                    outline: none;
                    border: 0;
                    font-size: 14px;
                    line-height: 30px;
                    background: #3AACFF;
                    border-radius: 3px;
                    color: #fff;
                }
            }
        }
    }
}
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