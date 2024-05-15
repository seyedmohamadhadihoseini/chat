"use strict";
exports.__esModule = true;
exports.viewport = exports.metadata = void 0;
require("./globals.css");
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var APP_NAME = "SeyedGram";
var APP_DEFAULT_TITLE = "HadiGram";
var APP_TITLE_TEMPLATE = "%s - SeyedGram";
var APP_DESCRIPTION = "chat application user2user";
exports.metadata = {
    applicationName: APP_NAME,
    title: {
        "default": APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION,
    manifest: "/manifest.json",
    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: APP_DEFAULT_TITLE
    },
    formatDetection: {
        telephone: false
    },
    openGraph: {
        type: "website",
        siteName: APP_NAME,
        title: {
            "default": APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE
        },
        description: APP_DESCRIPTION
    },
    twitter: {
        card: "summary",
        title: {
            "default": APP_DEFAULT_TITLE,
            template: APP_TITLE_TEMPLATE
        },
        description: APP_DESCRIPTION
    }
};
exports.viewport = {
    themeColor: "#FFFFFF"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", null, children)));
}
exports["default"] = RootLayout;
