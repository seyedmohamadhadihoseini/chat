
"use server";
import prisma from "@/services/MyPrismaClient";
import { Validate } from "./validate";
import { redirect } from "next/navigation";
import GrantSession from "@/services/GrantSession";
let id = 0;
export default async function CheckLogin(prevState: any, formData: FormData) {
    const data = Object.fromEntries(formData)
    const inputUsername = data.username.toString();
    const password = data.password.toString();
    const isRemember = data["remember-me"] ? true : false;

    const user = await prisma.user.findFirst({
        where: {
            username: inputUsername
        }
    });
    let errorMessage = "";
    if (user) {
        if (user.password.toString() == password) {
            await GrantSession(user.id);
            return redirect(`/chat/${user.username}`);
        }
        else {
            errorMessage = "password is not correct";
        }
    }
    else {
        errorMessage = "user not exist";
    }
    id += 1;
    return {
        message: errorMessage, id
    };


}