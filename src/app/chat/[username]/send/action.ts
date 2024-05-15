"use server";

import prisma from "@/services/MyPrismaClient";

export default async function SendMessage({
  text,
  senderId,
  receiverId,
  chatId,
  replyId
}: {
  text: string;
  senderId: number|undefined;
  receiverId: number;
  chatId: number | undefined;
  replyId:number|null
}) {
  let newChatId = chatId || (await createChat(senderId, receiverId));

  const message = await prisma.message.create({
    data: {
      text,
      senderId:senderId||0,
      receiverId,
      chatId: newChatId,
      replayId:replyId
    },
  });
  return message;
}
async function createChat(senderId: number|undefined, receiverId: number) {
  const chat = await prisma.chat.create({
    data: {
      person1Id: senderId||0,
      person2Id: receiverId,
    },
  });

  return chat.id;
}
