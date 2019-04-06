//获取上一个页面的参数数据
var transmit = JSON.parse(sessionStorage.getItem('transmit'));
console.log(transmit);
var fromWhere = sessionStorage.getItem('fromWhere'); //声明变量获取fromWhere的数据
let step = JSON.parse(sessionStorage.getItem('step')); //获取step阶段点击的数据
console.log(step,'阶段')
let diary = JSON.parse(sessionStorage.getItem('diary')); //获取日志数组的数据
console.log(diary,'日志')
//判断三个页面点击进入后改变文本的内容
if (fromWhere === '点击杀人') { //判断如果当前是杀人页面然后改变文字内容
    $('.voteword').html('杀手杀人');
    $('.text').html('杀手请睁眼，选择要杀的身份');
    $('.text2').html('点击下方玩家头像，对被杀玩家进行标记');
    $('.base').html('确定身份');
} else if (fromWhere === "点击投票") { //否者，当前是投票页面改变文字内容
    $('.voteword').html('全民投票');
    $('.text').html('请投票');
    $('.text2').html('点击下方玩家头像，投死谁');
    $('.base').html('确定');
} else if (fromWhere === "点击日志") { // 当前是法官日志页面，改变文字内容
    $('.voteword').html('游戏日志');
    $('.text').html('查看日志');
    $('.text2').html('查看日志');
    $('.base').html('确定');
}

//通过循环添加标签和标签样式
for (var m = 0; m < transmit.length; m++) {
    // console.log(transmit);
    //创建大盒子div
    $('main').append('<div class="main-square-boxs"></div>');
    //给大盒子内部添加身份p标签
    $('.main-square-boxs').eq(m).append('<p class="square-identity"></p>');
    //给身份p标签添加html内容
    $('.square-identity').eq(m).html(transmit[m].name);
    //给大盒子内部添加身份号码p标签
    $('.main-square-boxs').eq(m).append('<p class="square-number"></p>');
    //给身份号码添加对应的数字
    $('.square-number').eq(m).html((m + 1) + '号');
}
//如果已经死亡的人，则改变颜色
for (let b = 0; b < transmit.length; b++) {
    if (transmit[b].death == true) {
        $('.square-identity').eq(b).css('background-color','red');
    }
}

let stepclick //新建变量是为了方便存储数据用;
if (fromWhere === '点击杀人') {
$('.main-square-boxs').click(function () { //给身份添加按钮事件
    //获取点击的数组下标
    let s = $(this).index();
    stepclick = s; //关联索引值
    for(let t = 0; t < transmit.length; t++) { //清除原本颜色重置样式
        $('.square-identity').eq(t).removeClass('squareRed');
    }
    //开始
    if (diary.length !== 1) {
        //先判断白天还是晚上
        if (step.length == 1) {
            // console.log(s,transmit)
            if(transmit[s].name == '平民' && transmit[s].death == true) { //判断是平民就杀
                // console.log(s,'索引')
                $('.square-identity').eq(s).addClass('squareRed'); //每次都添加一个颜色
            } else if (transmit[s].death === true) { //判断杀人页面不能点击杀手
                alert('身份已经死亡');
            } else {
                alert('同伴不能杀');
            }
        }
    }  
})        
}
//存储数据并跳转
function JumpStorage(){
    sessionStorage.setItem('transmit',JSON.stringify(transmit));
    sessionStorage.setItem('step',JSON.stringify(step));
    sessionStorage.setItem('diary',JSON.stringify(diary));
}

//给按钮添加点击事件控制页面跳转
    $('button').click(function () {
        // alert('跳转页面');
        sessionStorage.setItem('transmit', JSON.stringify(transmit)); //存储变量y的数组
        window.location.href = "../task4-1/task4-1.html"; //通过window获取新页面的超链接路径
    })
