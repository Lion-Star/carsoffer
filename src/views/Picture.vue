<template>
<div class="p-page">
    <!-- 汽车分类列表 -->
    <div class="navTitle">
        <span @click="setColor" v-if="!colorName">颜色</span>
        <span @click="setColor" v-else>{{colorName}}</span>
        <span>|</span>
        <span @click="setCar">车款</span>
    </div>

    <div class="content">
        <ul v-for="(item,index) in imgList" :key="index">
            <li v-for="(val,i) in item.List" :key="i" v-lazy:background-image="val.Url" @click.self="showSwiper(i, item.Count, item.List, item.Id)"></li>
            <!-- 遮罩层 -->
            <div class="mask" @click="clickImageID(item.Id)">
                <p>{{item.Name}}</p>
                <p>{{item.Count}}&nbsp;张&nbsp;></p>
            </div>
        </ul>
    </div>

    <!-- banner列表 -->
    <ImageTypeList v-if="showImageList" :showImageSwiper.sync="showImageSwiper" />

    <!-- 颜色组件 -->
    <transition name="scroll-top">
        <Color v-if="showColor" :SerialID="SerialID" :showColor.sync="showColor"></Color>
    </transition>

    <!-- 车款组件 -->
    <transition name="scroll-top">
        <Car v-if="showCar" :SerialID="SerialID" :showCar.sync="showCar"></Car>
    </transition>

    <!-- 轮播预加载组件 -->
    <ImagePreview v-if="showImageSwiper" :showImageSwiper.sync="showImageSwiper"></ImagePreview>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from "vuex";
//颜色组件
import Color from "@/components/Color/Color.vue";
//引入车款组件
import Car from "@/components/Color/Car.vue";
//引入分类列表组件
import ImageTypeList from "@/components/Color/ImageTypeList.vue";
//引入轮播预览组件
import ImagePreview from "@/components/Color/ImagePreview.vue";

export default {
    data() {
        return {
            SerialID: "",
            showColor: false,
            showCar: false,
            showImageList: false,
            showImageSwiper: false
        }
    },
    components: {
        Color,
        Car,
        ImageTypeList,
        ImagePreview
    },
    computed: {
        ...mapState({
            imgList: state => state.picture.imgList,
            colorName: state => state.picture.colorName,
            colorId: state => state.picture.colorId,
        })
    },
    watch: {
        colorId() {
            this.getImageList(this.SerialID);
        },
        carId() {
            this.getImageList(this.SerialID);
        }
    },
    methods: {
        //映射Actions函数
        ...mapActions({
            getImageList: "picture/getImageList",
            getImageTypeList: "picture/getImageTypeList"
        }),
        //映射Mutations函数
        ...mapMutations({
            setImageID: 'picture/setImageId',
            setSerialID: 'picture/setSerialID',
            setCurrent: 'picture/setCurrent',
            setImageTypeList: 'picture/setImageTypeList'
        }),
        //显示颜色组件
        setColor() {
            this.showColor = true;
        },
        //显示车款组件
        setCar() {
            this.showCar = true;
        },
        //显示轮播组件
        showSwiper(index, Count, List, ImageID) {
            this.setCurrent(index);
            this.setImageID(ImageID)
            this.getImageTypeList({
                Count,
                List,
                ImageID
            });
            this.showImageSwiper = true;
        },
        // 点击分类进入分类列表
        clickImageID(id) {
            this.setImageID(id);
            this.showImageList = true;
        }
    },
    created() {
        //路由接收参数
        this.SerialID = this.$route.query.SerialID;
        //SerialID 存入store
        this.setSerialID(this.SerialID);
        //调用接口获取图片列表
        this.getImageList(this.SerialID);
    }
};
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to {
    transform: translate3d(0, 90%, 0);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
    transition: transform 0.6s linear;
}

.p-page {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .navTitle {
        width: 100%;
        display: flex;
        line-height: 0.8rem;
        vertical-align: middle;
        font-size: 0.28rem;
        color: #454545;
        border-bottom: 0.16rem solid #f5f5f5;

        span {
            flex: 5;
            text-align: center;
        }

        span:nth-child(2) {
            flex: 1;
            color: #ccc;
        }
    }

    .content {
        flex: 1;
        box-sizing: border-box;
        overflow: scroll;

        ul {
            display: flex;
            flex-wrap: wrap;
            border-bottom: 0.1rem solid #fff;
            position: relative;

            .mask {
                width: 2.48rem;
                height: 1.48rem;
                position: absolute;
                top: 0;
                left: 0;
                background: rgba(56, 90, 130, 0.5);
                color: #fff;
                display: flex;
                flex-direction: column;
                text-align: center;
                padding-top: 1rem;
                font-size: 0.24rem;

                p {
                    padding: 0.04rem;
                }
            }

            li {
                background-position: center;
                width: 2.4rem;
                height: 2.4rem;
                border: 0.04rem solid #fff;
            }
        }
    }
}
</style>
