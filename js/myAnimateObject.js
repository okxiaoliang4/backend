var myAnimateObject = (function(myAnimateObject) {

	myAnimateObject.showChildren = function(jqueryElement) {
		var childrenNum = jqueryElement.siblings('ul').children("li").length;
		jqueryElement.siblings('ul').attr("data-isOpen", "true");
		jqueryElement.siblings('ul').stop().velocity({
			"height": childrenNum * 30,
			"opacity": 1
		});
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "0deg"
		});
	}

	myAnimateObject.hideChildren = function(jqueryElement) {
		var childrenNum = jqueryElement.siblings('ul').children("li").length;
		jqueryElement.siblings('ul').attr("data-isOpen", "flase");
		jqueryElement.siblings('ul').stop().velocity({
			"height": "0%",
			"opacity": 0
		});
		jqueryElement.children(".my-nav-tab-down").stop().velocity({
			"rotateX": "180deg"
		});
	}

	return myAnimateObject;
}(myAnimateObject || {}));