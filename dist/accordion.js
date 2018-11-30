"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (!_this.props.multiple) {
                _this.setState(function (prev) { return ({
                    activeTab: prev.activeTab === index ? -1 : index
                }); });
            }
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        var _this = this;
        var activeTab = this.state.activeTab;
        var _a = this.props, items = _a.items, duration = _a.duration, multiple = _a.multiple;
        return Array.isArray(items) && items.length
            ? items.map(function (_a, index) {
                var title = _a.title, content = _a.content;
                return (React.createElement("div", { className: "accordion", role: "tablist" },
                    React.createElement(panel_1.default, { key: index, title: title, index: index, duration: duration, multiple: multiple, activeTab: activeTab, activatePanel: _this.activatePanel }, content)));
            })
            : '';
    };
    return Accordion;
}(React.Component));
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map