<template>
    <div class="warp">
        <p class="p" @click="$emit('update:showType', false)">全部车款</p>
            <!-- 年份切换 -->
            <div class="nav">
                    <li
                        v-for="(item,index) in yearType"
                        :key="index"
                        @click="active(index,item)"
                        :class="index===Index?'active':''"
                        >{{item}}</li>
            </div>
            <!-- 数据 -->
            <div class="block" v-for="(item,index) in tablist" :key="index">
                <p>{{item.key}}</p>
                <div class="text" v-for="(val,index) in item.list" :key="index">
                        <ul @click="$router.push('/asklowprice')">
                            <li><span>{{val.market_attribute.year}}款 {{val.car_name}}</span><span>{{val.market_attribute.dealer_price_min}}起</span></li>
                            <li><span>{{val.horse_power}}马力{{val.gear_num}}档{{val.trans_type}}</span><span>指导价{{val.market_attribute.dealer_price_max}}</span></li>
                        </ul>
                </div>
            </div>
    </div>
</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
export default {
    data(){
        return{
            Index:0,
        }
    },
    computed:{
        ...mapState({
            tablist: state => state.details.tablist,
            yearType: state => state.details.yearType
        })
    },
    methods:{
         ...mapMutations({ navActive: "details/navActive" }),
         ...mapActions({getlist:"details/getBaoJia"}),
            // tab切换高亮 切换数据
            active(index, year) {
                this.Index = index;
                this.navActive(year);
            }
    },
    created(){
        this.getlist(JSON.parse(sessionStorage.getItem('item')).SerialID)
    }
}
</script>

<style lang="scss" scoped>
.warp{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    z-index: 29;
    .p{
        margin: .15rem 0;
        font-size: .34rem;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
    }
}
.nav {
    width: 100%;
    height: 0.5rem;
    background: #fff;
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
    .active {
        color: #3aacff;
    }
    li {
        margin: 0 0.2rem;
        font-size: 0.3rem;
    }
}
.block {
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    font-size: 0.24rem;
    color: #ccc;
    p {
        background: #eeeeee;
        padding: 0.1rem 0.2rem;
        color: #999999;
    }
}
.text {
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    ul {
        width: 100%;
        height: 100%;
        padding: 0 0.2rem;
        overflow-y: auto;
        li:nth-child(2) {
            padding: .1rem 0;
            text-decoration: none;
            color: #999999;
            line-height: 0.4rem;
            display: flex;
            justify-content: space-between;
            border-bottom: .005rem solid #eee;
        }
        li:nth-child(1) {
            padding-top: 0.1rem;
            font-size: 0.3rem;
            text-decoration: none;
            color: #000;
            line-height: 0.5rem;
            display: flex;
            justify-content: space-between;
            span:nth-child(2) {
                color: red;
                margin-left: 0.2rem;
                font-size: 0.3rem;
            }
        }
    }
}
</style>