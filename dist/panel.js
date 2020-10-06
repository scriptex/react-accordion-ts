"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var React = require("react");
var react_dom_1 = require("react-dom");
exports.Panel = function (props) {
    var ref = React.useRef(null);
    var _a = React.useState(0), height = _a[0], setHeight = _a[1];
    var _b = React.useState(false), active = _b[0], setActive = _b[1];
    var index = props.index, title = props.title, multiple = props.multiple, children = props.children, activeTab = props.activeTab, activatePanel = props.activatePanel;
    var isActive = multiple ? active : activeTab === index;
    var innerStyle = {
        height: (isActive ? height : 0) + "px"
    };
    React.useEffect(function () {
        var timeout = setTimeout(function () {
            var el = react_dom_1.findDOMNode(ref.current);
            var newHeight = el.querySelector('.panel__body').scrollHeight;
            setHeight(newHeight);
        }, props.duration || 300);
        return function () {
            clearTimeout(timeout);
        };
    });
    return (React.createElement("div", { className: "panel", role: "tabpanel", "aria-expanded": isActive, ref: ref },
        React.createElement("button", { role: "tab", className: "panel__head", onClick: function (_) {
                multiple ? setActive(!active) : activatePanel(index);
            } }, title),
        React.createElement("div", { style: innerStyle, className: "panel__body", "aria-hidden": !isActive },
            React.createElement("div", { className: "panel__content" }, children))));
};
exports.default = exports.Panel;
//# sourceMappingURL=panel.js.map