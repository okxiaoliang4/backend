var myAnimateObject = (function(myAnimateObject) {

	myAnimateObject.showNavTabChildren = function(jqueryElement) {
		var otherTabChildren = $(".my-nav-tab-child-tab[data-isOpen=true]").not(jqueryElement.siblings('ul'));
		$(".tabButton.active").removeClass("active");
		otherTabChildren.siblings(".tabButton").children(".my-nav-tab-down").velocity({
			"rotateX": "0deg"
		});
		otherTabChildren.attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		});

		jqueryElement.addClass("active");
		if(jqueryElement.siblings('ul')[0] != null) {
			jqueryElement.siblings('ul').stop().velocity({
				"height": jqueryElement.siblings('ul')[0].scrollHeight + "px",
				"opacity": 1
			}, function() {
				jqueryElement.siblings('ul').css("height", "auto");
			});
			jqueryElement.children(".my-nav-tab-down").stop().velocity({
				"rotateX": "180deg"
			});
			jqueryElement.siblings('ul').attr("data-isOpen", "true");
		}
	}

	myAnimateObject.hideNavTabChildren = function(jqueryElement) {
		jqueryElement.removeClass("active");
		jqueryElement.find(".my-nav-tab-child-tab").attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		});
		if(jqueryElement.siblings('ul')[0] != null) {
			jqueryElement.siblings('ul').stop().velocity({
				"height": "0px",
				"opacity": 0
			});
		}
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "0deg"
		});
		jqueryElement.siblings('ul').attr("data-isOpen", "flase");
	}

	myAnimateObject.unfoldedMyNav = function() { // 展开
		$(".my-nav-switch").attr("data-isOpen", "true");
		$(".container.backend").removeClass("fold");
		$(".my-nav-tab>ul>li>a").removeClass("center");
		$(".my-nav-switch-button-top").stop().velocity({
			rotateZ: "-45deg",
		});
		$(".my-nav-switch-button-bottom").stop().velocity({
			rotateZ: "45deg",
		});
	}

	myAnimateObject.foldMyNav = function() { // 折叠
		$(".my-nav-switch").attr("data-isOpen", "false");
		$(".container.backend").addClass("fold");
		$(".my-nav-switch-button-top").stop().velocity({
			rotateZ: "45deg",
		});
		$(".my-nav-switch-button-bottom").stop().velocity({
			rotateZ: "-45deg",
		});
		setTimeout(function() {
			$(".my-nav-tab>ul>li>a").addClass("fold");
		}, 150);
	}

	return myAnimateObject;
}(myAnimateObject || {}));