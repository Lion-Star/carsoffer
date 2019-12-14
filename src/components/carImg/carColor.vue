<template>
    <div class="warp">
        <p class="p" @click="$emit('update:showColor', false)">全部颜色</p>
        <div>
            <p><span v-for="(item, index ) of carColor" @click="handleC(item,index)" :class="index===Index?'active':''" :key="index">{{index}}</span></p>
            <ul>
                <li v-for="(item,index) in colorData" :key="index" @click="setColor(item)">
                    <span :style="{background:item.Value}"></span> {{item.Name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapState , mapActions , mapMutations} from 'vuex'
export default {
    data(){
        return{
            Index:0,
        }
    },
    computed:{
        ...mapState({
            carColor:state=>state.img.carColor,
            colorData:state=>state.img.colorData
        })
    },
    methods:{
        ...mapMutations({
            colorTab:'img/colorTab'
        }),
        ...mapActions({
            getColor:'img/getColor',
            getImg:'img/getImg'
        }),
        handleC(item ,index){
            this.Index=index
            this.colorTab(item)
        },
        setColor(item){
            console.log(sessionStorage.getItem('SerialID'))
            console.log(item)
            // this.getImg(sessionStorage.getItem('SerialID')) 
            this.$emit('update:showColor',false)
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
    z-index: 10;
    background: #f4f4f4;
    .p{
        margin: .15rem 0;
        font-size: .34rem;
        color: #00afff;
        background: #fff;
        text-align: center;
        line-height: .8rem;
        height: .8rem;
        z-index: 99;
    }
}
.warp{
    div{
        width: 100%;
        .active{
            color: #00afff;
        }
        p{
            margin: .15rem 0;
            font-size: .34rem;
            background: #fff;
            line-height: .7rem;
            height: .7rem;
            span{
                padding: 0 .15rem;
            }
        }
        ul{
            display: flex;
            background: #fff;
            flex-wrap: wrap;
            li{
                width: 3rem;
                margin: .2rem .3rem;
                height: .7rem;
                border: .03rem solid #00afff;
                border-radius: .08rem;
                line-height: .7rem;
                display: flex;
                span:nth-child(1){
                    border: 1px solid #cccccc;
                    width: .45rem;
                    height: .45rem;
                    margin: .1rem .1rem;
                }
            }
        }
    }
}

</style>