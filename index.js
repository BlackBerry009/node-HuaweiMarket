
var axios = require('axios').default;
var fs = require('fs');


var arr = [
	{
		name:'Fitbit健康追踪',
		id:'C10522011'
	},{
		name:'Nike Run Club',
		id:'C100103353'
	},{
		name:'减肥小秘书',
		id:'C5258'
	},{
		name:'猫扑运动',
		id:'C101172693'
	}
]


async function loadHTML(url) {
    var resp = await axios.get(url)
    return resp.data
}


async function getResult(arr) {
    console.log(arr.length)
    for (var i = 0; i < arr.length; i++) {
        var result = []
        var count = 1;
        while (count < 200) {
            var url = `http://a.vmall.com/uowap/index?method=internal.user.commenList3&serviceType=13&reqPageNum=${count}&maxResults=5&appid=${arr[i].id}&locale=zh_CN&LOCALE_NAME=zh_CN&version=10.0.0`;
            var item = await loadHTML(url);
            var list = item.list;
            if(list){
                list.forEach(obj => {
                    result.push(obj.commentInfo + '\r\n')
                })
            }
            count++;
            // console.log(result)
        }
        fs.writeFileSync(`./${arr[i].name}.txt`, result, err => {
            if (!err) {
                console.log('success')
            } else {
                console.log('fail')
            }
        })
    }
    return result;
}

getResult(arr);





// while (true) {
//     getResult().then(res => {
//         if (res == 1000) {
//             fs.writeFile('./运动世界校园.txt', result, err => {
//                 if (!err) {
//                     console.log('success')
//                 }
//             })
//         };
//     });
//     obj.page++;
//     if (obj.page == 1000) {
//         return;
//     };
// }










