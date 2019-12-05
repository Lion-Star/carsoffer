<template>
    <div class="warp">
        <p @click="toImg">全部颜色</p>
        <div>
            <p><span v-for="(item,index) in carColor" :key="index">{{item}}</span></p>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    computed:{
        ...mapState({
            carColor:state=>state.img.carColor
        })
    },
    methods:{
        ...mapActions({getColor:'img/getColor'}),
        toImg(){
           this.$emit('update:showColor', false)
        }
    },
    created(){
        this.getColor(sessionStorage.getItem('SerialID'))
    }
}
</script>

<style lang="scss" scoped>
.warp{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    p{
        margin: .15rem 0;
        font-size: .34rem;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
    }
    div{
        width: 100%;
        p{
            line-height: .7rem;
            height: .7rem;
        }
    }
}

</style>