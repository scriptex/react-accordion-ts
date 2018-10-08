"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var Panel = (function (_super) {
    __extends(Panel, _super);
    function Panel(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            height: 0
        };
        return _this;
    }
    Panel.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            var el = react_dom_1.findDOMNode(_this);
            var height = el.querySelector('.panel__body')
                .scrollHeight;
            _this.setState({ height: height });
        }, this.props.duration || 300);
    };
    Panel.prototype.render = function () {
        var _a = this.props, title = _a.title, children = _a.children, activeTab = _a.activeTab, index = _a.index, activatePanel = _a.activatePanel;
        var isActive = activeTab === index;
        var innerStyle = {
            height: (isActive ? this.state.height : 0) + "px"
        };
        return (React.createElement("div", { className: "panel", role: "tabpanel", "aria-expanded": isActive },
            React.createElement("button", { role: "tab", className: "panel__head", onClick: function (_) { return activatePanel(index); } }, title),
            React.createElement("div", { style: innerStyle, className: "panel__body", "aria-hidden": !isActive },
                React.createElement("div", { className: "panel__content" }, children))));
    };
    return Panel;
}(React.Component));
exports.default = Panel;
//# sourceMappingURL=panel.js.map