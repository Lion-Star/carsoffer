<template>
    <div class="image">
        <div class="img" v-for="(item,index) in carImg" :key="index">
             <div class="image_item_list">
                <div class="image_ps">
                    <p class="image_ps_wan">{{item.Name}}</p>
                    <p>{{item.Count}}张</p>
                </div>
                <li v-for="(itemimg,key) in item.List" :key="key">
                    <span src='' :style="{backgroundImage:'url('+itemimg.Url+')'}" />
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
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
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