//函数防抖 直到事件之间间隔大于500ms才会触发

export function debounce(func, delay = 500) {

    let timer = 0;

    return function() {
        window.clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        }, delay);
    }
}

//函数节流  事件每隔500ms就会触发一次

export function throttle(func, delay = 500) {

    let start = +new Date();

    return function() {
        let now = +new Date()
        if (now - start > delay) {
            func();
            start = now;
        }
    }
}