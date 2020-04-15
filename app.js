var axios = require('axios').default;
var fs = require('fs');

url = `http://a.vmall.com/uowap/index?method=internal.user.commenList3&serviceType=13&reqPageNum=1&maxResults=5&appid=C134730&locale=zh_CN&LOCALE_NAME=zh_CN&version=10.0.0`;


var arr = [
    {
        name: '咕咚',
        id: 'C134730'
    }, {
        name: '步多多',
        id: 'C100963689'
    }, {
        name: '悦跑圈',
        id: 'C10115026'
    }, {
        name: '悦动圈',
        id: 'C10144837'
    }, {
        name: '趣步行',
        id: 'C100494511'
    }, {
        name: '小米运动',
        id: 'C100116475'
    }, {
        name: '每日瑜伽',
        id: 'C10058505'
    }, {
        name: '运动世界校园',
        id: 'C10508923'
    }
]

async function getResult(url) {
    var result = [];
    var res = await axios.get(url)
    var list = res.data.list;
    list.forEach(obj => {
        result.push(obj.commentInfo + '\r\n')
    })
    return result;
}


for (var i = 0; i < arr.length; i++) {
    (async () => {
        var page = 1;
        var id = arr[i].id;
        console.log(id)
        while (page < 2) {
            console.log(1)
            var url = `http://a.vmall.com/uowap/index?method=internal.user.commenList3&serviceType=13&reqPageNum=${page}&maxResults=5&appid=${id}&locale=zh_CN&LOCALE_NAME=zh_CN&version=10.0.0`;
            var temp = await getResult(url);
            console.log(temp)
            page++;
        }

    })()
}