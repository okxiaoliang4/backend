class MyNav extends React.Component {

	initialState() {
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
			<div className="my-nav-box" data-isOpen="true">
				<MyNavBarTitle titleWord={this.state.titleWord}/>
				<MyNavBarTab tabsData={this.state.tabsData}/>
				<div className="my-nav-switch" data-isOpen="true">
					<div className="my-nav-switch-button-top"></div>
					<div className="my-nav-switch-button-bottom"></div>
				</div>
			</div>
		);
	}

	componentDidMount() {
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
}

class MyNavBarTitle extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return(
			<div className="my-nav-title-body">
				<span className="my-nav-title-word">{this.props.titleWord}</span>
			</div>
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
					<a className="tabButton" href={tab.link}>
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
}

var myNav = ReactDOM.render(<MyNav/>, document.getElementById("my-nav"));