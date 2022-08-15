/**
 * Math(算数) 对象的作用是：执行普通的算数任务
 * Math 对象提供多种算数值类型和函数。无需使用这个对象之前对它进行定义
 * */ 
// Math 对象无需在使用这个对象之前对它进行定义
var x = Math.PI;    // 返回圆周率
var y = Math.sqrt(16)  //返回16的平方根
var a = Math.E   //返回算数常量e,自然对数的底数（约等于2.718）
var b = Math.LN2   //返回2的自然对数
var c = Math.LN10   //返回10的自然对数
var a1 = Math.LOG2E   //返回2为底的e的对数 （约等于 1.4426950408889634）
var a2 = Math.abs(-2.3)  //返回2.3的绝对值
var a3 = Math.floor(3.554) //对3.554进行下舍入
let arr = [23,4,3,435,32,2]
var A4 = Math.max(arr)   //找出数字中的最大值
var a5 = Math.min(1,2,4,5,6,7)  //找出数字中的最小值   不能是数组，数组返回nan
var a6 = Math.pow(2,3)   //返回2的3次幂
var a7 = Math.random() +0.5 //返回0-1之间的随机数
var a8 = Math.round(3.4)  //小数四舍五入
var a9 = Math.trunc(3.9)  //去掉小数点之后的书，返回整数
console.log(a9)