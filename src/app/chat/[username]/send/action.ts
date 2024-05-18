"use server";

import MessageCategory from "@/lib/message/category";
import prisma from "@/services/MyPrismaClient";

export async function SendVoiceAction(
  filename: string,
  senderId: number,
  receiverId: number,
  chatId: number|null,
  replyId: number | null
) {
  let newChatId = chatId || (await createChat(senderId, receiverId));
  if (newChatId) {
    const message = await prisma.message.create({
      data: {
        category: MessageCategory.voice,
        voice: filename,
        senderId: senderId,
        receiverId,
        chatId: newChatId,
        replayId: replyId
      },
    });
    return message;
  }
  return null;
}
export default async function SendMessage({
  text,
  senderId,
  receiverId,
  chatId,
  replyId
}: {
  text: string;
  senderId: number | undefined;
  receiverId: number;
  chatId: number | undefined;
  replyId: number | null
}) {
  let newChatId = chatId || (await createChat(senderId, receiverId));
  if (newChatId) {
    const message = await prisma.message.create({
      data: {
        text,
        senderId: senderId || 0,
        receiverId,
        chatId: newChatId,
        replayId: replyId
      },
    });
    return message;
  }
  return null;
}
async function createChat(senderId: number | undefined, receiverId: number) {
  if (!senderId) {
    return null;
  }
  let chat = await prisma.chat.findFirst({
    where: {
      OR: [
        {
          AND: [
            { person1Id: senderId }, { person2Id: receiverId }
          ]
        },
        {
          AND: [
            { person1Id: receiverId }, { person2Id: senderId }
          ]
        }
      ]
    }
  })
  if (!chat) {

    chat = await prisma.chat.create({
      data: {
        person1Id: senderId,
        person2Id: receiverId,
      },
    });
  }

  return chat.id;
}
