"use client";
import LgButton from "./LgButton";
import LgForgot from "./LgForgot";
import LgLogo from "./LgLogo";
import LgPassword from "./LgPassword";
import LgRemind from "./LgRemind";
import LgTitle from "./lgTitle";
import LgUsername from "./lgUsername";

import CheckLogin from "../server/loginCheck";
import { useFormState } from "react-dom";
import LgRegister from "./LgRegister";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";

export default function LoginForm() {
    const [errorMessage, formAction] = useFormState(CheckLogin, { message: "", id: 0 });
    useEffect(() => {

        if (errorMessage.message != "") {
            toast(errorMessage.message);
        }
        
    }, [errorMessage]);
    return <form action={formAction} className="login100-form validate-form">

        <LgLogo />

        <LgTitle />

        <LgUsername />

        <LgPassword />

        <LgRemind />

        <LgButton />
        <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce} />
        <LgForgot />
        <LgRegister />
    </form>
}