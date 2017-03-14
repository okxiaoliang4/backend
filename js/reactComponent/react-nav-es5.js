var MyNav = React.createClass({displayName: "MyNav",

	getInitialState: function() {
		return {
			titleWord: "Jelf",
			tabsData: [{
				icon: "home",
				text: "首頁",
				children: [],
				link: "#"
			}, {
				icon: "edit",
				text: "编辑",
				children: [{
					text: "编辑1"
				}]
			}, {
				icon: "envelope",
				text: "消息",
				children: [{
					text: "消息1"
				}]
			}, {
				icon: "pie-chart",
				text: "图表",
				children: [{
					text: "图表1"
				}, {
					text: "图表2",
				}, {
					text: "图表3",
				}]
			}, {
				icon: "folder-o",
				text: "文档",
				children: [{
					text: "文档1"
				}]
			}]
		}
	},
	render: function() {
		return(
			React.createElement("div", {className: "my-nav-box"}, 
				React.createElement(MyNavBarTitle, {titleWord: this.state.titleWord}), 
				React.createElement(MyNavBarTab, {tabsData: this.state.tabsData}), 
				React.createElement("div", {className: "my-nav-switch", "data-isOpen": "false"}, 
					React.createElement("div", {className: "my-nav-switch-button-top"}), 
					React.createElement("div", {className: "my-nav-switch-button-bottom"})
				)
			)
		);
	},
	componentDidMount: function() {
		$(".tabButton").off("click");
		$(".my-nav-switch").off("click");

		$(".tabButton").on("click", function() {
			if($(this).siblings('ul').attr("data-isOpen") == "true") {
				myAnimateObject.hideNavTabChildren($(this));
			} else {
				myAnimateObject.showNavTabChildren($(this));
			}
		});
		$(".my-nav-switch").on("click", function() {
			if($(this).attr("data-isOpen") == "true") {
				myAnimateObject.foldMyNav();
			} else {
				myAnimateObject.unfoldedMyNav();
			}
		});
	}
});

var MyNavBarTitle = React.createClass({displayName: "MyNavBarTitle",

	render: function() {
		return(
			React.createElement("div", {className: "my-nav-title-body"}, 
				React.createElement("span", {className: "my-nav-title-word"}, this.props.titleWord)
			)
		);
	}
})

var MyNavBarTab = React.createClass({displayName: "MyNavBarTab",

	render: function() {
		var tabs = this.props.tabsData.map(function(tab) {
			var tabClassName = "fa fa-" + tab.icon + " tab-icon";

			var arrow;
			var children;
			if(tab.children.length != 0) {
				var childrenitem = tab.children.map(function(child) {
					return(
						React.createElement("li", null, 
							React.createElement("a", {className: "no-selection"}, child.text)
						)
					)
				});
				arrow = React.createElement("i", {className: "fa fa-chevron-down my-nav-tab-down"});
				children =
					React.createElement("ul", {className: "my-nav-tab-child-tab", "data-isOpen": "false"}, 
						childrenitem
					);
			}

			return(
				React.createElement("li", null, 
					React.createElement("a", {className: "tabButton fold", href: tab.link}, 
						React.createElement("i", {className: tabClassName}), 
						React.createElement("span", {className: "my-nav-tab-text no-selection"}, tab.text), 
						arrow
					), 
					children
				)
			);
		});

		return(
			React.createElement("div", {className: "my-nav-tab"}, 
				React.createElement("ul", null, 
					tabs
				)
			)
		);
	}
})

var myNav = ReactDOM.render(React.createElement(MyNav, null), document.getElementById("my-nav"));