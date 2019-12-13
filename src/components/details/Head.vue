<template>
    <div class="imgs">
        <div class="image" @click="toImg">
            <img :src="data.CoverPhoto" alt="">
            <span>{{data.pic_group_count}}张照片</span>
        </div>
        <div class="title">
            <div class="tit">
                <div class="titleft">
                    <p v-if="data.market_attribute!==undefined">{{data.market_attribute.dealer_price}}</p>
                    <p v-if="data.market_attribute!==undefined">指导价 {{data.market_attribute.official_refer_price}}</p>
                </div>
                <div class="titright">
                    <button @click="toOffer(data)">询问低价</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
export default {
  props: ["data"],
  methods:{
      toImg(){
          sessionStorage.setItem('SerialID',this.data.SerialID)
          this.$router.push(`/img?SerialID=${this.data.SerialID}`)
      },
      toOffer(data){
          let title = {img:data.Picture,name:data.AliasName}
          sessionStorage.setItem('offer',title)
          this.$router.push('/offer')
          console.log(sessionStorage.setItem('offer',JSON.stringify(title)))
      }
  }
}
</script>

<style lang="scss" scoped>
.imgs {
  width: 100%;
  height: 38%;
  position: relative;
    .image{
        width: 100%;
        height: 70%;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        span{
            padding: 0 3px;
            height: .36rem;
            position: absolute;
            background: rgba(0, 0, 0, .3);
            line-height: .36rem;
            color: #fff;
            bottom: .3rem;
            right: .3rem;
            border-radius: .18rem;
            font-size: .24rem;
        }
    }
    .title{
        width: 100%;
        height: 30%;
        background: #ffffff;
        .tit{
            padding: .1rem .2rem;
            display: flex;
            justify-content: space-between;
            .titleft{
                p:nth-child(1){
                    padding-top: .30rem;
                    color: red;
                    font-size: .38rem;
                    line-height: .38rem;
                }
                p:nth-child(2){
                    color: #ccc;
                    line-height: .45rem;
                    font-size: .24rem;
                }
            }
            .titright{
                padding-right: 1%;
                button{
                    margin-top: .3rem;
                    width: 3.8rem;
                    height: .6rem;
                    outline: none;
                    border: 0;
                    font-size: .24rem;
                    line-height: .6rem;
                    background: #3AACFF;
                    border-radius: .1rem;
                    color: #fff;
                }
            }
        }
    }
  
}
</style>