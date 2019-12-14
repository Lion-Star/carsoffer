<template>
  <div class="home">
    <div class="box" ref="box">
      <div class="select" v-for="(item,index) in list" :key="index" ref="select">
        <div class="top" :id="index">{{item.title}}</div>
        <div class="bottom">
          <li v-for="(val,i) in item.data" :key="i" @click="showPopup(val.MasterID)">
            <div class="imgs">
                  <img v-lazy="val.CoverPhoto" />
            </div>
            <span>{{val.Name}}</span>
          </li>
        </div>
      </div>
    </div>
    <!-- 弹窗组件 -->
    <van-popup v-model="show" position="right" :style="{ height: '100%' }">
      <div class="dialog" v-for="(item,index) in carlist" :key="index">
        <div class="top">{{item.GroupName}}</div>
        <div class="c-bottom" v-for="(val,i) in item.GroupList" :key="i">
          <dl @click="detail(val)">
            <dt>
              <img :src="val.Picture" />
            </dt>
            <dd>
              <span>{{val.AliasName}}</span>
              <b>{{val.DealerPrice}}</b>
            </dd>
          </dl>
        </div>
      </div>
    </van-popup>
    <!-- 点击跳转 -->
    <Drawer :list="list" @skip="skip"></Drawer>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapState, mapMutations, mapActions } from "vuex";
import Drawer from "@/components/home/Drawer.vue";
export default {
  name: "home",
  components: {
    Drawer
  },
  data() {
    return {
      show: false, //弹层显示隐藏
      left: null,
      right: null,
      ind: 0,
      scrollH: 0
    };
  },
  computed: {
    ...mapState({
      list: state => state.home.list,
      carlist: state => state.home.carlist
    })
  },
  mounted() {
    this.getMasterBrandList();
  },
  methods: {
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      getMakeListByMasterBrandId: "home/getMakeListByMasterBrandId"
    }),
    //跳转详情
    detail(val) {
      let item = JSON.stringify(val);
      sessionStorage.setItem("item", item);
      this.$router.push("/details");
    },
    //点击弹窗
    showPopup(id) {
      this.show = true;
      this.getMakeListByMasterBrandId(id);
    },
    //点击跳转
    skip(index) {
      let boxel = this.$refs.box;
      boxel.scrollTop = boxel.children[index].offsetTop;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
}
.main {
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.top {
  font-size: 0.32rem;
  line-height: 0.4rem;
  background: #f4f4f4;
  color: #aaa;
  padding-left: 0.3rem;
}
.select {
  width: 100%;
  .bottom {
    width: 100%;
    li {
      height: 1rem;
      box-sizing: border-box;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      margin: 0 .4rem;
      .imgs{
          width: 0.8rem;
          height: 0.8rem;
          img {
            width: 100%;
            height: 100%;
          }
      }
      span{
        margin-left: .5rem;
      }
    }
    li:last-child {
      border: none;
    }
  }
}
.c-bottom {
  width: 100%;
  display: flex;
  padding: 0.2rem;
  color: #999;
  border-bottom: 0.01rem solid #ccc;
  dl {
    display: flex;
    width: 100%;
    dd {
      height: 100%;
      padding-left: 0.1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        font-size: 0.36rem;
      }
      b {
        color: #f00;
        font-size: 0.28rem;
        font-weight: 400;
      }
    }
    dt {
      width: 40%;
      height: 100%;
      img {
        width: 1.8rem;
      }
    }
  }
}

.van-popup--right {
  width: 75%;
}
</style>