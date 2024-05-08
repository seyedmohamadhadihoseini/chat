"use server";

import prisma from "@/services/MyPrismaClient";

export default async function fetchUsers(currentUserId: number) {
  const usersIdes: number[] = [];
  (
    await prisma.chat.findMany({
      where: {
        OR: [{ person1Id: currentUserId }, { person2Id: currentUserId }],
      },
    })
  ).forEach((chat) => {
    if (chat.person1Id === currentUserId) {
      usersIdes.push(chat.person2Id);
    } else {
      usersIdes.push(chat.person1Id);
    }
  });
  let users = [];
  for (let i = 0; i < usersIdes.length; i++) {
    let user = await prisma.user.findUnique({
      where: {
        id: usersIdes[i],
      },
    });
    user!.password = "";
    users.push(user);
  }
  return users;
}
