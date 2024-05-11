import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import prisma from "./MyPrismaClient";

export default async function GrantSession(userId: any) {
    const sessionVal = randomUUID();
    const oneMonth = 30*24*60*60*1000;
    cookies().set("chat_session", sessionVal, {
        httpOnly: true,expires:Date.now()+oneMonth
    });
    await prisma.sessions.create({
        data: {
            id: sessionVal,
            userId
        }
    })
}