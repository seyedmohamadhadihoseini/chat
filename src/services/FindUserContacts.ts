import { User } from "@/lib/user";
import prisma from "./MyPrismaClient";

export default async function FindUserContacts(user: User|null) {
  const chats = await prisma.chat.findMany({
    where: {
      OR: [
        {
          person1Id: user?.id,
        },
        {
          person2Id: user?.id,
        },
      ],
    },
  });
  const userIdes: number[] = chats.map((chat) => {
    if (chat.person1Id === user?.id) {
      return chat.person2Id;
    } else {
      return chat.person1Id;
    }
  });
  const users =[];
  for(let i=0;i<userIdes.length;++i){
    const user = await prisma.user.findUnique({
        where:{
            id:userIdes[i]
        }
    })
    users.push(user);
  }
  return users;
}
