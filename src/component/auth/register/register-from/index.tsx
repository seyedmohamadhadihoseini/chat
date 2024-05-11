"use client";
import { useFormState } from "react-dom";
import { RgAgreeterm, RgConfirmPassword, RgName, RgPassword, RgProgile, RgSubmitButton, RgUsername } from "./elements";
import RegisterAction from "./server/actions";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";

export default function RegisterForm() {

    const router = useRouter();
    const [errorState, formAction] = useFormState(RegisterAction, { id: 1, message: "" });
    useEffect(() => {
        if (errorState.id === 0) {
            // toast(`welcome ${errorState.message}`);
            // router.push(`/chat/${errorState.user?.username}`);
        }
        else if (errorState.message != "") {
            toast(errorState.message);
        }
    }, [errorState,router])
    return (
        <form action={formAction} className="register-form" id="register-form">
            <ToastContainer />
            <RgName />
            <RgUsername />
            <RgPassword />
            <RgConfirmPassword />
            <RgProgile/>
            <RgAgreeterm />
            <RgSubmitButton />
        </form>
    );
}