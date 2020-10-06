"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accordion = void 0;
var React = require("react");
var panel_1 = require("./panel");
exports.Accordion = function (props) {
    var _a = React.useState(-1), activeTab = _a[0], setActiveTab = _a[1];
    var items = props.items, duration = props.duration, multiple = props.multiple;
    var Items = function () { return (React.createElement(React.Fragment, null, items.map(function (_a, index) {
        var title = _a.title, content = _a.content;
        return (React.createElement("div", { className: "accordion", role: "tablist", key: index },
            React.createElement(panel_1.default, { key: index, title: title, index: index, duration: duration, multiple: multiple, activeTab: activeTab, activatePanel: function (i) {
                    if (props.multiple) {
                        return;
                    }
                    setActiveTab(activeTab === i ? -1 : i);
                } }, content)));
    }))); };
    return Array.isArray(items) && items.length ? React.createElement(Items, null) : null;
};
exports.default = exports.Accordion;
//# sourceMappingURL=accordion.js.map