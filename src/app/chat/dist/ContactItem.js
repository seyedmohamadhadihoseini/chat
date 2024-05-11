"use strict";
exports.__esModule = true;
var prefixOfProfile_1 = require("@/services/prefixOfProfile");
var image_1 = require("next/image");
var link_1 = require("next/link");
function ContactItem(_a) {
    var user = _a.user;
    var profile = user === null || user === void 0 ? void 0 : user.profile;
    if (!profile) {
        profile = "avatar2.png";
    }
    return React.createElement("li", null,
        React.createElement(link_1["default"], { className: "original-contact-item", href: "/chat/" + (user === null || user === void 0 ? void 0 : user.username) },
            React.createElement("div", { className: "contact-image" },
                React.createElement(image_1["default"], { src: prefixOfProfile_1["default"]() + "?name=" + (user === null || user === void 0 ? void 0 : user.profile), fill: true, alt: "" + (user === null || user === void 0 ? void 0 : user.name), className: 'avatar rounded-full' })),
            React.createElement("div", { className: 'about' },
                React.createElement("h1", null, user === null || user === void 0 ? void 0 : user.name),
                React.createElement("p", null, user === null || user === void 0 ? void 0 : user.username))));
}
exports["default"] = ContactItem;
