"use strict";
exports.__esModule = true;
exports.RgProgile = exports.RgSubmitButton = exports.RgAgreeterm = exports.RgConfirmPassword = exports.RgPassword = exports.RgUsername = exports.RgName = void 0;
function RgName() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "name" },
            React.createElement("i", { className: "zmdi zmdi-account material-icons-name" })),
        React.createElement("input", { type: "text", name: "name", id: "name", placeholder: "Your Name" })));
}
exports.RgName = RgName;
function RgUsername() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "username" },
            React.createElement("i", { className: "zmdi zmdi-email" })),
        React.createElement("input", { type: "text", name: "username", pattern: "[a-zA-Z0-9-]+", id: "username", placeholder: "Your Username" })));
}
exports.RgUsername = RgUsername;
function RgPassword() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "password" },
            React.createElement("i", { className: "zmdi zmdi-lock" })),
        React.createElement("input", { type: "password", name: "password", id: "password", placeholder: "Password" })));
}
exports.RgPassword = RgPassword;
function RgConfirmPassword() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("label", { htmlFor: "re-password" },
            React.createElement("i", { className: "zmdi zmdi-lock-outline" })),
        React.createElement("input", { type: "password", name: "re-password", id: "re-password", placeholder: "Repeat your password" })));
}
exports.RgConfirmPassword = RgConfirmPassword;
function RgAgreeterm() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("input", { type: "checkbox", name: "agree-term", id: "agree-term", className: "agree-term" }),
        React.createElement("label", { htmlFor: "agree-term", className: "label-agree-term" },
            React.createElement("span", null,
                React.createElement("span", null)),
            "I agree all statements in  ",
            React.createElement("a", { href: "#", className: "term-service" }, "Terms of service"))));
}
exports.RgAgreeterm = RgAgreeterm;
function RgSubmitButton() {
    return (React.createElement("div", { className: "form-group form-button" },
        React.createElement("button", { type: "submit", name: "signup", id: "signup", className: "form-submit" }, "Register")));
}
exports.RgSubmitButton = RgSubmitButton;
function RgProgile() {
    return (React.createElement("div", { className: "form-group" },
        React.createElement("input", { type: "file", name: "profile", id: "profile", accept: "image/png, image/gif, image/jpeg", className: "block w-full text-sm text-slate-500\r\n      file:mr-4 file:py-2 file:px-4\r\n      file:rounded-full file:border-0\r\n      file:text-sm file:font-semibold\r\n      file:bg-violet-50 file:text-violet-700\r\n      hover:file:bg-violet-100 \r\n    " })));
}
exports.RgProgile = RgProgile;
