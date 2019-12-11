<template>
  <div class="mask">
    <div class="left" @click="cancel()"></div>
    <div class="right">
      <li v-for="(item,index) in countyList" :key="index" @click="back(item)">{{item.CityName}}</li>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["countyList"],
  computed:{
    ...mapState({
      DealerList1: state => state.lowprice.DealerList
    })
  },
  methods: {
    ...mapActions({
      getDealerList: "lowprice/getDealerList"
    }),
    cancel() {
      this.$emit("update:showMask", false);
      console.log("111");
    },
    back(item) {
      console.log(item.CityID);
      let params ={cityId:item.CityID}
      this.getDealerList()
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
}
li {
  padding-left: 0.3rem;
  font-size: 0.28rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-left: 0.1rem;
  position: relative;
}
.left {
  width: 30%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.right {
  width: 70%;
  height: 100%;
  background: #fff;
  overflow: auto;
}
</style>