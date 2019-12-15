<template>
  <div class="warp">
        <!-- 详情上测标题 -->
        <Head></Head>
        <!-- tab切换组件 -->
        <Tab></Tab>
        <div class="fixed">
            <p>询问低价</p>
            <p>本地营销商为你售价</p>
        </div>
  </div>
</template>

<script>
import Head from '../components/details/Head'
import Tab from '../components/details/Tab'
import {mapState,mapActions} from "vuex";
export default {
    components:{
        Head,
        Tab
    },
    methods:{
       ...mapActions({getlist:"details/getBaoJia"}),
    },
    created(){
        //数据接口传参
        this.getlist(JSON.parse(sessionStorage.getItem('item')).SerialID)
    }
}
</script>

<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 100%;
  background: #eeeeee;
  position: relative;
  overflow-y: auto;
    .fixed{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1rem;
        background: #3AACFF;
        font-size: .29rem;
        color: #fff;
        p{
            padding-top: .1rem;
            text-align: center;
        }
    }
}
</style>