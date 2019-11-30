<template>
    <div class="warp">
        <div class="imgs">
             <img src="http://img2.bitautoimg.com/autoalbum/files/20160831/022/12341202292972_5235269_8.jpg" alt="">
                <div class="title">
                    <div class="tit">
                        <div class="titleft">
                            <p>45.68-127.98万</p>
                            <p>指导价 45-127万</p>
                        </div>
                        <div class="titright">
                            <button>询问低价</button>
                        </div>
                    </div>
                </div>  
        </div>
        <div class="main">
            <div class="nav">
                <li v-for="(item,index) in nav" :key="index">{{item}}</li>
            </div>
            <div class="block">
                <p>2019 的个发鬼地方个是大法官的</p>
                <p>马力当</p>
                <p><span>48.26万起</span><span>指导价 48.18万</span></p>
                <button>询问低价</button>
            </div>
            <div class="block">
                <p>2019 的个发鬼地方个是大法官的</p>
                <p>马力当</p>
                <p><span>48.26万起</span><span>指导价 48.18万</span></p>
                <button>询问低价</button>
            </div>
            <div class="block">
                <p>2019 的个发鬼地方个是大法官的</p>
                <p>马力当</p>
                <p><span>48.26万起</span><span>指导价 48.18万</span></p>
                <button>询问低价</button>
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
            nav:['全部','2020','2019']
        }
        
    },
    methods:{
        getlist(){
            axios.get('https://baojia.chelun.com/v2-dealer-alllist.html').then(res=>{
                console.log(res.data)
            })
        }
    },
    created(){
        
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
        p{
            padding: 0 10px;
            padding-top: 5px;
        }
        p:nth-child(1){
            font-size: 14px;
            color: #000;
        }
         p:nth-child(3){
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
            color: cyan;
            border-top: 1px solid #ccc;
        }
    } 
}

</style>