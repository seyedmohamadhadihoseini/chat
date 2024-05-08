"use client";
import { useState } from "react";
import SendMessage from "./action";
import "./style.css";
import { ChatType } from '@/lib/chat';
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

export default function Send({ chat, myId, itsId }: { chat: ChatType|null, myId: number|undefined, itsId: number }) {
  const [txt, setText] = useState("");
  const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST?.toString() || "");
  const router = useRouter();
  const SendHandler = async () => {
    await SendMessage({ chatId: chat?.id, text: txt, senderId: myId, receiverId: itsId });
    socket.emit("messagefrom", myId, itsId);
    setText("");
    router.refresh();
  }
  return (
    <div className="send-part">

      <textarea
        className="form-control bg-blue-100 focus:bg-blue-300 text-input focus:outline-0 resize-none rounded-md w-full"
        placeholder="Enter text here..."
        id="text-input"
        name="message"
        value={txt}
        onChange={e => setText(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter" && !e.shiftKey && txt.length>0) {
            e.preventDefault();
            await SendHandler();
          }

        }}

      />
      <button type="button"
        className="text-gray-900 bg-gradient-to-r from-red-200
     via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 
     focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 
     font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 w-11/12 h-full rounded-full"
        onClick={async(e) => {
          await SendHandler();
        }}
      >
        Send
      </button>


    </div>
  );
}
