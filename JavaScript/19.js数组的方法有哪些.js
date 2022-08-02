/**
 * 数组的方法有哪些？ 
 */ 
// 1.Array.push() 向数组的末尾添加一个或者多个元素 返回数组的长度，改变原数组
var arr = [1,2,4,6,7,8,5,3,7]
let a1 = arr.push(12,34)
console.log(a1)
console.log(arr)

// 2.Array.pop()  删除数组末尾的最后一个元素，并且返回该元素
let a2= arr.pop()
console.log(a2)

// 3.Array.unshift()  在数组的前面添加元素，返回数组长度，改变原数组
let a3 = arr.unshift(55,66)
console.log(a3)

// 4.Array.shift() 在数组的前面删除一个元素，并且返回该值
let a4 = arr.shift()
console.log(a4)
console.log(arr)

// 5.Array.concat()  合并两个或者多个数组，生成一个新数组，原数组不变
var arr2=['r','y','r']
let a5 = arr.concat(arr2)
console.log(a5)
console.log(arr)

// 6.Array.join() 将数组转化为字符串,将数组的某一项根据指定字符进行拼接
let a6 = arr.join('+')
console.log(a6)

// 7.Array.reverse()  将数组倒叙。原数改变
let a7 = arr.reverse()
console.log(arr)

// 8.Array.sort() 将数组进行排序 原数组改变 只排序10以内的数字
let a8 = arr.sort()

// （1）从小到大排序
var sortNum = function(a,b){
    return a-b
}
// （2）从大到小排序
var sortNum1 = function(a,b){
    return b-a
}
// （3）按数组对象中的某个值进行排序
var obj = [
    {name:"zhangsan",age:18},
    {name:"lisi",age:17},
    {name:'wangwu',age:24}
]
function compare(param){
    return function sortAge(a,b){
        return a[param]-b[param]
    }
}
obj.sort(compare('age'))
arr.sort(sortNum1)
console.log(arr)
console.log(obj)

// 9.Array.map(function) 原数组每一项执行函数后，返回一个新数组。原数组不变
let a9 = arr.map(function(){
    return 2
}) 
console.log(a9)

// 10.Array.slice(start,end) 按照条件查找其中的部分内容
// start参数必填可为负数  end可选填  如果参数是0可以原样输出

// 11.Array.splice(index,howmany,arr1,arr2...)用于添加和删除数组中的元素
// 从index位置开始删除howmany个元素，并将arr1、arr2..数据从index位置依次插入。howmany为0时，则不删除元素
// 原数组改变
var fruits =['Banana','apple','Mango','Orange']
fruits.splice(2,1,'lomon','liwi')
console.log(fruits)

// 12.Array.forEach(function) 用于调用数组的每个元素，并将元素传递给回调函数。
// 原数组不变。

// 13.Array.filter(function) 过滤数组，过滤符合条件的元素，并返回一个新数组
var a13 = arr.filter(x=> x>3)
console.log(a13)

// 14.Array.every(function) 对数组的每一项进行判断，若都符合返回true,否则返回false

// 15.Aarry.some(function) 对数组中的每一项进行判断，若都不符合返回false,否则有一项符合就返回true

// 16.Array.reduce(function) 接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值

// 17.indexOf()  检测在数组中第一次出现的位置的索引

// 18.includes()  判断一个数组是否包含某个指定的值