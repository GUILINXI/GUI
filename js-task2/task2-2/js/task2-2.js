//监听点击按钮
var playerratio = document.getElementById('playerratio');
//监听“杀手”和“平民”
var killer = document.getElementById('killer'),
    civilian = document.getElementById('civilian');
//监听发牌按钮
var goDeal = document.getElementById('goDeal');

//通过js获取input的value
var textNumber = document.getElementById('textNumber'),
    rangeNumber = document.getElementById('rangeNumber');
//关联两个input的方式相互赋值
var change = function () {
    textNumber.value = rangeNumber.value;
    check = 0; 
}
//关联输入框和滑动条
var inputs = function () {
    rangeNumber.value = textNumber.value;
    check = 0;
}
//关联加减按钮的input
function btnSub() {
    rangeNumber.value--;
    textNumber.value = rangeNumber.value;
    check = 0;
}

function btnAdd() {
    rangeNumber.value++;
    textNumber.value = rangeNumber.value;
    check = 0;
}

var peopleNumber = document.getElementById('peopleNumber'), //声明总人数的全局变量
    killers = document.getElementById('killers'), //声明杀手人数的全局变量
    civilians = document.getElementById('civilians'); //声明平民人数的全局变量
var check = 0; //check未点击时重置为0，已点击变为1

//分配身份人数 
playerratio.addEventListener('click', function () { //给点击设置里添加click事件的函数
    peopleNumber = textNumber.value; //总人数
    killers = Math.floor(peopleNumber / 3); //杀手人数
    civilians = peopleNumber - killers; //平民人数
    //通过innerHTML的方法清除原有的样式，改成后面添加的字符串和变量
    killer.innerHTML = '<span></span> 杀手' + killers + '人';
    civilian.innerHTML = '<span></span> 平民' + civilians + '人';
    check = 1;
})

//创建分配人数顺序的数组
goDeal.addEventListener('click', function () { //注册点击触发监听器
    arraySort(); //调用'杀手和平民'的数组
})
function arraySort() {                                                
    console.log("check:" + check);
    if (check === 0) { //当check严格相等于0时，执行alert弹窗
        alert('请先查看身份人数');
    } else { //当check等于其他值时，执行数组的for循环
        console.log(peopleNumber, killers);
        var all = new Array(); //创建一个新的数组all
        console.log(all);
        for (var x = 0; x < killers; x++) {
            all.push({name: '杀手', death: false}); //把杀手添加进all数组,并附上存活状态
        }
        for (var x = 0; x < civilians; x++) {
            all.push({name: '平民', death: false}); //把平民添加进all数组
        }
        all = shuffle(all); //调用数组乱序
        console.log(all);

        sessionStorage.setItem('transmit', JSON.stringify(all)); //存储定义的名字为transmit,all是存储的值
        window.location.href = "../../task3-1/html/task3-1.html"; //通过window获取新页面的超链接路径
    }
}
//打乱身份数组排序
function shuffle(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let rIndex = Math.floor(Math.random() * (i + 1));
        let temp = arr[rIndex];
        arr[rIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}