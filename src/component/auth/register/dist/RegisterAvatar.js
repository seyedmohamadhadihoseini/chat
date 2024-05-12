"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
function RegisterAvatar() {
    return (React.createElement("div", { className: "signup-image" },
        React.createElement("figure", null,
            React.createElement(image_1["default"], { src: "/register/images/signup-image.jpg", alt: "sing up image", width: 300, height: 400 })),
        React.createElement(link_1["default"], { href: "/login", className: "signup-image-link" }, "I am already member")));
}
exports["default"] = RegisterAvatar;
