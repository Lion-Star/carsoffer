<template>
    <div class="warp">
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
            nav:['全部'],
            data:[],
            item:'',
            Index:0,
            year:'全部'
        }
        
    },
    methods:{
        // tab切换高亮
        active(index,item){
            this.Index=index
            this.year=item
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
                let year=[]
                market_attribute.filter(item=>{
                    year.push(item.year)
                })
                year.filter((item,index)=>{
                    if(this.nav.indexOf(item)===-1){
                        this.nav.push(item)
                    }
                    
                })
                console.log(this.nav)
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
                padding-right: 20px;
                button{
                    width: 90px;
                    height: 30px;
                    outline: none;
                    border: 0;
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
    height: 55%;
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
        height: 100px;
        background: #fff;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #ccc;
        ul{
            list-style: none;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            li{
                padding: 0 10px;
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