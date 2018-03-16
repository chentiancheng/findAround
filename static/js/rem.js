(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {

			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 750) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);

	doc.addEventListener('DOMContentLoaded', recalc, false);
	/*DOMContentLoaded�ĵ�������ɲ���ͼƬ��Դ onload��ͼƬ��Դ*/
})(document, window);