import  prisma  from '@/services/MyPrismaClient';
import getCurrentUser from "@/services/getCurrrentUser"
export default async function updateLastDate()
{
  const user = await getCurrentUser();
  await prisma.user.update({
    where:{
      id:user?.id
    },
    data:{
      ...user,
      lastDate:new Date()
    }
  })

}