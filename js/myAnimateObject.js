var myAnimateObject = (function(myAnimateObject) {

	myAnimateObject.showNavTabChildren = function(jqueryElement) {
		var otherTabChildren = $(".my-nav-tab-child-tab[data-isOpen=true]").not(jqueryElement.siblings('ul'));
		$(".tabButton.select").removeClass("select");
		otherTabChildren.siblings(".tabButton").children(".my-nav-tab-down").velocity({
			"rotateX": "0deg"
		}, 400);
		otherTabChildren.attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		}, 400);

		jqueryElement.addClass("select");
		if(jqueryElement.siblings('ul')[0] != null) {
			jqueryElement.siblings('ul').stop().velocity({
				"height": jqueryElement.siblings('ul')[0].scrollHeight + "px",
				"opacity": 1
			}, {
				duration: 400,
				complete: function() {
					jqueryElement.siblings('ul').css("height", "auto");
				}
			});
			jqueryElement.children(".my-nav-tab-down").stop().velocity({
				"rotateX": "180deg"
			}, 400);
			jqueryElement.siblings('ul').attr("data-isOpen", "true");
		}
	}

	myAnimateObject.hideNavTabChildren = function(jqueryElement) {
		jqueryElement.removeClass("select");
		jqueryElement.find(".my-nav-tab-child-tab").attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		}, 400);
		if(jqueryElement.siblings('ul')[0] != null) {
			jqueryElement.siblings('ul').stop().velocity({
				"height": "0px",
				"opacity": 0
			}, 400);
		}
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "0deg"
		}, 400);
		jqueryElement.siblings('ul').attr("data-isOpen", "flase");
	}

	myAnimateObject.unfoldedMyNav = function() { // 展开
		$(".my-nav-switch").attr("data-isOpen", "true");
		$(".container.backend").removeClass("fold");
		$(".my-nav-tab>ul>li>a").removeClass("center");
		$(".my-nav-switch-button-top").stop().velocity({
			rotateZ: "-45deg",
		}, 400);
		$(".my-nav-switch-button-bottom").stop().velocity({
			rotateZ: "45deg",
		}, 400);

		if(util.isSafari() && document.body.clientWidth >= 992) {
			var bodyWidth = document.body.clientWidth;
			document.getElementById("content").style.width = (bodyWidth - 250) + "px";
		}
	}

	myAnimateObject.foldMyNav = function() { // 折叠
		$(".my-nav-switch").attr("data-isOpen", "false");
		$(".container.backend").addClass("fold");
		$(".my-nav-switch-button-top").stop().velocity({
			rotateZ: "45deg",
		}, 400);
		$(".my-nav-switch-button-bottom").stop().velocity({
			rotateZ: "-45deg",
		}, 400);
		$(".my-nav-tab>ul>li>a").addClass("fold");

		if(util.isSafari() && document.body.clientWidth >= 992) {
			var bodyWidth = document.body.clientWidth;
			document.getElementById("content").style.width = (bodyWidth - 80) + "px";
		}
	}

	return myAnimateObject;
}(myAnimateObject || {}));