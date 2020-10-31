window.onscroll = function() { hidefunction(); }
var prevScrollpos = window.pageYOffset;

function hidefunction() {
    var currentScrollPos = window.pageYOffset;
    if (navbutton.className != "navbar-toggler navdisplay navhide") {
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.top = "0";
            document.getElementById("header").style.transition = "0.5s";
        } else {
            document.getElementById("header").style.top = "-100px";
            document.getElementById("header").style.transition = "0.5s";
        }
        prevScrollpos = currentScrollPos;
    }
}


document.addEventListener("scroll", () => {

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#header').addClass('headerscroll');
    } else {
        $('#header').removeClass('headerscroll');
    }
});

// var navbutton = document.querySelector('.navbar-toggler');
var navlinks = document.querySelector('.nav-link');
var mq = window.matchMedia("(max-width: 766px)");
if (mq.matches) {
    function navhide() {
        navbutton.click(); 
    }
} else {
    function navhide() {}
}

$(document).ready(function() {
    $('#navbutton').click(function() {
        if ($('#navbutton').hasClass('navhide')) {
            $('#navbutton').removeClass('navhide');
        } else {
            $('#navbutton').addClass('navhide');
        }
    });
    if (window.matchMedia("(max-width: 766px)").matches) {
        $('.nav-link').click(function() {
            $('.navdisplay').click();
        });
    }
    $('.full-height-width').addClass('zero-width');
});
window.onload = function() {
    if (window.matchMedia("(max-width: 766px)").matches) {
        setTimeout(() => {
            // document.getElementsByClassName('bodyanimate').classList.add('visible');
            $('.bodyanimate').addClass('visible');
        }, 10);
    } else {
        setTimeout(() => {
            // document.getElementsByClassName('bodyanimate').classList.add('visible');
            $('.bodyanimate').addClass('visible');
        }, 10);
    }
}