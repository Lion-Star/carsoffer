<template>
<div class="citylist-page">
    <div class="city">
        <div class="autolocal">
            <p class="details">自动定位</p>
            <li @click="exit">{{CityName}}</li>
        </div>
        <div class="province">
            <p class="details">省份</p>
            <li v-for="(item,index) in cityList" :key="index" @click="getProvince(item.CityID)">{{item.CityName}}</li>
        </div>
    </div>

    <transition name="scroll-top">
        <MaskBox v-if="showMask" :showMask.sync="showMask" :countyList="countyList"></MaskBox>
    </transition>
</div>
</template>

<script>
import {
    mapState,
    mapActions,
    mapMutations
} from "vuex";
import MaskBox from "@/components/Dealer/Mask";
export default {
    props: ["CityName"],
    data() {
        return {
            showMask: false
        };
    },
    components: {
        MaskBox
    },
    computed: {
        ...mapState({
            cityList: state => state.lowprice.cityList,
            countyList: state => state.lowprice.countyList,
            showCity: state => state.lowprice.showCity
        })
    },
    methods: {
        ...mapMutations({
            showCity1: "lowprice/showCity1"
        }),
        ...mapActions({
            getCityList: "lowprice/getCityList"
        }),
        getProvince(id) {
            this.showMask = true;
            let params = {
                provinceid: id
            };
            this.getCityList(params);
        },
        exit() {
            this.showCity1(false)
        }
    },
    async created() {
        await this.getCityList();
    }
};
</script>

<style lang="scss" scoped>
.scroll-top-enter,
.scroll-top-leave-to {
    transform: translate3d(100%, 0, 0);
}

.scroll-top-enter-active,
.scroll-top-leave-active {
    transition: transform 0.1s linear;
}

.citylist-page {
    width: 100%;
    height: 100%;
    position: fixed;
    background: #ffffff;
    left: 0;
    top: 0;
}

.city {
    overflow: auto;
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

.province {
    width: 100%;
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
</style>
