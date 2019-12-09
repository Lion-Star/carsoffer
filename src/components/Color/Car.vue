<template>
  <div class="car-page">
    <div class="top-c" v-if="type!=='price'" @click="$emit('update:showCar', false)">全部车款{{type}}</div>
    <!-- 年份列表 -->
    <div class="nav-c">
      <span
        v-for="(item,index) of yearList"
        :key="index"
        @click="active(index,item)"
        :class="index===Index?'active':''"
      >{{item}}</span>
    </div>
    <!-- 车款列表 -->
    <div class="bottom-c">
      <div class="block" v-for="(item,index) in tabData" :key="index">
        <p>{{item.key}}</p>
        <div class="tabBox" v-for="(val,i) in item.list" :key="i" @click="enter">
          <li>{{val.market_attribute.year}} 款&nbsp;{{val.car_name}}</li>
          <li>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</li>
          <li>
            <span>&nbsp;&nbsp;&nbsp;{{val.market_attribute.dealer_price_min}}起&nbsp;&nbsp;&nbsp;</span>
            指导价 &nbsp;&nbsp;&nbsp;{{val.market_attribute.official_refer_price}}
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["SerialID","type"],
  data() {
    return {
      colorList: [],
      curIndex: 0,
      Index:0
    };
  },
  computed: {
    ...mapState({
      yearList: state => state.details.yearList,
      tabData: state => state.details.tabData
    })
  },
  methods: {
    ...mapActions({ getlist: "details/getBaoJia" }),
    ...mapMutations({changeYearList: "details/changeYearList"}),
    active(index, year) {
      this.Index = index;
      this.changeYearList(year);
    },
    selectCar(colorId) {
      this.$emit("update:showCar", false);
    },
    enter(){
      if(this.type==="price"){
        this.$emit('update:showCar', false)
      }
    }
  },
  created() {
    this.item = JSON.parse(sessionStorage.getItem("item"));
    this.getlist(this.item.SerialID);
  }
};
</script>

<style lang="scss" scoped>
.car-page {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #f4f4f4;
  overflow: scroll;
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
  text-align: center;
  line-height: 0.76rem;
  height: 0.76rem;
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
.block {
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.24rem;
  border: none;
  p {
    padding: 0 0.2rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
  .tabBox {
    width: 100%;
    background: #fff;
    border-bottom: 0.1rem solid #f4f4f4;
    position: relative;
    height: 1.2rem;
    li {
      font-size: 0.2rem;
      padding: 0.22rem 0 0 0.22rem;
      font-weight: 348;
      color: #3d3d3d;
      span {
        margin-left: 0.32rem;
        color: red;
        padding-top: 0.12rem;
        font-size: 0.28rem;
      }
    }
    li:nth-child(2) {
      font-size: 0.2rem;
      color: #bdbdbd;
    }
    li:nth-child(3) {
      display: flex;
      color: #818181;
      line-height: 0.32rem;
      flex-direction: column;
      padding-right: 0.18rem;
      position: absolute;
      right: 0;
      top: .01rem
    }
    button {
      font-size: 0.32rem;
      margin-top: 0.1rem;
      width: 100%;
      background: #fff;
      outline: none;
      line-height: 0.7rem;
      border: none;
      color: #3aacff;
      border-top: 0.06rem solid #f4f4f4;
    }
  }
}
</style>