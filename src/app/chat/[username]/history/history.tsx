"use client";

import MessageType from "@/lib/message";
import HistoryItem from "./item";
import { io } from "socket.io-client";
import { useEffect, useLayoutEffect, useState } from "react";
import getNewMessage from "./update";
import MyBroker from "@/broker/MyBroker";
import { useRouter } from "next/navigation";
const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST || "");
export default function ChatHistoryMessages({ messages, userId, itsId }: { messages: MessageType[], userId: number, itsId: number }) {
    const [state, setState] = useState(true);
    const [update, forceUpdate] = useState(0);
    const router = useRouter();
    const displayMessages = messages.map(message => {
        return <HistoryItem isMine={userId == message.senderId} key={message.id} message={message} />
    })
    const addNewMessage = (message: MessageType | null) => {
        if (message) {
            messages.push(message);
            setState(state => !state);
        }
    }
    const removeMessage = (messageId: number) => {
        let index = -1;
        for (let i = 0; i < messages.length; ++i) {
            if ((!messages[i].isRemoved) && messages[i].id === messageId) {
                index = i;
                messages[i].isRemoved = true;
                break;
            }
        }
        if (index !== -1)
            messages.splice(index, 1);

        forceUpdate(Math.random());
    }
    useLayoutEffect(() => {
        MyBroker.set("addmessage", addNewMessage);
        MyBroker.set("removemessage", removeMessage);
        MyBroker.set("myId", userId);
        MyBroker.set("itsId", itsId);
    }, [])
    useEffect(() => {
        socket.on(`${itsId}=>${userId}`, (messageId: number) => {
            getNewMessage(messageId).then(message => {
                addNewMessage(message);
            })
        });
        socket.on(`${itsId}Remove${userId}`, (messageId: number) => {
            removeMessage(messageId);
        })

        return () => {
            socket.off(`${itsId}=>${userId}`);
        }
    }, [itsId, userId]);


    useEffect(() => {
        const chatH = document.getElementById("main-channel");
        chatH?.scrollTo(0, chatH?.scrollHeight);
    }, [displayMessages.length])
    return (
        <div className="chat-history" id="main-channel" >
            <ul id="messages-history-list" className="m-b-0">
                {displayMessages}
            </ul>
        </div>
    );
}