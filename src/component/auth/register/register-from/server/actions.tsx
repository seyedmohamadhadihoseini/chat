"use server";

import { redirect } from "next/navigation";
import Validate, { userType } from "./validation";
import prisma from "@/services/MyPrismaClient";
import GrantSession from "@/services/GrantSession";
import { writeFile } from "fs/promises";
function MyRandomName(length:number=10){
    const allChar = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    let result = "";
    for(let i=0;i<length;++i){
        const r = Math.floor(Math.random() * (allChar.length-1)) + 1;
        result +=allChar[r];
    }
    return result;
}
async function SaveProfile(file: any) {
    let extention = file.name.split(".").pop();
    if (extention == undefined) {
        extention = "png";
    }
    const storedName: string =  MyRandomName(50)+ "." + extention;
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const pathname = `./public/users/img/${storedName}`;
    await writeFile(pathname, buffer);
    return storedName;
}
interface StateType {
    target:string|null,
    id: number,
    message: string
}
export default async function RegisterAction(prevState: StateType, formData: FormData) {
    let data = Object.fromEntries(formData);


    let errorResult = await Validate(data);

    if (errorResult != "") {
        return {
            id: prevState.id + 1,
            message: errorResult,target:prevState.target
        }

    }
    let profileName = "avatar1.png";
    const profile = data.profile as File;
    if (profile.size>0) {
        profileName = await SaveProfile(data.profile);
    }
    const user = await prisma.user.create({
        data: {
            name: data.name.toString(),
            password: data.password.toString(),
            username: data.username.toString().toLowerCase(),
            profile: profileName.toString()
        }
    });
    await prisma.chat.create({
        data: {
            person1Id: user.id,
            person2Id: user.id
        }
    })
    await GrantSession(user.id);
    redirect(`/chat/${prevState.target||""}`);
    // return {
    //     id: 0,
    //     message: data.name.toString(),
    //     user: user
    // }
}
