<template>
  <div class="dealer-page">
    <div class="dealer">
      <van-checkbox-group v-model="result">
        <van-checkbox v-for="(item,index) in DealerList" :key="index" :name="index">
          <div class="content">
            <div class="cont">
              <p>{{item.dealerShortName}}</p>
              <p>{{item.address}}</p>
            </div>
            <div class="city">
              <p>
                <span></span>
                <span>万</span>
              </p>
              <p>售{{item.saleRange}}</p>
            </div>
          </div>
        </van-checkbox>
        <div class="empty" v-if="DealerList.length>0"></div>
      </van-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ["DealerList"],
  data() {
    return {
      result: [0, 1, 2, 3]
    };
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.dealer-page {
  width: 100%;
}
.dealer {
  width: 100%;
  background: #fff;
  padding: 0 10px;
}

.dealer .content:first-child {
  border-top: none;
}

.content {
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  height: 1.7rem;
  display: flex;

  .cont {
    flex: 3;
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
    padding-top: 0.1rem;
    p {
      flex: 2;
    }
    p:last-child {
      flex: 3;
    }
  }
  .city {
    flex: 1;
    text-align: right;
    padding-top: 0.3rem;
    margin-right: -6.5rem;
  }
}

.cont p:first-child {
  font-size: 0.3rem;
  line-height: 30px;
}
.cont p:last-child {
  font-size: 0.24rem;
  padding: 2px;
  color: #a2a2a2;
  display: inline-block;
  max-width: 4.6rem;
}

.city p:first-child span:last-child {
  color: red;
  font-size: 14px;
}
.city p:last-child {
  display: inline-block;
  max-width: 4.6rem;
  font-size: 0.24rem;
  color: #a2a2a2;
  line-height: 35px;
}
.empty {
  width: 100%;
  height: 1rem;
}
</style>