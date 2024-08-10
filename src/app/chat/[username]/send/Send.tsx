"use client";
import { useLayoutEffect, useRef, useState } from "react";
import SendMessage from "./action";
import "./style.css";
import { ChatType } from '@/lib/chat';
import { io } from "socket.io-client";

import MessageType from "@/lib/message";
import MyBroker from "@/broker/MyBroker";
import { Send_Button, Send_Reply, Send_TextArea, Send_Voice } from "./elements";

export default function Send({ chat, myId, itsId }: { chat: ChatType | null, myId: number | undefined, itsId: number }) {
  const [txt, setText] = useState("");
  const textRef = useRef<null | HTMLTextAreaElement>(null);
  const [replyMessage, setReplyMessage] = useState({ id: 0, txt: "" });
  const ReplyFunction = (message: MessageType) => {
    setIsReplyed(true);
    setReplyMessage({
      id: message.id,
      txt: message.text
    })
  }
  const FocusInput = () => {
    textRef.current?.focus();
  }
  useLayoutEffect(() => {
    MyBroker.set("reply", ReplyFunction);
    MyBroker.set("focusinput", FocusInput);
    MyBroker.set("sendmessagelive",SendMessageLive);
  }, [])
  const [isReplyed, setIsReplyed] = useState(false);
  const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST?.toString() || "");


  const SendHandler = async () => {
    const textContent = txt;
    setText("");
    const newMessage: MessageType | null = await SendMessage({ chatId: chat?.id, text: textContent, senderId: myId, receiverId: itsId, replyId: replyMessage.id > 0 ? replyMessage.id : null });
    if (newMessage) {
      SendMessageLive(newMessage);
    }
  }
  const SendMessageLive = (newMessage: MessageType) => {
    setIsReplyed(false);
    setReplyMessage({ id: 0, txt: "" });
    (MyBroker.get("addmessage"))(newMessage);
    socket.emit("messagefrom", myId, itsId, newMessage.id);
  }


  return (
    <div className="all-send">
      <Send_Reply isReplyed={isReplyed} replyMessageText={replyMessage.txt} setIsReplyed={setIsReplyed} setReplyMessage={setReplyMessage} />
      <div className="send-part">
        <Send_TextArea SendHandler={SendHandler} setText={setText} txt={txt} />
        <Send_Voice myId={myId || 0} itsId={itsId} chatId={chat?.id||null} replyId={replyMessage.id > 0 ? replyMessage.id : null} />
        <Send_Button SendHandler={SendHandler} />
      </div>
    </div>
  );
}
