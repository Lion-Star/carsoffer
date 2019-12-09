<template>
  <div class="imgs">
    <div class="image" @click="$router.push(`/picture?SerialID=${data.SerialID}`)">
      <img :src="data.CoverPhoto" alt />
      <div class="num">{{data.pic_group_count}}张照片</div>
    </div>
    <div class="title">
      <div class="tit">
        <div class="titleft">
          <p v-if="data.market_attribute!==undefined">{{data.market_attribute.dealer_price}}</p>
          <p
            v-if="data.market_attribute!==undefined"
          >指导价 {{data.market_attribute.official_refer_price}}</p>
        </div>
        <div class="titright">
          <button @click="$router.push('/asklowprice')">询问低价</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
.imgs {
  width: 100%;
  height: 35%;
  position: relative;
  .num {
    position: absolute;
    top: 2.8rem;
    right: 0.3rem;
    color: #fff;
    padding: .01rem 0.1rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
    width: 1.6rem;
    height: .40rem;
    line-height: .40rem;
    text-align: center;
  }
  .image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.title {
  width: 100%;
  height: 1.3rem;
  background: #ffffff;
  bottom: 0;
  position: absolute;
  border-bottom: 0.1rem solid #f4f4f4;
  .tit {
    padding: 0.1rem 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleft {
      p {
        margin-top: 0.12rem;
      }
      p:nth-child(1) {
        color: red;
        font-size: 0.38rem;
      }
      p:nth-child(2) {
        color: #ccc;
        font-size: .24rem;
      }
    }
    .titright {
      padding-right: 1%;
      button {
        margin-top: 5%;
        width: 3.6rem;
        height: 0.68rem;
        outline: none;
        border: 0;
        font-size: 0.32rem;
        line-height: .68rem;
        background: #3aacff;
        border-radius: .6rem;
        color: #fff;
      }
    }
  }
}
</style>