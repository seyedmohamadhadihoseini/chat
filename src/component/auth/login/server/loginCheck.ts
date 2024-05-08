
"use server";
import prisma from "@/services/MyPrismaClient";
import { redirect } from "next/navigation";
let id = 0;

export default async function CheckLogin(prevState:any,formData: FormData) {
    const data = Object.fromEntries(formData);
    const inputUsername = data.username.toString().toLowerCase();
    const password = data.password.toString();
    const isRemember = data["remember-me"] ? true : false;

    const user = await prisma.user.findFirst({
        where: {
            username: inputUsername
        },
        select: {
            password: true
        }
    });
    let errorMessage = "";
    if (user) {
        if (user.password.toString() == password) {
            return redirect("/chat");
        }
        else{
            errorMessage = "password is not correct";
        }
    }
    else{
        errorMessage = "user not exist";
    }
    id+=1;
    return {
        message:errorMessage,id
    };
    
    
}