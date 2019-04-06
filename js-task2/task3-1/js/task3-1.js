//获取上一个页面的参数数据
var transmit = JSON.parse(sessionStorage.getItem('transmit'));
console.log(transmit);

var judge = 0; //代表判断奇偶数的条件
var indexs = 0; //代表transmit随机数组的索引
var sequence = 0; //代表顺序号码传递
$('button').click(function () { //给按钮点击事件函数
    if (judge < transmit.length * 2 - 1) {
        console.log(judge, '顺序');
        if (judge % 2 == 0) { //奇偶数判断法；为偶数时执行下面语句 
            $('#draw-icon').hide(); //当s=偶数时隐藏翻牌图片
            if (transmit[indexs] === '平民') { //此时判断身份杀手或平民
                console.log(transmit, indexs);
                $('#civilianPicture').show(); //显示平民图片
                // $('#killerPicture').hide(); //隐藏杀手图片  
            } else {
                console.log(transmit, indexs);
                $('#killerPicture').show(); //显示杀手图片
                // $('#civilianPicture').hide(); //隐藏平民图片
            }
            $('#identity').text(transmit[indexs].name); //添加身份描述
            $('#identity-check').html('隐藏并传递给' + (sequence + 2) + '号'); //改变身份传递的顺序
            if (sequence + 1 == transmit.length) { //当sequence=数组的长度则改变html
                $('#identity-check').html('查看整体');
            }
            judge++; //当抽取不同条件和结束条件时s都会逐渐递增
            sequence++; //每循环一次sequence=0+2；
        } else { //否则为奇数，执行下面语句
            console.log('显示翻页图片');
            $('#civilianPicture').hide(); //隐藏平民图片
            $('#killerPicture').hide(); //隐藏杀手图片
            $('#identity').text(''); //隐藏身份描述
            $('#draw-icon').show(), //当s=奇数时显示翻牌页面
            judge++;
            $('#top-number-ball').html(indexs + 2);
            $('#identity-check').html('查看' + (indexs + 2) + '号身份');
            indexs++;
        }
    } else {
        sessionStorage.setItem('transmit', JSON.stringify(transmit)); //存储定义的名字为all,transmit是存储的值
        window.location.href = "../../task3-2/task3-2.html"; //通过window获取新页面的超链接路径
    }
})