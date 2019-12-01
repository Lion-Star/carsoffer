<template>
    <div class="warp">
        <div class="imgs">

            <div class="imgtop">
                 <img :src="item.CoverPhoto" alt="">
            </div>

            <div class="title">
                <div class="tit">
                    <div class="titleft">
                        <p v-if="data.market_attribute!==undefined">{{data.market_attribute.dealer_price}}</p>
                        <p v-if="data.market_attribute!==undefined">指导价 {{data.market_attribute.official_refer_price}}万</p>
                    </div>
                    <div class="titright">
                        <button>询问低价</button>
                    </div>
                </div>
            </div>  
        </div>


        <div class="main">
            <div class="nav" v-if="data.list!==undefined">
                <li v-for="(item,index) in nav" :key="index">{{item}}</li>
            </div>
            <div class="block" v-for="(item,index) in data.list" :key="index">
                
                <div class="b-box" v-if="item">
                    <p></p>
                    <ul>
                        <li>{{item.market_attribute.year}}款 {{item.car_name}}</li>
                        <li>{{item.trans_type}}</li>
                        <li><span>20.98万起</span><span>指导价 28.68万</span></li>
                        <li><button>询问低价</button></li>
                    </ul>
                </div>
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
            data:[],
            item:{},
            nav:[]
        }  
    },
    methods:{
        //请求总数据
        async getlist(){
           let res= await axios.get(`https://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${this.item.SerialID}`)
           this.data=res.data.data
           console.log(this.data);
        }
    },
    created(){
        this.item=JSON.parse(sessionStorage.getItem('item'))
       
        this.getlist()

        let yeararr =[]
        console.log(this.data.list);
        
        this.data.list.forEach((item,index)=>{
            yeararr.push()
        })
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
    .imgtop{
        width: 100%;
        height: 75%;
        img{
        width: 100%;
        height: 100%;
        }
    }
    .title{
        padding-top: 5px;
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
                padding-right: 10px;
                
                button{
                    width: 150px;
                    height: 40px;
                    outline: none;
                    border: 0;
                    background: #09f;
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
        font-size: 12px;
        color: #ccc;
        ul{
            list-style: none;
            width: 100%;
            height: 100%;
            li{
            padding: 0 10px;
            padding-top: 5px;
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
                }
                
            }
            button{
                margin-top: 5px;
                width: 100%;
                background: #fff;
                outline: none;
                line-height: 35px;
                border: 0;
                color: #09f;
                border-top: 1px solid #ccc;
            }
        }
    } 
}

</style>