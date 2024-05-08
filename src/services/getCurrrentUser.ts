// import { cookies } from "next/headers";
// import prisma from "./MyPrismaClient";
import GetUser from "./getUser";
import { User } from "@/lib/user";

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
//   const sessionVal = cookies().get("chat_session")?.value;
//   const session = await prisma.sessions.findFirst({
//     where: {
//       value: sessionVal?.toString(),
//     },
//   });
//   if (sessionVal && session) {
//     const user = await prisma.user.findFirst({
//       where: {
//         id: session.userId,
//       },
//     });
//     return user;
//   }
//   return null;
}