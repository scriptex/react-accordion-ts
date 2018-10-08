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
var panel_1 = require("./panel");
var Accordion = (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            activeTab: -1
        };
        _this.activatePanel = function (index) {
            _this.setState(function (prev) { return ({
                activeTab: prev.activeTab === index ? -1 : index
            }); });
        };
        _this.renderBody = function (body) {
            if (typeof body === 'string') {
                return React.createElement("p", null, body);
            }
            else if (Array.isArray(body)) {
                return React.createElement("ul", null, body.map(function (item, i) { return React.createElement("li", { key: i }, item); }));
            }
            else {
                throw new TypeError('The body is neither string nor array.');
            }
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _this = this;
        var activeTab = this.state.activeTab;
        var _a = this.props, items = _a.items, duration = _a.duration;
        return (React.createElement("div", { className: "accordion", role: "tablist" }, Array.isArray(items)
            ? items.map(function (_a, index) {
                var date = _a.date, title = _a.title, content = _a.content;
                var header = date ? (React.createElement(React.Fragment, null,
                    React.createElement("time", null, date),
                    React.createElement("small", null, "-"),
                    React.createElement("strong", null, title))) : (React.createElement("strong", null, title));
                return (React.createElement(panel_1.default, { key: index, title: header, index: index, duration: duration, activeTab: activeTab, activatePanel: _this.activatePanel }, _this.renderBody(content)));
            })
            : ''));
    };
    return Accordion;
}(React.Component));
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map