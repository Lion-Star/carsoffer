<template>
  <div class="imgs">
    <div class="image">
      <img :src="data.CoverPhoto" alt />
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
          <button>询问低价</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss" scoped>
.imgs {
  width: 100%;
  height: 35%;
  position: relative;
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
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .titleft {
      p {
        margin-top: .12rem;
      }
      p:nth-child(1) {
        color: red;
        font-size: 16px;
      }
      p:nth-child(2) {
        color: #ccc;
        font-size: 12px;
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
        line-height: 30px;
        background: #3aacff;
        border-radius: 3px;
        color: #fff;
      }
    }
  }
}
</style>