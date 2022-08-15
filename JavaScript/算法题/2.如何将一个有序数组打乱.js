// 原理：主要将数组里的索引值随机打乱，然后将当前的索引值与随机变化之后的索引值互换

var arr = [1,2,3,4,5,90,7,8,9]

function getArrRandomly(arr){
    var len = arr.length
    // 从最大索引开始递减循环
    for(var i= len-1;i>=0;i--){
        // 向下取整，随机数不能大于数组长度
        // 此时取得是随机索引
        var randomIndex = Math.floor(Math.random()*(i+1))
        // 取完随机索引，将当前索引和随机索引值调换位置
        var itemIndex = arr[randomIndex]
        arr[randomIndex] = arr[1]
        arr[i] = itemIndex
    }
    // 每一次遍历就相当于把数组中随机抽取（不重复的一个元素放到数组的最后面）
    // （索引顺序为：len-1,len-2,len-3....0）
}





arr.sort(function(){
    return Math.random() - 0.5
})
console.log(arr)