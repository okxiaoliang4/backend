var MyNav = React.createClass({

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
			<div className="my-nav-box">
				<MyNavBarTitle titleWord={this.state.titleWord}/>
				<MyNavBarTab tabsData={this.state.tabsData}/>
				<div className="my-nav-switch" data-isOpen="false">
					<div className="my-nav-switch-button-top"></div>
					<div className="my-nav-switch-button-bottom"></div>
				</div>
			</div>
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

var MyNavBarTitle = React.createClass({

	render: function() {
		return(
			<div className="my-nav-title-body">
				<span className="my-nav-title-word">{this.props.titleWord}</span>
			</div>
		);
	}
})

var MyNavBarTab = React.createClass({

	render: function() {
		var tabs = this.props.tabsData.map(function(tab) {
			var tabClassName = "fa fa-" + tab.icon + " tab-icon";

			var arrow;
			var children;
			if(tab.children.length != 0) {
				var childrenitem = tab.children.map(function(child) {
					return(
						<li>
							<a className="no-selection">{child.text}</a>
						</li>
					)
				});
				arrow = <i className="fa fa-chevron-down my-nav-tab-down"></i>;
				children =
					<ul className="my-nav-tab-child-tab" data-isOpen="false">
						{childrenitem}
					</ul>;
			}

			return(
				<li>
					<a className="tabButton fold" href={tab.link}>
						<i className={tabClassName}></i>
						<span className="my-nav-tab-text no-selection">{tab.text}</span>
						{arrow}
					</a>
					{children}
				</li>
			);
		});

		return(
			<div className="my-nav-tab">
				<ul>
					{tabs}
				</ul>
			</div>
		);
	}
})

var myNav = ReactDOM.render(<MyNav/>, document.getElementById("my-nav"));