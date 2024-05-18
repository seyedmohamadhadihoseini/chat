import GetUser from "./getUser";
import { User } from "@/lib/user";
import { cookies } from "next/headers";


export default async function getCurrentUser() {

    const user = await GetUser();
    if(!user){
        return null;
    }
    const result : User={
        id:user.id,
        createdDate:user.createdDate,
        lastDate:user.lastDate,
        name:user.name,
        password:user.password,
        profile:user.profile,
        username:user.username
    }
    return result;
    // const sessionVal = cookies().get("chat_session")?.value;
    
    // const session = await prisma.sessions.findUnique({
    //     where: {
    //         id: sessionVal?.toString(),
    //     }
    // });
    // if (sessionVal && session) {
    //     const user = await prisma.user.findUnique({
    //         where: {
    //             id: session.userId,
    //         },
    //     });
    //     return user;
    // }
    // return null;
}