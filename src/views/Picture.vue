<template>
  <div class="p-page">
    <div class="navTitle">
      <span @click="setColor">颜色</span>
      <span>|</span>
      <span>车款</span>
    </div>

    <div class="content">
      <ul v-for="(item,index) in imgList" :key="index">
        <li v-for="(val,i) in item.List" :key="i" :style="{backgroundImage:'url('+val.Url+' )'}"></li>
        <!-- 遮罩层 -->
        <div class="mask">
          <p>{{item.Name}}</p>
          <p>{{item.Count}}&nbsp;张&nbsp;></p>
        </div>
      </ul>
    </div>

    <transition name="scroll-top">
      <Color v-if="showColor" :SerialID="SerialID" :showColor.sync="showColor"></Color>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Color from "@/components/Color/Color.vue";
export default {
  data() {
    return {
      SerialID: "",
      showColor: false
    };
  },
  components: {
    Color
  },
  computed: {
    ...mapState({
      imgList: state => state.picture.imgList
    })
  },
  methods: {
    //映射函数
    ...mapActions({
      getImageList: "picture/getImageList"
    }),
    setColor() {
      this.showColor = true;
    }
  },
  created() {
    //路由接收参数
    this.SerialID = this.$route.query.SerialID;
    //调用接口获取图片列表
    console.log(this.$route.query);
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
      border-bottom: 0.2rem solid #fff;
      position: relative;
      .mask {
        width: 2.46rem;
        height: 2.46rem;
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
        width: 2.46rem;
        height: 2.46rem;
        border: 0.04rem solid #fff;
      }
    }
  }
}
</style>