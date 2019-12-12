function LazyLoad(el) {
    this.el = el;
    if (el) {
        el = document.querySelector(el);
        //el存在让el滚
        el.addEventListener('scroll', () => {
            this.loadImage();
        })
        el.addEventListener('touchmove', () => {
            this.loadImage();
        })
    } else {
        //el不存在让window滚
        window.addEventListener("scroll", () => {
            this.loadImage();
        })
    }
    this.loadImage();
}

LazyLoad.prototype.loadImage = function() {
    //获取到所有拥有data-bg的dom元素
    let Elements = [...document.querySelectorAll('div[data-bg]')];

    Elements.forEach(item => {
        //如果在可视区域内
        if (this.isEnterView(item)) {
            //如果背景图路径不对 给背景图赋值
            if (!this.isLoad(item)) {
                let src = item.dataset.bg;
                item.style.backgroundImage = `url(${src})`
            }
        }
    })
}

//在在可视区域内
LazyLoad.prototype.isEnterView = function(el) {

    //是与该元素相关的CSS 边框集合 。
    let Rect = el.getBoundingClientRect();
    let { top, bottom, left, right } = Rect;
    //在可视区内的情况
    return !(top > window.innerHeight || bottom < 0 || left > window.innerWidth || right < 0)
}

//判断自定义属性是否和背景图路径相等
LazyLoad.prototype.isLoad = function(el) {
    //获取到背景图自定属性
    let src = el.dataset.bg;

    //获取到背景图路径
    let bg = el.style.backgroundImage;

    //给src拼接个url 才能判断它两是否相等
    return `url(${src})` == bg;
}

export default LazyLoad;