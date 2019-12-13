<template>
    <div class="warps">
        <van-image-preview
        v-model="showPreview"
        :images="list"
        @change="change"
        :start-position="current"
        >
             <template v-slot:index>{{`${current+1}/${count}`}}</template>
        </van-image-preview>
    </div>
</template>

<script>
import { mapState , mapMutations , mapActions} from "vuex";
export default {
    computed:{
        ...mapState({
            imageList: state=>state.img.imageList,
            current: state=>state.img.current,
            count: state=>state.img.count,
            page: state=>state.img.page
        }),
        list(){
            return this.imageList.map(item=>{
                return item.Url.replace('{0}', item.HighSize)
            })
        },
        showPreview: {
            get () {
                return this.showSwiper
            },
            set (value) {
                this.$emit("update:showSwiper",false)
            }
        }
    },
    props: {
        showSwiper: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        ...mapActions({
            getTypeImg:"img/getTypeImg"
        }),
        ...mapMutations({
            setCurrent:"img/setCurrent"
        }),
        change(index){
            // 提前两张加载下一页图片
            if (index > this.imageList.length-2){
                if (this.imageList.length < 30){
                    this.getTypeImg(1)
                }else{
                    this.getTypeImg(this.page + 1);
                }
            }
            this.setCurrent(index);
        }
    }
}
</script>

<style lang="scss" scoped>
.warps{
    width: 100%;
    height: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
}
</style>