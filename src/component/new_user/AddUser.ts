"use server";

import prisma from "@/services/MyPrismaClient";
import { redirect } from "next/navigation";
export interface AddState{
    id:number,
    message:string
} 
let preId = 0;
export default async function AddUser(prevState:AddState,formData:FormData){
    const data = Object.fromEntries(formData);
    const username = data["new-user"].toString().toLowerCase();
    const userCount:number = await prisma.user.count({
        where:{
            username:username
        }
    })
    preId +=1
    if(userCount===0){
        return {
            id:preId,
            success:false,
            message:"the user not exits"
        }
    }
    redirect(`/chat/${username}`);
}
export async function IsUserExist(username:string){
    const target = await prisma.user.findFirst({
        where:{
            username:username
        }
    })
    if(target){
        return true;
    }
    return false;
}