"use client";
"use strict";
exports.__esModule = true;
var react_dom_1 = require("react-dom");
var elements_1 = require("./elements");
var actions_1 = require("./server/actions");
var react_1 = require("react");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var navigation_1 = require("next/navigation");
function RegisterForm() {
    var target = navigation_1.useSearchParams().get("target");
    var router = navigation_1.useRouter();
    var _a = react_dom_1.useFormState(actions_1["default"], { target: target, id: 1, message: "" }), errorState = _a[0], formAction = _a[1];
    react_1.useEffect(function () {
        if (errorState.id === 0) {
            // toast(`welcome ${errorState.message}`);
            // router.push(`/chat/${errorState.user?.username}`);
        }
        else if (errorState.message != "") {
            react_toastify_1.toast(errorState.message);
        }
    }, [errorState, router]);
    return (React.createElement("form", { action: formAction, className: "register-form", id: "register-form" },
        React.createElement(react_toastify_1.ToastContainer, null),
        React.createElement(elements_1.RgName, null),
        React.createElement(elements_1.RgUsername, null),
        React.createElement(elements_1.RgPassword, null),
        React.createElement(elements_1.RgConfirmPassword, null),
        React.createElement(elements_1.RgProgile, null),
        React.createElement(elements_1.RgAgreeterm, null),
        React.createElement(elements_1.RgSubmitButton, null)));
}
exports["default"] = RegisterForm;
