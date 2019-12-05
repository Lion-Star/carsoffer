<template>
  <div class="color-page">
    <div class="top-c">全部颜色</div>
    <div class="nav-c">
      <!-- 遍历汽车颜色对象 取他的key 即为年份-->
      <span
        v-for="(item, key, index) of yearData"
        :key="index"
        :class="{active: curIndex==index}"
        @click="changeIndex(item,index)"
      >{{key}}</span>
    </div>
    <div class="bottom-c">
      <ul>
        <li v-for="(item,index) of colorList" :key="index" @click="clickColor(item.ColorId)">
          <span :style="{background: item.Value}"></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
      yearData: state => state.picture.yearData
    }),
    clickColor(colorId){
      this.setColor(colorId);
      this.$emit('update:showColor', false)
    },
  },
  methods: {
    ...mapActions({
      getYearColorList: "picture/getYearColorList",
      setColor:"picture/setColorId"
    }),
    changeIndex(item, index) {
      this.curIndex = index;
      this.colorList = item;
    }
  },
  created() {
    console.log(this.yearData);

    this.getYearColorList(this.SerialID);
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