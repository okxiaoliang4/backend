var util = (function(util) {
	util.getWindowsWidth = function() {
		if(window.innerWidth) {
			var winWidth = window.innerWidth;
		} else if((document.body) && (document.body.clientWidth)) {
			var winWidth = document.body.clientWidth;
		}
		return winWidth;
	}
	util.isSafari = function() {
		return navigator.userAgent.toLowerCase().match(/version\/([\d.]+)/) != null;
	}
	return util;
}(util || {}));

window.onresize = function() {
	if(util.isSafari()) {
		var bodyWidth = document.body.clientWidth;
		if(bodyWidth < 992) {
			document.getElementById("content").style.width = "100%";
		} else {
			if($(".my-nav-switch").attr("data-isopen") == "true") {
				document.getElementById("content").style.width = (bodyWidth - 250) + "px";
			} else {
				document.getElementById("content").style.width = (bodyWidth - 80) + "px";
			}
		}
	}
}