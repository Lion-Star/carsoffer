<template>
    <div class="warp">
        <scroll
            ref="scroll"
            :data="imageList"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <ul>
                <span :key="index" v-for="(item, index) in imageList" :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"/>
            </ul>
        </scroll>
    </div>
    
</template>

<script>
import scroll from '../better-scroll/scroll'
import {mapState,mapActions} from 'vuex'
export default {
    components:{
        scroll
    },
    computed:{
        ...mapState({
            imageList:state=>state.img.imageList,
            count: state => state.img.count,
            page: state => state.img.page
        }),
        pullDownRefreshObj: () => {
            return {
                threshold: 90,
                stop: 50,
                txt: '刷新成功'
            }
        },
        pullUpLoadObj: () => {
            return {
                threshold: 50,
                txt: {
                    more: '加载更多',
                    noMore: '没有更多数据了'
                }
            }
        }
    },
    methods:{
        ...mapActions({
            getTypeImg:"img/getTypeImg"
        }),
        async onPullingDown() {
            // console.log('pullingdown...');
            // setTimeout(()=>{
            //     this.refreshDispatch(1);
            // }, 10000);
            await this.getTypeImg(1);
        },
        async onPullingUp() {
            // console.log('pullingup...');
            // setTimeout(()=>{
                // this.loadMoreDispatch(this.page + 1);
            // }, 10000);
            await this.getTypeImg(this.page + 1);
        }
    },
    watch:{
         pullDownRefreshObj: {
            handler(val) {
                const scroll = this.$refs.scroll.scroll
                if (val) {
                    scroll.openPullDown()
                } else {
                    scroll.closePullDown()
                }
            },
            deep: true
        },
        pullUpLoadObj: {
            handler(val) {
                const scroll = this.$refs.scroll.scroll
                if (val) {
                    scroll.openPullUp()
                } else {
                    scroll.closePullUp()
                }
            },
            deep: true
        },
    }
}
</script>

<style lang="scss" scoped>
.warp{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #ffffff;
    z-index: 99;
}
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
ul span {
    display: inline-block;
    width: 32.7vw;
    height: 32.7vw;
    margin-bottom: 1vw;
    background-size: cover;
    background-position: center;
}
</style>