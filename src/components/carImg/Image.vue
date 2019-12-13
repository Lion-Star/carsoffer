<template>
    <div class="image">
        <div class="img" v-for="(item,index) in carImg" :key="index">
             <div class="image_item_list">
                <div class="image_ps" @click="toimg(item.Id)">
                    <p class="image_ps_wan">{{item.Name}}</p>
                    <p>{{item.Count}}张</p>
                </div>
                <li v-for="(itemimg,key) in item.List" :key="key" @click="toSwiper(key,item.Id)">
                    <span src='' :style="{backgroundImage:'url('+itemimg.Url+')'}" />
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    computed:{
        ...mapState({
            carImg:state=>state.img.carImg
        })
    },
    methods:{
        ...mapActions({
            getTypeImg:"img/getTypeImg",
        }),
        ...mapMutations({
            setSerialID:"img/setSerialID",
            setImgID:"img/setImgID",
            showImg:"img/showImg",
            setCurrent:"img/setCurrent"
        }),
        //进入图片类型
        toimg(id){
            this.setImgID(id)
            this.getTypeImg()
            this.showImg()
        },
        toSwiper(index,id){
            this.setImgID(id)
            this.getTypeImg()
            this.setCurrent(index)
            this.$emit("update:showSwiper",true)
        }
    },
    created(){
        this.setSerialID(sessionStorage.getItem('SerialID'))
    }
}
</script>

<style lang="scss" scoped>
.image{
    margin-top: .9rem;
}
.image_item_list{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    justify-content: space-between;
    li{
        width: 2.43rem;
        height: 2.43rem;
        margin-top: .1rem;
        span{
            display: inline-block;
            width: 2.43rem;
            height: 2.43rem;
            background-size: 4rem;
        }
    }
}
.image_ps{
    position: absolute;
    height: 2.43rem;
    width:2.43rem;
    top: 0;
    left: 0;
    color: #ffffff;
    background: rgba(56,90,130,.5);
    font-size: 13px;
    text-align: center;
     margin-top: .1rem;
    .image_ps_wan{
        margin-top: .8rem;
        font-size: .28rem;
        margin-bottom: .1rem;
    }
}
</style>