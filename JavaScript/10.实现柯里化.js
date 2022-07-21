/**
 * 柯里化（currying），是把接收多个参数的函数变换成接收一个单一参数（最初函数的第一个
 * 参数）的函数，并且返回接收余下的参数而且返回结果的新函数技术。
 * js中的bind就可以用柯里化进行实现
 * */ 
Function.prototype.myBind = function(context = window){
    if(typeof this != 'function') throw new Error('Error')
    let selfFunc = this
    let args = [...arguments].slice(1)

    return function F(){
        //因为返回了一个函数，可以new F()，所以需要判断
        if(this instanceof F){
            return new selfFunc(...args,arguments)
        }else{
            //bind可以实现类似这样的代码f.bind(obj,1)(2),所以需要将两边的参数拼接起来
            return selfFunc.apply(context,args.concat(arguments))
        }
    }
}