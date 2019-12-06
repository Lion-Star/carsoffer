<template>
  <div class="base">
    <div class="title">可向多个商家咨询最低价,商家及时回复</div>
    <div class="main" ref="main" @scroll="scroll">
      <div class="box">
        <div class="left">
          <img src="../assets/logo.png" alt />
        </div>
        <div class="right">
          <p>奥迪A4</p>
          <p>2019款阿斯顿阿斯顿撒奥迪</p>
          <div class="jian">&gt;</div>
        </div>
      </div>
      <p class="details">个人信息</p>
      <div class="message">
        <p>
          <span>姓名</span>
          <span><input type="text" placeholder="输入你的真实中文姓名"></span>
        </p>
        <p>
          <span>手机</span>
          <span><input type="text" placeholder="输入你的真实手机号码"></span>
        </p>
        <p @click="$router.push('')">
          <span>城市</span>
          <span>北京</span>
          <span class="cityj">&gt;</span>
        </p>
        <div class="floor">询最低价</div>
      </div>
      <p ref="pp" class="details">选择报价经销商</p>
      <div class="dealer">
        <div class="content">
          <div class="ipt">
            <input type="checkbox" />
          </div>
          <div class="cont">
            <p>北京中润发奥迪</p>
            <p>北京市丰台区丽泽路99号</p>
          </div>
          <div class="city">
            <p>
              <span></span>
              <span>万</span>
            </p>
            <p>售本市</p>
          </div>
        </div>
      </div>
      <div class="btn" v-show="show">询最低价</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    scroll(e) {
      if (this.$refs.main.scrollTop >= this.$refs.pp.offsetTop) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.base {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eee8e8;
}
.title {
  height: 0.6rem;
  line-height: 0.6rem;
  width: 100%;
  background: #79cd92;
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
}
.main {
  width: 100%;
  flex: 1;
  overflow: auto;
}
.box {
  background: #fff;
  padding: 0.32rem 0.18rem 0.24rem;
  position: relative;
  height: 2rem;
  box-sizing: border-box;
  display: flex;
  .left {
    width: 2.3rem;
    height: 1.41rem;
    border: 1px solid #eee;
    box-sizing: border-box;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    margin-left: 0.2rem;
    flex: 4;
    position: relative;
    display: flex;
    flex-direction: column;
    p {
      margin-top: 0.2rem;
    }
    p:nth-child(1) {
      margin-top: 0.26rem;
      font-size: 0.32rem;
      line-height: 1.2;
      color: #333;
    }
  }
}
.right p:first-child {
  font-size: 20px;
  line-height: 40px;
}
.right p:last-child {
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.jian {
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 20px;
  color: #ccc;
  font-weight: 900;
}
.details {
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 13px;
  padding: 0 0.22rem;
  font-size: 0.24rem;
  color: #666;
  background: #eee;
}
.message {
  width: 100%;
  padding: 0 10px 15px;
  background: #fff;
  p {
    display: flex;
    line-height: .88rem;
    border-bottom: 1px solid rgb(236, 231, 231);
    font-size: 18px;
    justify-content: space-between;
    font-size: .32rem;
    height: .88rem;
    line-height: .88rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    color: #000;
    input{
      padding-right: .10rem;
      border: none;
    }
  }
}
.message p:nth-child(3) {
 padding-right: 20px;
}
.cityj {
  position: absolute;
  right: 0;
  color: #ccc;
  padding-right: .1rem;
}
.floor {
  background: #09f;
  padding: 10px 30px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 15px 30px 0;
}
.dealer {
  width: 100%;
  background: #fff;
  padding: 0 10px;
}
.content {
  width: 100%;
  border-top: 1px solid #ccc;
  display: flex;
  height: 1.6rem;
  padding: 20px 0;
  .ipt {
    width: 5%;
    input {
      margin-top: 20px;
    }
  }
  .cont {
    flex: 3;
  }
  .city {
    flex: 1;
    text-align: right;
  }
}
.dealer .content:first-child {
  border-top: none;
}
.cont p:first-child {
  font-size: 18px;
  line-height: 30px;
}
.cont p:last-child {
  font-size: 14px;
  color: #ccc;
}
.city p:first-child span:last-child {
  color: red;
  font-size: 14px;
}
.city p:last-child {
  font-size: 14px;
  color: #ccc;
  line-height: 35px;
}
.btn {
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgb(99, 169, 248);
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>