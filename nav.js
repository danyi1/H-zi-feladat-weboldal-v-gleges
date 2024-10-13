window.onscroll = function() {
    var header = document.querySelector('.header');
    var nav = document.querySelector('.nav');
    if (window.pageYOffset > 100) {
    header.style.top = '-100px';
    nav.style.top = '0';
} else {
    header.style.top = '0';
    nav.style.top = '100px';
}
};