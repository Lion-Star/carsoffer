<template>
  <div class="main">
    <!-- 数据切换 -->
    <div class="nav">
      <li
        v-for="(item,index) in yearList"
        :key="index"
        @click="active(index,item)"
        :class="index===Index?'active':''"
      >{{item}}</li>
    </div>
    <!-- 下面渲染 -->
    <div class="block" v-for="(item,index) in tabData" :key="index">
      <p>{{item.key}}</p>
      <div class="tabBox" v-for="(val,i) in item.list" :key="i">
        <li>{{val.market_attribute.year}} 款&nbsp;{{val.car_name}}</li>
        <li>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</li>
        <li>
          <span>&nbsp;&nbsp;&nbsp;{{val.market_attribute.dealer_price_min}}起&nbsp;&nbsp;&nbsp;</span>
          指导价 &nbsp;&nbsp;&nbsp;{{val.market_attribute.official_refer_price}}
        </li>
        <button @click="$router.push({path:'/asklowprice',query:{val}})">询问底价</button>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      Index: 0, //高亮
      year: "全部" //年份
    };
  },
  computed: {
    ...mapState({
      yearList: state => state.details.yearList,
      tabData: state => state.details.tabData
    })
  },
  methods: {
    ...mapMutations({
      changeYearList: "details/changeYearList"
    }),
    //tab切换高亮 切换数据
    active(index, year) {
      this.Index = index;
      this.changeYearList(year);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  .nav {
    width: 100%;
    height: 0.92rem;
    background: #fff;
    display: flex;
    align-items: center;
    .active {
      color: #3aacff;
    }
    li {
      margin: 0 0.2rem;
      font-size: 0.3rem;
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
      height: 0.5rem;
      line-height: 0.5rem;
      font-size: 0.26rem;
      color: #999;
      background: #f4f4f4;
    }
    .tabBox {
      width: 100%;
      background: #fff;
      border-bottom: 0.1rem solid #f4f4f4;
      li {
        font-size: 0.29rem;
        padding: 0.22rem 0 0 0.22rem;
        font-weight: 348;
        color: #3d3d3d;
        span {
          margin-left: 0.12rem;
          color: red;
          font-size: 0.32rem;
        }
      }
      li:nth-child(2) {
        font-size: 0.2rem;
        color: #bdbdbd;
      }
      li:nth-child(3) {
        display: flex;
        font-size: 0.24rem;
        color: #818181;
        line-height: 0.32rem;
        flex-direction: row-reverse;
        padding-right: 0.26rem;
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
  .empty {
    height: 1rem;
  }
}
</style>