<template>
    <div class="warp">
        <!-- 点击颜色、车款 -->
        <div class="nav">
            <span v-for="(item,index) in nav" :key="index" @click ="toColor(index)">
                {{item}} ∨
            </span>
        </div>
        <!-- 图片渲染 -->
        <Images :showSwiper.sync="showSwiper" />
        <!-- 点击弹出颜色组件 -->
        <transition name="scroll-top">
            <div class="carColor" v-show = "showColor">
                <carColor :showColor.sync="showColor" />
            </div>
        </transition>
        <!-- 点击弹出车款组件 -->
        <transition name="scroll-top">
            <div class="Cartype" v-show = "showType">
                <Cartype :showType.sync="showType" />
            </div>
        </transition>
        <!-- 点击类型图片 -->
        <ImgList v-if="showImg" :showImg.sync="showImg" :showSwiper.sync="showSwiper" />
        <!-- 点击弹出swiper -->
        <ImageSwiper v-if="showSwiper" :showSwiper.sync="showSwiper" />
    </div>
</template> 

<script>
import { mapState,mapActions } from "vuex";
import carColor from '../components/carImg/carColor'
import Cartype from '../components/carImg/Cartype'
import Images from '../components/carImg/Image'
import ImgList from '../components/carImg/imgList'
import ImageSwiper from '../components/carImg/ImageSwiper'
export default {
    data(){
        return{
            nav:['颜色','车款'],
            showColor:false,
            showType:false,
            showSwiper:false
        }
    },
    components:{
        carColor,
        Images,
        Cartype,
        ImgList,
        ImageSwiper
    },
    computed:{
        ...mapState({
            showImg:state=>state.img.showImg
        })
    },
    methods:{
        ...mapActions({
            getImg:"img/getImg"
        }),
        //点击颜色、车款
        toColor(index){
            if(index === 0){
                this.showColor=true
            }else{
                this.showType=true
            }
        }
    },
    created(){
        //获取图片接口
         this.getImg(sessionStorage.getItem('SerialID'))
    }
}
</script>

<style lang="scss" scoped>
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition: transform .3s linear;
}
.warp{
    width: 100%;
    height: 100%;
    color: #000;
    background: #f4f4f4;
    overflow-y: auto;
}
.carColor{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
}
.Cartype{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow-y: auto;
}
.nav{
    width: 100%;
    height: .8rem;
    background: #ffffff;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 3;
    span{
        flex: 1;
        text-align: center;
        line-height: .8rem;
    }
}
</style>