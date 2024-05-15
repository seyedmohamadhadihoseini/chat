"use strict";
exports.__esModule = true;
var BrokerWithKey = /** @class */ (function () {
    function BrokerWithKey() {
    }
    BrokerWithKey.prototype.get = function (key) {
        return BrokerWithKey.replyFunc[key];
    };
    BrokerWithKey.prototype.set = function (key, val) {
        BrokerWithKey.replyFunc[key] = val;
    };
    BrokerWithKey.replyFunc = {};
    return BrokerWithKey;
}());
var MyBroker = new BrokerWithKey();
exports["default"] = MyBroker;
