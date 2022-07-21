// var str = 'ababa'
// function huiwen(str){
//     let start=0
//     let end = str.length-1
//     while(start<=end){
//         if(str[start]==str[end]){
//             start++
//             end--
//         }else{
//             return false
//         }
//     }
//     return true
// }
// console.log(huiwen(str))


// 递归实现判断回文数
// var str = "abab"
// function huiwen2(str){
//     let start = 0
//     let end = str.length-1
//     if(end<1){
//         return true
//     }else if(str[start]!=str[end]){
//         return false
//     }
//     return huiwen2(str.substring(1,end))
// }
// console.log(huiwen2(str))

    var str = '14444112442aa44442244311222222244445444243334444ccc4444'
    var cur = str[0]
    var obj = {}
    var maxCount = 0
    var maxChar = str[0]
    var count = 0
    for (var i = 0; i < str.length; i++) {
      if (cur == str[i]) {
        count++
        if (maxCount < count) {
          maxCount = count
          maxChar = str[i]
          obj[cur] = count
        }
        if (maxCount > count) {
          obj[cur] = count
        }
      } else {
        cur = str[i]
        count = 1
      }
    }
    console.log(maxChar+ ' ' +maxCount)
