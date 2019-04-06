// //获取上个页面数组的对象
// let transmit = JSON.parse(sessionStorage.getItem('transmit'));
// // console.log(transmit);
// // 判断每一个阶段的点击事件
// if (sessionStorage.getItem('step')) {
//     step = sessionStorage.getItem('step');
// } else {
//     step = new Array(); //创建一个空数组
// }
// // 判断天数
// if (sessionStorage.getItem('day')) {
//     day = sessionStorage.getItem('day');
// } else {
//     day = [0]; //创建长度为1的数组
// }

var transmit = [
    {
        name: '杀手',
        death: false
    },
    {
        name: '平民',
        death: false
    },
    {
        name: '平民',
        death: false
    },
    {
        name: '平民',
        death: false
    }
]
var day = +sessionStorage.getItem('day') || 1, //day=1,2,3,4......
    step = +sessionStorage.getItem('step') || 1;//step=1,2,3,4
    console.log(step)
// var day = 2, //day=1,2,3,4......
//     step = 2;
// 插入天数内容
var dayHtml = function (dayInner) {
    return '<div class="main-one-box container">' +
            '<h3 class="oneday">第' + dayInner + '天</h3>' +
            '<div class="conditionbox">' +
                '<div class="buttonbox">' +
                    '<div class="photomoon"></div>' +
                    '<div class="right-triangle"></div>' +
                    '<button class="identbutton">杀手杀人</button>' +
                '</div>' +
                '<div class="buttonbox">' +
                    '<div class="photosun"></div>' +
                    '<div class="right-triangle"></div>' +
                    '<button class="identbutton">亡灵发表遗言</button>' +
                '</div>' +
                '<div class="buttonbox">' +
                    '<div class="right-triangle"></div>' +
                    '<button class="identbutton">玩家依次发言</button>' +
                '</div>' +
                '<div class="buttonbox">' +
                    '<div class="right-triangle"></div>' +
                    '<button class="identbutton">投票</button>' +
                '</div>' +
            '</div>' +
        '</div>';
}
//for循环改变标题天数内容
for (let i = 1; i <= day; i++) {
    $("#container").append(dayHtml(i));
}
// console.log('步骤：', step);
// console.log('天数：', day);

// //判断是否有背景色
// if (sessionStorage.getItem('diarycolor')) {
//     diarycolor = sessionStorage.getItem('diarycolor')
// } else {
//     diaryColor = new Array(); //创建一个空数组
// }
// //激活背景色的变量
// if (sessionStorage.getItem('activation')) {
//     activation = sessionStorage.getItem('activation');
// } else {
//     activation = 0;
// }
//设置判断条件，如果进入杀手杀人后（activation改变后）保持颜色
// if (activation !== 0) {

    for (let a = 0; a < day-1; a++) {
        for (let i = 4*a; i < (a*4)+4; i++) {
            $('.identbutton').eq(i).css('background-color','#83b09a');
            $('.right-triangle').eq(i).css('border-right-color','#83b09a');  
        }
    }
    for (let c = (day-1)*4; c < (day-1)*4+step; c++) {
        console.log(day,'day')
        console.log(step,'step')
        $('.identbutton').eq(c-1).css('background-color','#83b09a');
        $('.right-triangle').eq(c-1).css('border-right-color','#83b09a');
    }
    for (let c = (day-1)*4; c < (day-1)*4+4; c++) { //条件是每次都是最新的一天
        $('.identbutton').eq(c).click(function () { //添加点击事件
            // console.log(c % 4 + 1)
            var clickIndex = c % 4 + 1; //这里是通过取余算法让step与day相关联
            if (clickIndex === 1) { //这里是当天数等于1执行
                if (step === 1) { //这里是当步骤等于1执行
                    alert('跳转杀人页面');
                    step++;
                } else {
                    alert('请按顺序点击按钮');
                }
            } else if (clickIndex === 2) {
                if (step === 2) {
                    alert('亡灵发表遗言');
                    step++;
                } else {
                    alert('请按顺序点击按钮');
                }
            } else if (clickIndex === 3) {
                if (step === 3) {
                    alert('玩家依次发言');
                    step++;
                } else {
                    alert('请按顺序点击按钮');
                }
            } else if (clickIndex === 4) {
                if (step === 4) {
                    alert('跳转投票页面');
                    day++;
                    step = 1;
                } else {
                    alert('请按顺序点击按钮');
                }
            }
            sessionStorage.setItem('day', day);
            sessionStorage.setItem('step', step);
            window.location.href = './task4-1.html';
        });
    }
        // console.log(i,'颜色')
