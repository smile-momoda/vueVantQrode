// 将此js文件在<head>里面引入或者直接写在<head>里面，消除过渡效果
(function(doc, win) {
    setRem();
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            setRem();
        };
    if (!doc.addEventListener)
        return;
    win.addEventListener(resizeEvt, recalc, false);
    // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
 
function setRem() {
    var docEl = document.documentElement;
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) {
        return;
    }
    docEl.style.fontSize = 100 * (clientWidth / 1080) + 'px';
}