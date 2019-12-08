<template>
    <div class="image">
        <div class="img" v-for="(item,index) in carImg" :key="index">
             <div class="image_item_list">
                <div class="image_ps">
                    <p class="image_ps_wan">{{item.Name}}</p>
                    <p>{{item.Count}}张</p>
                </div>
                <li v-for="(itemimg,key) in item.List" :key="key">
                    <!-- <img :src="'url('+itemimg.Url+')'" alt=""> -->
                    <span src='' :style="{backgroundImage:'url('+itemimg.Url+')'}" />
                    <!-- <img :src="getPicUrl(item)" @load="setImgClass($event.target)" :onerror="noPic"> -->
                </li>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['carImg']
}
</script>

<style lang="scss" scoped>
.image{
    margin-top: .2rem;
}
.image_item_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    li{
        width: 2.3rem;
        height: 2.3rem;
        margin: 0 .1rem .1rem .1rem ;
        span{
            display: inline-block;
            width: 2.3rem;
            height: 2.3rem;
            background-size: 4rem;
        }
    }
}
.image_ps{
    position: absolute;
    height: 2.3rem;
    width:2.3rem;
    margin: 0 .1rem .1rem .1rem ;
    top: 0;
    left: 0;
    color: #ffffff;
    background: rgba(56,90,130,.5);
    font-size: 13px;
    text-align: center;
    .image_ps_wan{
        margin-top: .8rem;
        font-size: .28rem;
        margin-bottom: .1rem;
    }
}
</style>