// }

//创建函数每触发一次都给点击step加一个0，
function buttonOperation() {
    step.push(0); //点击次数
    diaryColor.push(0); //背景色
}
//存储函数
function sessionOver() {
    sessionStorage.setItem('step',JSON.stringify(step)); //点击数组数据存储
}
//给杀人添加点击事件
$('.buttonbox').eq(day.length * 4 - 4).click(function () {
    console.log(day.length,"天数");
    console.log(step.length,"阶段")
        if (step.length == 0) { //判断点击，等于0的时候执行
            console.log(step.length,"阶段")
            alert('天黑了请闭眼，杀手出来杀人！')
            activation++; //让点击函数赋值为自加
            $('.identbutton').eq(day.length * 4 - 4).css('background-color', '#83b09a');
            $('.right-triangle').eq(day.length * 4 - 4).css('border-right-color', '#83b09a');
            sessionStorage.setItem('transmit',JSON.stringify(transmit));
            sessionStorage.setItem('fromWhere', '点击杀人');
            buttonOperation();
            sessionOver();
            window.location.href = "../task3-2/task3-2.html";
        }else {
        alert('请遵守规则，按顺序来');
    }
})
//给亡者添加点击事件
$('.buttonbox').eq(day.length * 4 - 3).click(function () {
    // console.log(today.length);
    console.log(step.length,'阶段')
    if (step.length == 1) {
        // console.log(step);
        alert('亡者发言');
        $('.identbutton').eq(day.length * 4 - 3).css('background-color', '#83b09a');
        $('.right-triangle').eq(day.length * 4 - 3).css('border-right-color', '#83b09a');
        buttonOperation();
        sessionOver();
    }else {
        alert('请遵守规则，按顺序来');
    }
})
//给玩家发言添加点击事件
$('.buttonbox').eq(day.length * 4 - 2).click(function () {
    // console.log(today.length);
    console.log(step.length,'阶段')
    if (step.length == 2) {
        // console.log(step);
        $('identbutton').eq(day.length * 4 - 2).css('background-color', '#83b09a');
        $('right-triangle').eq(day.length * 4 - 2).css('border-right-color', '#83b09a');
        buttonOperation();
        sessionOver();
    }else {
        alert('请遵守规则，按顺序来');
    }
})
//给投票添加点击事件
$('.buttonbox').eq(day.length * 4 - 1).click(function () {
    console.log(step.length,'阶段')
    if (step.length == 3) {
        // console.log(step);
        $('.identbutton').eq(day.length * 4 - 1).css('background-color', '#83b09a');
        $('.right-triangle').eq(day.length * 4 - 1).css('border-right-color', '#83b09a');
        sessionStorage.setItem('fromWhere', '点击投票');
        // buttonOperation();
        sessionOver();
        // window.location.href = "../task3-2/task3-2.html";
    } else {
        alert('请遵守规则，按顺序来');
    }
})
//判断是否有日志，没有就创建一个日记并存储（因为页面要服用）
if (sessionStorage.getItem('diary')) {
    diary = sessionStorage.getItem('diary');
} else {
    diary = new Array(); //创建一个空数组
    sessionStorage.setItem('diary',JSON.stringify(diary));
}
// 法官日志点击事件
$('.gamerecord').on('click', function () {
    sessionStorage.setItem('fromWhere', '点击日志');
    window.location.href = "../task3-2/task3-2.html";
});






