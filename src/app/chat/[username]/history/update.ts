"use server"

import prisma from "@/services/MyPrismaClient"


export default async function getNewMessage(messageId:number) {
    const message = await prisma.message.findUnique({
        where:{
            id:messageId
        }
    });
    return message;
}