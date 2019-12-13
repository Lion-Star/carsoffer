import Vue from 'vue'

Vue.directive('stricky',{
    inserted: function(el){
        el.focus()   
    },
    update:function(el,binding){
        let {value , oldValue} = binding
        if(value && (value != oldValue)){
            let child = document.getElementById(value)

            el.scrollTop = child.offsetTop
        }
    }
})