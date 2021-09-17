window.addEventListener('load', function () {
    var focus = document.querySelector('.focus');
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol')
    var postion = 0;
    console.log(ul);
    var timer = setInterval(function () {
        postion++;
        var x = - postion * focus.offsetWidth;
        ul.style.transition='all.3s'
        ul.style.transform = 'translateX(' + x + 'px)';
        ul.addEventListener('transitionend', function () {
        if (postion >= ul.children.length-2) {
            ul.style.transition = 'none';
            postion = 0;
            var x = - postion * focus.offsetWidth;
            ul.style.transform = 'translateX(' + x + 'px)';
            }
            else if (postion<0) {
            ul.style.transition = 'none';
            postion = 2;
            var x = - postion * focus.offsetWidth;
            ul.style.transform = 'translateX(' + x + 'px)';
            }
            ol.querySelector('.current').classList.remove('current');
            ol.children[postion].classList.add('current');
        })
        var startx = 0;
        var translatex = 0;
        var movex = 0;
        ul.addEventListener('touchstart', function (e) {
            startx = e.targetTouches[0].pageX;
            clearInterval(timer);
        })
        ul.addEventListener('touchmove', function (e) {
            movex = e.targetTouches[0].pageX - startx;
            translatex = -postion * focus.offsetWidth;
            var x = translatex + movex;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + x + 'px)';
        })
        ul.addEventListener('touchend', function (e) {
            if (Math.abs(movex)>50) {
                if (movex>0) {
                    postion--;
                } else {
                    postion++;
                }
                
                
            }
            translatex = -postion * focus.offsetWidth;
                ul.style.transition = 'all 0.3';
                ul.style.transform = 'translateX(' + translatex + 'px)';
                console.log(postion);
        })
    }, 2000);
    var navs = document.querySelector('.nav')
    var jiantou = document.querySelector('.jiantou');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset>navs.offsetTop) {
            jiantou.style.display = 'block';
        } else {
            jiantou.style.display = 'none';
        }
    })
    jiantou.addEventListener('click', function () {
        window.scroll(0, 0);
    })
})