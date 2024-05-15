import prisma from "@/services/MyPrismaClient";
import ChatHeader from "./header";
import ChatHistory from "./history";
import Send from "./send/Send";
import updateLastDate from "@/services/updateLastdate";
import GetCurrentUser from "@/services/getCurrrentUser";
import "./style.css";
export default async function ChatPage({ params }: { params: { username: string } }) {
    const username = params.username;
    const currentUser = await GetCurrentUser();
    await updateLastDate();
    let targetUser = await prisma.user.findUnique({
        where: {
            username: username
        },
        select: {
            id: true, lastDate: true, name: true, profile: true
        }
    });
    if (!targetUser) {
        return <div>user not exist</div>
    }

    const userId = targetUser?.id ?? 0;

    const chat = await prisma.chat.findFirst({
        where: {
            OR: [
                {
                    AND: [
                        { person1Id: userId },
                        { person2Id: currentUser?.id }
                    ]
                }, {
                    AND: [
                        { person2Id: userId },
                        { person1Id: currentUser?.id }
                    ]
                }
            ]
        }
    });
    // if (!chat) {
    //     return <div></div>
    // }
    return (
        <div className="chat">
            <ChatHeader user={targetUser} />
            <ChatHistory chat={chat} user={currentUser} itsId={targetUser?.id || 0} />
            <Send chat={chat} myId={currentUser?.id} itsId={userId} />
        </div>
    )
}