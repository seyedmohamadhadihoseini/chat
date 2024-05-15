"use strict";
exports.__esModule = true;
var client_1 = require("@prisma/client");
var instance = null;
var StateUtility = /** @class */ (function () {
    function StateUtility() {
        if (instance) {
            return;
        }
        this.prismaCl = new client_1.PrismaClient();
        instance = this;
    }
    return StateUtility;
}());
var stateUtilityInstance = Object.freeze(new StateUtility());
var prisma = stateUtilityInstance.prismaCl;
exports["default"] = prisma || new client_1.PrismaClient();
