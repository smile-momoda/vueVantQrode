// 引自：https://blog.csdn.net/qq_36229632/article/details/106887919?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-1-106887919.pc_agg_new_rank&utm_term=vant%E8%87%AA%E9%80%82%E5%BA%94%E5%AD%97%E4%BD%93&spm=1000.2123.3001.4430
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=1024){
                docEl.style.fontSize = '32px';
            }else{
				// 假设iphone6为例屏幕总宽度: 375px，屏幕总高度: 667px。推荐设计稿大小x2：750*1206
                docEl.style.fontSize = 32 * (clientWidth / 750) + 'px';  //设计1rem=16px，假如为了方便换算成1rem=100px，那这个32就变成相应的比例500*0.2。和编辑器保持同步，若此处变了，编辑器最好同步变
                var a =docEl.style.fontSize = 32 * (clientWidth / 750) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
// 375代表设计稿的宽度；项目的设计稿宽度是多少 这里就写多少；
