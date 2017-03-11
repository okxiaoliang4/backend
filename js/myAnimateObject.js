var myAnimateObject = (function(myAnimateObject) {

	myAnimateObject.showNavTabChildren = function(jqueryElement) {
		var otherTab = $(".my-nav-tab-child-tab[data-isOpen=true]").not(jqueryElement.siblings('ul'));
		$(".tabButton.active").removeClass("active");
		otherTab.parent().find(".my-nav-tab-down").velocity({
			"rotateX": "0deg"
		});
		otherTab.attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		});
		
		jqueryElement.addClass("active");
		jqueryElement.siblings('ul').stop().velocity({
			"height": jqueryElement.siblings('ul')[0].scrollHeight + "px",
			"opacity": 1
		});
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "180deg"
		});
		jqueryElement.siblings('ul').attr("data-isOpen", "true");
	}

	myAnimateObject.hideNavTabChildren = function(jqueryElement) {
		jqueryElement.removeClass("active");
		jqueryElement.find(".my-nav-tab-child-tab").attr("data-isOpen", "false").stop().velocity({
			"height": "0px",
			"opacity": 0
		});
		jqueryElement.siblings('ul').stop().velocity({
			"height": "0px",
			"opacity": 0
		});
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "0deg"
		});
		jqueryElement.siblings('ul').attr("data-isOpen", "flase");
	}

	return myAnimateObject;
}(myAnimateObject || {}));