"use server";

import prisma from "@/services/MyPrismaClient";

export async function RemoveMessage(id: number) {
  // await prisma.message.updateMany({
  //     data:{
  //         replayId:null
  //     },
  //     where:{
  //         replayId:id
  //     }
  // });
  await prisma.message.update({
    where: {
      id: id,
    },
    data: {
      isRemoved: true,
    },
  });
}
