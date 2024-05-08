"use client";

import MessageType from "@/lib/message";
import HistoryItem from "./item";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST || "");
export default function ChatHistoryMessages({ messages, userId, itsId }: { messages: MessageType[], userId: number, itsId: number }) {
    const router = useRouter();
    useEffect(() => {
        socket.on(`${itsId}=>${userId}`, (v) => {
            router.refresh();
        });

        return () => {
            socket.off(`${itsId}=>${userId}`);
        }
    }, [itsId, router, userId]);

    const displayMessages = messages.map(message => {
        return <HistoryItem isMine={userId == message.senderId} key={message.id} message={message} />
    })
    useEffect(() => {
        const chatH = document.getElementById("main-channel");
        chatH?.scrollTo(0, chatH?.scrollHeight)
    }, [displayMessages.length])
    return (
        <div className="chat-history" id="main-channel" >
            <ul className="m-b-0">
                {displayMessages}
            </ul>
        </div>
    );
}