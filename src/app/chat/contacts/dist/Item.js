"use strict";
exports.__esModule = true;
var timeDiff_1 = require("@/services/timeDiff");
var image_1 = require("next/image");
var link_1 = require("next/link");
function ContactDisplay(_a) {
    var contact = _a.contact, isActive = _a.isActive;
    var isAct = isActive ? "active" : "";
    return (React.createElement(link_1["default"], { href: "/chat/" + (contact === null || contact === void 0 ? void 0 : contact.username) },
        React.createElement("li", { className: "contact-li " + isAct },
            React.createElement("div", { className: "contact-image" },
                React.createElement(image_1["default"], { src: "/users/img/" + (contact === null || contact === void 0 ? void 0 : contact.profile), alt: "avatar", id: "contact-avatar", fill: true, className: "profile rounded-full" })),
            React.createElement("div", { className: "about" },
                React.createElement("div", { className: "name" }, contact === null || contact === void 0 ? void 0 : contact.name),
                React.createElement("div", { className: "status" },
                    React.createElement("i", { className: "fa fa-circle offline" }), "" + timeDiff_1["default"](new Date((contact === null || contact === void 0 ? void 0 : contact.lastDate) || ""), new Date()))))));
}
exports["default"] = ContactDisplay;
