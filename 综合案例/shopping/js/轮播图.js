var left = document.querySelector('.left');
var lis = document.querySelector('.focus').querySelectorAll('li');
var focus = document.querySelector('.focus');
var ol = focus.querySelector('ol');
var ul =focus.querySelector('ul')
for (var i = 0; i < lis.length; i++) {
    var li = document.createElement('li');
    ol.appendChild(li);
    li.setAttribute('index',i)
    li.addEventListener('click', function () {
        for (var j = 0; j < ol.children.length; j++) {
            ol.children[j].style.backgroundColor = '#fff';
        }
        this.style.backgroundColor = 'red';
        var index = this.getAttribute('index')
        console.log(index);
        fn(ul,-index*focus.offsetWidth)
    })
}
var first = ul.children[0].cloneNode(true);
ul.appendChild(first)
function fn(obj,target,func) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
    var step = (target-obj.offsetLeft)/20;
    step = step>0 ? Math.ceil(step) :Math.floor(step)
    obj.style.left = obj.offsetLeft+step+'px';
    if (obj.offsetLeft==target) {
    clearInterval(obj.timer)
    if (func) {
        func()
    }
    }},15);
}
var i = 0;
left.addEventListener('click', function () {
    // for (var i = 0; i < lis.length; i++) {
    //     fn(lis[i],-721)
    // }
    if (i == ul.children.length - 1) {
        ul.style.left=0
        i = 0
    }
        i++;
        fn(ul, -i*focus.offsetWidth);

})