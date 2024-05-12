"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var loginCheck_1 = require("../server/loginCheck");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var navigation_1 = require("next/navigation");
function SignInForm() {
    var target = navigation_1.useSearchParams().get("target");
    var _a = react_dom_1.useFormState(loginCheck_1["default"], { target: target, message: "", id: 0 }), errorMessage = _a[0], formAction = _a[1];
    react_1.useEffect(function () {
        if ((errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message) != "") {
            react_toastify_1.toast(errorMessage === null || errorMessage === void 0 ? void 0 : errorMessage.message);
        }
    }, [errorMessage]);
    return (React.createElement("form", { action: formAction, className: "register-form", id: "login-form" },
        React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: "username" },
                React.createElement("i", { className: "zmdi zmdi-account material-icons-name" })),
            React.createElement("input", { type: "text", name: "username", id: "username", placeholder: "username" })),
        React.createElement("div", { className: "form-group" },
            React.createElement("label", { htmlFor: "password" },
                React.createElement("i", { className: "zmdi zmdi-lock" })),
            React.createElement("input", { type: "password", name: "password", id: "password", placeholder: "Password" })),
        React.createElement("div", { className: "form-group" },
            React.createElement("input", { type: "checkbox", name: "remember-me", id: "remember-me", className: "agree-term" }),
            React.createElement("label", { htmlFor: "remember-me", className: "label-agree-term" },
                React.createElement("span", null,
                    React.createElement("span", null)),
                "Remember me")),
        React.createElement("div", { className: "form-group form-button" },
            React.createElement("button", { type: "submit", name: "signin", id: "signin", className: "form-submit" }, "Log in")),
        React.createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark", transition: react_toastify_1.Bounce })));
}
exports["default"] = SignInForm;
