<template>
  <div class="color-page">
    <div class="top-c" @click="$emit('update:showColor', false)">全部颜色</div>
    <div class="nav-c">
      <!-- 遍历汽车颜色对象 取他的key 即为年份-->
      <span
        v-for="(item, key, index) of yearData"
        :key="index"
        :class="{active: curIndex==index}"
        @click="changeIndex(item,index)"
      >{{key}}</span>
    </div>
    <!-- 颜色列表 -->
    <div class="bottom-c">
      <ul>
        <li v-for="(item,index) of colorList" :key="index" @click="selectColor(item.ColorId)">
          <span :style="{background: item.Value}"></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["SerialID"],
  data() {
    return {
      colorList: [],
      curIndex: 0
    };
  },
  computed: {
    ...mapState({
      yearData: state => state.picture.yearData,
      colorId: state => state.picture.colorId,
      carId: state => state.picture.carId
    })
  },
  methods: {
    ...mapActions({
      getYearColorList: "picture/getYearColorList",
      getImageList: "picture/getImageList"
    }),
    ...mapMutations({
      setColor: "picture/setColorId"
    }),
    changeIndex(item, index) {
      this.curIndex = index;
      this.colorList = item;
    },
    selectColor(colorId) {
      this.$emit("update:showColor", false);
      this.setColor(colorId);
    }
  },
  watch: {
    colorId() {
      this.getImageList(this.serialId);
    },
    carId() {
      this.getImageList(this.serialId);
    }
  },
  async created() {
    await this.setColor(this.colorId);
    await this.getYearColorList(this.SerialID);
    await this.changeIndex(Object.values(this.yearData)[0], 0);
  }
};
</script>

<style lang="scss" scoped>
.color-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f4f4f4;
}

.top-c {
  margin-top: 0.2rem;
  background: #fff;
  width: 100%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  color: #09f;
}

.nav-c {
  margin-top: 0.2rem;
  background: #fff;
  width: 100%;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  display: flex;
  overflow: auto;
  span {
    flex-shrink: 0;
    width: 1.2rem;
  }
  span.active {
    color: #09f;
  }
}
.bottom-c {
  width: 100%;
  background: #fff;
  ul {
    margin-top: 0.15rem;
    padding: 0 0.2rem;
    overflow: hidden;
    background: #fff;
    li {
      float: left;
      width: 3.45rem;
      font-size: 0.32rem;
      line-height: 0.68rem;
      border: 1px solid #3aacff;
      box-sizing: border-box;
      margin: 0.2rem 0;
      border-radius: 0.05rem;
      margin: 0.05rem;
      span {
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        margin-left: 0.4rem;
        vertical-align: -12%;
        background: #fe9210;
        box-sizing: border-box;
        border: 1px solid #818181;
      }
    }
  }
}
</style>