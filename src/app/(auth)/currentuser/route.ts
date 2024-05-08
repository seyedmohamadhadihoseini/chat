import prisma from "@/services/MyPrismaClient";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const sessionVal = request.nextUrl.searchParams.get("sessionId");

    const session = await prisma.sessions.findUnique({
        where: {
            id: sessionVal?.toString()
        }
    });
    if (session) {
        const user = await prisma.user.findFirst({
            where: {
                id: session.userId
            }
        });
        return Response.json(user,{status:200});

    }
    return Response.json({},{status:200});
}



