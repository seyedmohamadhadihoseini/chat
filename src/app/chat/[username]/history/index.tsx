import { ChatType } from "@/lib/chat";
import ChatHistoryMessages from "./history";
import prisma from "@/services/MyPrismaClient";
import { User } from "@/lib/user";

export default async function ChatHistory({ chat, user, itsId }: { chat: ChatType | null, user: User|null, itsId: number }) {
    if (!user) {
        return <div></div>
    }
    const userId = user.id;
    let chatId = -1;
    if(chat){
        chatId = chat?.id;
    }
    const messages = await prisma.message.findMany({
        where: {
            chatId: chatId
        }
    });
    return (

        <ChatHistoryMessages messages={messages} userId={userId} itsId={itsId} />
    )
}