"use server";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var validation_1 = require("./validation");
var MyPrismaClient_1 = require("@/services/MyPrismaClient");
var GrantSession_1 = require("@/services/GrantSession");
var promises_1 = require("fs/promises");
var crypto_1 = require("crypto");
function SaveProfile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var extention, newName, storedName, bytes, buffer, pathname;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    extention = file.name.split(".").pop();
                    if (extention == undefined) {
                        extention = "png";
                    }
                    newName = crypto_1.randomUUID().replace("-", "");
                    storedName = newName + "." + extention;
                    return [4 /*yield*/, file.arrayBuffer()];
                case 1:
                    bytes = _a.sent();
                    buffer = Buffer.from(bytes);
                    pathname = "./public/users/img/" + storedName;
                    return [4 /*yield*/, promises_1.writeFile(pathname, buffer)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, storedName];
            }
        });
    });
}
function RegisterAction(prevState, formData) {
    return __awaiter(this, void 0, void 0, function () {
        var data, errorResult, profileName, profile, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    data = Object.fromEntries(formData);
                    return [4 /*yield*/, validation_1["default"](data)];
                case 1:
                    errorResult = _a.sent();
                    if (errorResult != "") {
                        return [2 /*return*/, {
                                id: prevState.id + 1,
                                message: errorResult
                            }];
                    }
                    profileName = "avatar1.png";
                    profile = data.profile;
                    if (!(profile.size > 0)) return [3 /*break*/, 3];
                    return [4 /*yield*/, SaveProfile(data.profile)];
                case 2:
                    profileName = _a.sent();
                    _a.label = 3;
                case 3: return [4 /*yield*/, MyPrismaClient_1["default"].user.create({
                        data: {
                            name: data.name.toString(),
                            password: data.password.toString(),
                            username: data.username.toString().toLowerCase(),
                            profile: profileName.toString()
                        }
                    })];
                case 4:
                    user = _a.sent();
                    return [4 /*yield*/, MyPrismaClient_1["default"].chat.create({
                            data: {
                                person1Id: user.id,
                                person2Id: user.id
                            }
                        })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, GrantSession_1["default"](user.id)];
                case 6:
                    _a.sent();
                    // redirect("/chat");
                    return [2 /*return*/, {
                            id: 0,
                            message: data.name.toString(),
                            user: user
                        }];
            }
        });
    });
}
exports["default"] = RegisterAction;
