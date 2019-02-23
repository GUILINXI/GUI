//通过“事件监听”的方式来绑定事件
var startBtn = document.getElementById('startBtn'),
    endBtn = document.getElementById('endBtn');

//鼠标点击时调用start()这个函数
startBtn.addEventListener('click', function () {
    start();
});
//鼠标点击时调用end()这个函数
endBtn.addEventListener('click', function () { 
    end();
});

var box = document.getElementsByClassName('box');

//设置0~8的数组arr
var a = [0,1,2,3,4,5,6,7,8];
//随机抽三个数组
function randomarray(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
//随机颜色
function randomcolor(){
    var color="#";
    for(var i=0;i<6;i++){
        color += (Math.random()*16 | 0).toString(16);
    }
    return color;
}
//开始闪 随机三个数组并附上随机颜色
var interval;
function start() {
    interval = setInterval(function () {
        for (var i = 0; i < box.length; i++) {
            box[i].style.background = "orange";
        }
        console.log(randomarray(a, 3));
        var indexArr = randomarray(a,3);
        for(var i = 0; i < indexArr.length; i++) {
            var color = randomcolor();
            var index = indexArr[i];
            box[index].style.background = color; 
        }
    }, 1000); 
    console.log(interval);
}
//结束闪  重置颜色
function end() {
    for(var i = 0; i < box.length; i++){
        box[i].style.background = "orange";
    }
    clearInterval(interval);
}