<template>
<div class="wrap">
    <CommonList :list="{
            query: {Page},
            limit: 30,
            count: count,
            refreshDispatch: 'picture/getImageTypeList',
            loadMoreDispatch: 'picture/getImageTypeList',
            value:value  //列表数据
        }">
        <!--  插槽内容  -->
        <template v-slot:default="slotProps">
            <ul>
                <span :key="index" v-for="(item, index) in slotProps.value" v-lazy:background-image="item.Url.replace('{0}', item.LowSize)" @click="showSwiper(index)" />
            </ul>
        </template>
    </CommonList>
</div>
</template>

<script>
import {
    mapState,
    mapMutations,
    mapActions
} from "vuex";
import CommonList from "./CommonList";
export default {
    computed: {
        ...mapState({
            count: state => state.picture.Count,
            value: state => state.picture.imageTypeList,
            Page: state => state.picture.Page
        })
    },
    components: {
        CommonList
    },
    methods: {
        ...mapActions({
            getImageTypeList: "picture/getImageTypeList"
        }),
        ...mapMutations({
            setCurrent: "picture/setCurrent"
        }),
        showSwiper(index) {
            // 显示轮播
            console.log('111');

            this.$emit("update:showImageSwiper", true);
            // 修改current
            this.setCurrent(index);
        }
    },
    mounted() {
        this.getImageTypeList();
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
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
