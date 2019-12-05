<template>
  <div class="main">
    <!-- 数据切换 -->
    <div class="nav">
        <li
            v-for="(item,index) in yearNav"
            :key="index"
            @click="active(index,item)"
            :class="index===Index?'active':''"
            >{{item}}</li>
    </div>
    <!-- 下面渲染 -->
    <div class="block" v-for="(item,index) in tablist" :key="index">
      <p>{{item.key}}</p>
      <div class="text" v-for="(val,index) in item.list" :key="index">
            <ul>
                <li>{{val.market_attribute.year}}款 {{val.car_name}}</li>
                <li>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</li>
                <li>
                    <span>{{val.market_attribute.dealer_price_min}}起</span>
                    <span>指导价{{val.market_attribute.dealer_price_max}}</span>
                </li>
            </ul>
            <button>询问低价</button>
            <p v-show="index!==item.list.length-1"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      Index: 0
    };
  },
  computed: {
    ...mapState({
      tablist: state => state.details.tablist,
      yearNav: state => state.details.yearNav
    })
  },
  methods: {
    ...mapMutations({ navActive: "details/navActive" }),
    // tab切换高亮 切换数据
    active(index, year) {
      this.Index = index;
      this.navActive(year);
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  padding-bottom: 1rem;
    .nav {
        width: 100%;
        height: 0.8rem;
        background: #fff;
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
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
        background: #ffffff;
        display: flex;
        flex-direction: column;
        font-size: 0.24rem;
        color: #ccc;
        p {
            background: #eeeeee;
            padding: 0.1rem 0.2rem;
            color: #999999;
        }
    }
}
.text {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
        ul {
        width: 100%;
        height: 100%;
        padding: 0 0.2rem;
        li {
            line-height: 0.4rem;
        }
        li:nth-child(1) {
            padding-top: 0.2rem;
            font-size: 0.3rem;
            text-decoration: none;
            color: #000;
        }
        li:nth-child(2) {
            padding-top: 0.15rem;
        }
        li:nth-child(3) {
            display: flex;
            flex-direction: row-reverse;
            color: #818181;
                span:nth-child(1) {
                color: red;
                margin-left: 0.2rem;
                font-size: 0.3rem;
                }
        }
    }
    button {
    width: 100%;
    background: #fff;
    outline: none;
    line-height: 0.7rem;
    border: 0;
    color: #3aacff;
    border-top: 1px solid #ccc;
    }
}
</style>