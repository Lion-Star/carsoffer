<template>
  <div class="warp">
    <!-- 详情上测标题 -->
    <Head :data="data"></Head>
    <!-- tab切换组件 -->
    <Tab></Tab>
    <div class="fixed">
      <p @click="$router.push(`/asklowprice`)">询问低价</p>
      <p>本地营销商为你售价</p>
    </div>
  </div>
</template>

<script>
import Head from "../components/details/Head";
import Tab from "../components/details/Tab";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      item: "" //数据接口数据
    };
  },
  components: {
    Head,
    Tab
  },
  computed: {
    ...mapState({
      data: state => state.details.data
    })
  },
  methods: {
    ...mapActions({ getlist: "details/getBaoJia" })
  },
  created() {
    this.item = JSON.parse(sessionStorage.getItem("item"));
    this.getlist(this.item.SerialID);
  }
};
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  position: relative;
  overflow-y: auto;
  .fixed {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1rem;
    background: #3aacff;
    font-size: 0.24rem;
    color: #fff;
    flex-direction: column;
    display: flex;
    text-align: center;
    line-height: 0.42rem;
    padding-top: 0.1rem;
    p:nth-child(1) {
      font-size: 0.32rem;
    }
  }
}
</style>