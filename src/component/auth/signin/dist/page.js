"use strict";
exports.__esModule = true;
require("$public/register/fonts/material-icon/css/material-design-iconic-font.min.css");
require("$public/register/css/style.css");
var Avatar_1 = require("./Avatar");
var SocialLogin_1 = require("./SocialLogin");
var signin_form_1 = require("./signin-form");
var react_1 = require("react");
function SignIn() {
    return (React.createElement("section", { className: "sign-in" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "signin-content", style: { marginTop: 1 + "%" } },
                React.createElement(react_1.Suspense, null,
                    React.createElement(Avatar_1["default"], null)),
                React.createElement("div", { className: "signin-form" },
                    React.createElement("h2", { className: "form-title" }, "Sign in"),
                    React.createElement(react_1.Suspense, null,
                        React.createElement(signin_form_1["default"], null)),
                    React.createElement(SocialLogin_1["default"], null))))));
}
exports["default"] = SignIn;
