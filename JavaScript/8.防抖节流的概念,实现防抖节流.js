/**
 * 什么是防抖和节流？
 * 防抖：当我频繁触发事件的时候，当最后一次触发事件结束n秒之后才会去执行事件函数。
 * 节流：当频发触发事件的时候，会每隔一段时间去执行事件函数。这个就是节流
 */


// 实现一个防抖
//传入两个参数，第一个参数是需要防抖执行的事件函数，第二个参数是需要延迟的事件
function debounce(fn,delay){
    //定义一个变量
    let  t = null
    //返回防抖流程函数
    return function(){
        if (t!=null){
            clearTimeout(t)
        } 
        t = setTimeout(()=>{
            //执行事件函数，改变this指向事件对象，不然指向的是windows
            fn.call(this)
        },delay)
    }
}

// 实现一个节流
function throttle(fn,delay){
    let flag= true;
    return function(){
        if(flag){
            setTimeout(()=>{
                fn.call(this)
                flag=true
            },delay)
        }
        flag=false
    }
}