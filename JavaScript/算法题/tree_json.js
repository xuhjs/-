// 使用下列数组生成一个分类树（数组中每项中的pid是父节点的id，pid:0表示顶层，pid:1，表示这个节点属于id为1的节点，children该节点的子节点数组）
const jsona = [{
	"ID": 1,
	"CreatedAt": "2022-05-26T15:59:53.726+08:00",
	"UpdatedAt": "2022-05-26T15:59:53.726+08:00",
	"creationDate": "",
	"title": "分类",
	"pid": "0",
	"children": null
}, {
	"ID": 2,
	"CreatedAt": "2022-05-26T16:00:06.96+08:00",
	"UpdatedAt": "2022-05-26T16:00:06.96+08:00",
	"creationDate": "",
	"title": "容量",
	"pid": "4",
	"children": null
}, {
	"ID": 3,
	"CreatedAt": "2022-05-26T16:00:14.007+08:00",
	"UpdatedAt": "2022-05-26T16:00:14.007+08:00",
	"creationDate": "",
	"title": "颜色",
	"pid": "4",
	"children": null
}, {
	"ID": 4,
	"CreatedAt": "2022-05-26T16:00:19.643+08:00",
	"UpdatedAt": "2022-05-26T16:00:19.643+08:00",
	"creationDate": "",
	"title": "手机",
	"pid": "1",
	"children": null
}, {
	"ID": 5,
	"CreatedAt": "2022-05-26T16:00:29.451+08:00",
	"UpdatedAt": "2022-05-26T16:00:29.451+08:00",
	"creationDate": "",
	"title": "电脑",
	"pid": "1",
	"children": null
}, {
	"ID": 6,
	"CreatedAt": "2022-05-26T16:00:38.198+08:00",
	"UpdatedAt": "2022-05-26T16:00:38.198+08:00",
	"creationDate": "",
	"title": "128G",
	"pid": "2",
	"children": null
}, {
	"ID": 7,
	"CreatedAt": "2022-05-26T16:00:44.32+08:00",
	"UpdatedAt": "2022-05-26T16:00:44.32+08:00",
	"creationDate": "",
	"title": "256G",
	"pid": "2",
	"children": null
}, {
	"ID": 8,
	"CreatedAt": "2022-05-26T16:00:55.368+08:00",
	"UpdatedAt": "2022-05-26T16:00:55.368+08:00",
	"creationDate": "",
	"title": "金色",
	"pid": "3",
	"children": null
}, {
	"ID": 9,
	"CreatedAt": "2022-05-26T16:01:01.751+08:00",
	"UpdatedAt": "2022-05-26T16:01:01.751+08:00",
	"creationDate": "",
	"title": "银色",
	"pid": "3",
	"children": null
}, {
	"ID": 10,
	"CreatedAt": "2022-05-31T10:49:24.062+08:00",
	"UpdatedAt": "2022-05-31T10:49:24.062+08:00",
	"creationDate": "",
	"title": "macbook Air 2022",
	"pid": "5",
	"children": null
}, {
	"ID": 12,
	"CreatedAt": "2022-05-31T10:49:47.497+08:00",
	"UpdatedAt": "2022-05-31T10:49:47.497+08:00",
	"creationDate": "",
	"title": "m1",
	"pid": "11",
	"children": null
}, {
	"ID": 13,
	"CreatedAt": "2022-05-31T10:50:00.801+08:00",
	"UpdatedAt": "2022-05-31T10:50:00.801+08:00",
	"creationDate": "",
	"title": "i5",
	"pid": "11",
	"children": null
}, {
	"ID": 15,
	"CreatedAt": "2022-05-31T10:51:22.369+08:00",
	"UpdatedAt": "2022-05-31T10:51:22.369+08:00",
	"creationDate": "",
	"title": "CPU",
	"pid": "10",
	"children": null
}, {
	"ID": 16,
	"CreatedAt": "2022-05-31T10:51:29.098+08:00",
	"UpdatedAt": "2022-05-31T10:51:29.098+08:00",
	"creationDate": "",
	"title": "M1",
	"pid": "15",
	"children": null
}, {
	"ID": 17,
	"CreatedAt": "2022-05-31T10:51:37.599+08:00",
	"UpdatedAt": "2022-05-31T10:51:37.599+08:00",
	"creationDate": "",
	"title": "I7",
	"pid": "15",
	"children": null
}, {
	"ID": 18,
	"CreatedAt": "2022-05-31T10:51:48.028+08:00",
	"UpdatedAt": "2022-05-31T10:51:48.028+08:00",
	"creationDate": "",
	"title": "内存",
	"pid": "10",
	"children": null
}, {
	"ID": 19,
	"CreatedAt": "2022-05-31T10:51:54.358+08:00",
	"UpdatedAt": "2022-05-31T10:51:54.358+08:00",
	"creationDate": "",
	"title": "8G",
	"pid": "18",
	"children": null
}, {
	"ID": 20,
	"CreatedAt": "2022-05-31T10:51:59.569+08:00",
	"UpdatedAt": "2022-05-31T10:51:59.569+08:00",
	"creationDate": "",
	"title": "16G",
	"pid": "18",
	"children": null
}]

function getTree(list){
	let result = []
		if(!Array.isArray(list)) {
			return result
		}
		list.forEach(item => {
			delete item.children;
		});
		let map = {};
		list.forEach(item => {
			map[item.ID] = item;
		});
		list.forEach(item => {
			let parent = map[item.pid];
			if(parent) {
				(parent.children || (parent.children = [])).push(item);
			} else {
				result.push(item);
			}
		});
		return result;
}
console.log(getTree(jsona))
