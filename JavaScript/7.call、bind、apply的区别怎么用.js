/**
 * call、pally、bind的作用都是改变this指向，改变函数执行的上下文，来扩充函数的作用域
 * 
 * 区别
 * 1）call和apply的作用都是相同的，都是改变this指向，执行函数，就是传入的参数不同
 * call，第二个参数往后都是依次传入的参数
 * apply 第二个参数传入的是数组形式
 * 2）bind和其他两个一样，都是改变this指向，只不过是返回一个函数
*/

// 手写call 和 apply
Function.prototype.myApply = function (context,args){
    //默认不传就是window,也可以用es6给参数设置默认参数
    context = context || window
    args = args ? agrs:[]
    // 给context新增一个独一无二的属性以免覆盖原有属性
    const key = Symbol()
    context[key] = this
    // 通过隐式绑定的方式调用函数
    const result = context[key](...args)
    //删除添加的属性
    delete context[key]
    //返回函数调用的返回值
    return result
}
//call和apply一样，就是传递的参数不同
Function.prototype.myCall= function mycall(context,...args){
    context = context || window
    args = args?agrs:[]
    const key = Symbol()
    context[key] = this
    const result = context[key](...args)
    delete context[key]
    return result
}


// 手写bind

Function.prototype.mybind = function(context,...args){
    const fn = this
    args = args ? args:[]
    return function newFn(...newFnArgs){
        if(this instanceof newFn){
            return new fn(...args,...newFnArgs)
        }
        return fn.apply(context,[...args,...newFnArgs])
    }
}
