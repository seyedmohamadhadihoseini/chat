'use client'; // Error components must be Client Components
"use strict";
exports.__esModule = true;
var react_1 = require("react");
function Error(_a) {
    var error = _a.error, reset = _a.reset;
    react_1.useEffect(function () {
        console.error(error);
    }, [error]);
    return (React.createElement("div", { style: {
            textAlign: "center"
        } },
        React.createElement("h1", null, "please Check your Internet !"),
        React.createElement("button", { style: {
                display: "block",
                padding: "10px"
            }, onClick: function () { return reset(); } }, "Try again")));
}
exports["default"] = Error;
