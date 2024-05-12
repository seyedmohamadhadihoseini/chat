"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
function Avatar() {
    var target = navigation_1.useSearchParams().get("target");
    return (React.createElement("div", { className: "signin-image" },
        React.createElement("figure", null,
            React.createElement(image_1["default"], { src: "/register/images/signin-image.jpg", alt: "sing up image", width: 300, height: 400 })),
        React.createElement(link_1["default"], { href: "/register" + (target ? "?target=" + target : ""), className: "signup-image-link" }, "Create an account")));
}
exports["default"] = Avatar;
