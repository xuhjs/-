// 字符串的方法有哪些？

// 1.chartAt(index)   返回字符串中指定位置的字符,index是必须值
var a= 'dwwecxcxdsac'
let b = a.charAt(8)    // b=8

// 2.concat()   连接字符串，不会改变原有字符串
var c = 'deccvdfdsfs'
let d = a.concat(c,'jdhjjj','88jjjs') 
// console.log(d)   dwwecxcxdsacdeccvdfdsfsjdhjjj88jjjs
// console.log(a)   dwwecxcxdsac

// 3. indexOf()   返回某个指定的字符串值在字符串中出现的位置
let ino = c.indexOf('e')
// console.log(ino)   1

// 4.includes(searchvalue,start)   用于判断判断字符串是否包含某个指定的子字符串,searchvalue查找的子字符串，start开始查找的位置
let inc = c.includes('sfe')
console.log(inc)

// 5.match(regexp) 在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
// regexp  规定要匹配的模式的正则对象，如果该参数不是正则对象，则需要首先传递给正则的构造函数，将其转化为Regexp对象
let mat = c.match(/e/g)
// console.log(mat)

// 6.repeat(count)   将字符串复制指定次数
let rep = a.repeat(2)
// console.log(rep)

// 7.replace(searchvalue,newvalue)   用于在字符串中用一些字符替换另一些字符，或者替换一个与正则表达式匹配的子串
// serachvalue 规定子字符串要替换的模式的正则对象   newvlaue一个替换文本
let repc = a.replace('w','q')
console.log(repc)

// 8.replaceAll(searchvalue,newvalue)  同上只不过是宣布替换
let repca = a.replaceAll('w','q')
console.log(repca)
  
// 9.search(serachvalue)   查找指定字符串并返回字符串的开始下标
let sea = a.search('wec')
console.log(sea)

// 10.slice(start,end)  提取字符串中的某个部分，并且以新的字符串返回被提取的部分
// start 必须  如果为负数，就从尾部开始截取
// end 可选 结尾的下标  可选  包含最后一个元素
let sli = a.slice(3,6)
console.log(sli)

// 11.split(separator,limit)  把一个字符串分割成字符串数组
// separator 可选，从哪个字符开始分割   limit 可选，数组的最长长度
let spl = a.split("")
console.log(spl)

// 12.subString(from,to)  提取字符串中介于两个指定下标的字符
//  from  从哪个位置开始  必选  一个非负的整数
// to  可选 到哪个下标  一个非负的整数
let subs  = a.substring(3,6)
console.log(subs)

// 13.toLowerCase() 转小写   toUpperCase()转大写
var cc = 'kjdGDGSfusdfj'
let low = cc.toLowerCase()
let upe = cc.toUpperCase()
console.log(low)
console.log(upe)

// 14.trim()  去掉字符串的前后空格
let  bb  = ' dsdsd '
console.log(bb)
console.log(bb.trim())