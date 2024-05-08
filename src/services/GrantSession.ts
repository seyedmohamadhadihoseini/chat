import { randomUUID } from "crypto";
import { cookies } from "next/headers";
import prisma from "./MyPrismaClient";

export default async function GrantSession(userId: any) {
    const sessionVal = randomUUID();
    cookies().set("chat_session", sessionVal, {
        httpOnly: true
    });
    await prisma.sessions.create({
        data: {
            id: sessionVal,
            userId
        }
    })

}