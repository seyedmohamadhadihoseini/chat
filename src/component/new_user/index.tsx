"use client";

import { useEffect, useState } from "react";
import AddUser, { IsUserExist } from "./AddUser";
import { useRouter } from "next/navigation";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./style.css";
import { useFormState } from "react-dom";
export default function NewUser() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [mainState, currentFormAction] = useFormState(AddUser, {
        id: 0,
        success: false,
        message: ""
    });
    useEffect(() => {
        if (mainState.id !== 0) {
            toast(mainState.message);
        }
    }, [mainState, router, username])
    return <form className="new-user-form">
        <ToastContainer className={"mb-3 w-full"} />
        <input
            name="new-user"
            id="new-user"
            placeholder="Search ..."
            className="w-full border-2 border-black p-10 new-user-input"
            onChange={e => setUsername(e.target.value.toLowerCase())}
            onKeyDown={async (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    const isExist = await IsUserExist(username);
                    if (isExist) {
                        return router.push(`/chat/${username}`);
                    }

                    toast("username not exist");
                }
            }}


        />

    </form>
}