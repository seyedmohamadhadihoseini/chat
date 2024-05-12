"use client";

import MessageType from "@/lib/message";
import HistoryItem from "./item";
import { io } from "socket.io-client";
import { useEffect, useRef, useState } from "react";
import getNewMessage from "./update";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST || "");
export default function ChatHistoryMessages({ messages, userId, itsId }: { messages: MessageType[], userId: number, itsId: number }) {
    const [state,setState] = useState(true);
    const displayMessages = messages.map(message => {
        return <HistoryItem isMine={userId == message.senderId} key={message.id} message={message} />
    })
    useEffect(() => {
        socket.on(`${itsId}=>${userId}`, (messageId: number) => {
            getNewMessage(messageId).then(message => {
                const defaultMessage =  { chatId: 0, createdDate: new Date(), id: 0, receiverId: 0, senderId: 0, text: "" };
                messages.push(message||defaultMessage);
                setState(state=>!state);
            })
        });

        return () => {
            socket.off(`${itsId}=>${userId}`);
        }
    }, [ itsId, messages, userId]);

    
    useEffect(() => {
        const chatH = document.getElementById("main-channel");
        chatH?.scrollTo(0, chatH?.scrollHeight);
    }, [displayMessages.length])
    return (
        <div className="chat-history" id="main-channel" >
            <ul id="messages-history-list"  className="m-b-0">
                {displayMessages}
            </ul>
        </div>
    );
}