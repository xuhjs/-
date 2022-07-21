/**
 * 一、为什么要使用promise呢？
 * 避免毁掉低于的出现（在回调函数里面嵌套回调函数）
 * 二、什么是promise?
 * 是一个构造函数，可以通过new关键字实例化对象
*/

// 接收一个函数作为参数，参数函数两个参数resolve，reject
/**
 * promise有两个属性
 * state ：状态
 * result：结果
 * 一、promise的状态
 * pending（挂起状态）
 * fulfilled（成功状态）
 * rejected（拒绝）
 * 二、状态的改变  
 * 通过调用resolve()和rejected()改变状态
 * resolve 是从pending 到 fulfilled
 * rejected 是从pending 到 rejected
 * 
 */
const p = new Promise((resolve,reject)=>{

})