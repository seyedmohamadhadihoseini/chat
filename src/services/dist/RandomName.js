"use strict";
exports.__esModule = true;
function MyRandomName(length) {
    if (length === void 0) { length = 10; }
    var allChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var result = "";
    for (var i = 0; i < length; ++i) {
        var r = Math.floor(Math.random() * (allChar.length - 1)) + 1;
        result += allChar[r];
    }
    return result;
}
exports["default"] = MyRandomName;
