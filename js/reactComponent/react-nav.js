class MyNav extends React.Component {

	initialState() {
		return {
			titleWord: "后台管理模板",
			tabsData: [{
				icon: "home",
				text: "首頁",
				children: [],
				link: "/"
			}, {
				icon: "edit",
				text: "编辑",
				children: [{
					text: "编辑1"
				}]
			}, {
				icon: "desktop",
				text: "桌面",
				children: [{
					text: "桌面1"
				}]
			}, {
				icon: "bar-chart-o",
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
	}

	constructor(props) {
		super(props);
		this.state = this.initialState();
	}

	render() {
		return(
			React.createElement("div", {className: "my-nav-box"}, 
				React.createElement(MyNavBarTitle, {titleWord: this.state.titleWord}), 
				React.createElement(MyNavBarTab, {tabsData: this.state.tabsData}), 
				React.createElement("div", {className: "my-nav-switch"}, 
					React.createElement("div", {className: "my-nav-switch-button-top"}), 
					React.createElement("div", {className: "my-nav-switch-button-bottom"})
				)
			)
		);
	}

	componentDidMount() {
		$(".tabButton").off("click");
		$(".tabButton").on("click", function() {
			if($(this).siblings('ul').attr("data-isOpen") == "true") {
				myAnimateObject.hideNavTabChildren($(this));
			} else {
				myAnimateObject.showNavTabChildren($(this));
			}
		});
	}
}

class MyNavBarTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			React.createElement("div", {className: "my-nav-title-body"}, 
				React.createElement("i", {className: "fa fa-gear"}), 
				React.createElement("span", {className: "my-nav-title-word"}, this.props.titleWord), 
				React.createElement("i", {className: "fa fa-gear"})
			)
		);
	}
}

class MyNavBarTab extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
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
					React.createElement("a", {className: "tabButton", href: tab.link}, 
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
}

var myNav = ReactDOM.render(React.createElement(MyNav, null), document.getElementById("my-nav"));