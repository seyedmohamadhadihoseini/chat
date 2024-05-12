"use strict";
exports.__esModule = true;
require("$public/register/fonts/material-icon/css/material-design-iconic-font.min.css");
require("$public/register/css/style.css");
var RegisterAvatar_1 = require("./RegisterAvatar");
var register_from_1 = require("./register-from");
var react_1 = require("react");
function Register() {
    return (React.createElement("section", { className: "signup" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "signup-content" },
                React.createElement("div", { className: "signup-form" },
                    React.createElement("h2", { className: "form-title" }, "Sign up"),
                    React.createElement(react_1.Suspense, null,
                        React.createElement(register_from_1["default"], null))),
                React.createElement(RegisterAvatar_1["default"], null)))));
}
exports["default"] = Register;
