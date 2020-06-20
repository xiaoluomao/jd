console.log("加载成功");

var address = document.querySelector('.fl');
var oUl = document.querySelector('#Ul');
var oUli = document.querySelectorAll('#Ul li')

address.onmouseover = function(e){
    var e = e || window.event;
    var target = e.target || e.srcElement;
    target.style.display = 'block';
    // console.log('鼠标移入');
}


