"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import SendMessage from "./action";
import "./style.css";
import { ChatType } from '@/lib/chat';
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";
import ReplyIcon from '@mui/icons-material/Reply';
import CloseIcon from '@mui/icons-material/Close';
import MessageType from "@/lib/message";
import MyBroker from "@/broker/MyBroker";

export default function Send({ chat, myId, itsId }: { chat: ChatType | null, myId: number | undefined, itsId: number }) {
  const [txt, setText] = useState("");
  const [replyMessage,setReplyMessage] = useState({id:0,txt:""});
  const ReplyFunction = (message:MessageType)=>{
    setIsReplyed(true);
    setReplyMessage({
      id:message.id,
      txt:message.text
    })
  }
  MyBroker.set("reply",ReplyFunction);
  const [isReplyed, setIsReplyed] = useState(false);
  const socket = io(process.env.NEXT_PUBLIC_SOCKET_HOST?.toString() || "");

  
  const SendHandler = async () => {
    const textContent = txt;
    setText("");
    const newMessage: MessageType = await SendMessage({ chatId: chat?.id, text: textContent, senderId: myId, receiverId: itsId,replyId:replyMessage.id>0?replyMessage.id:null });
    socket.emit("messagefrom", myId, itsId, newMessage.id);
    setIsReplyed(false);
    setReplyMessage({id:0,txt:""});
    (MyBroker.get("addmessage"))(newMessage);
  }
  return (
    <div className="all-send">

      {isReplyed ? <div className="reply-to">
        <ReplyIcon />
        <p>
          {replyMessage.txt}
        </p>
        <div className="close-reply-ico" >
          <s onClick={e => {
            setIsReplyed(false);
            setReplyMessage({id:0,txt:""})
          }}>
            <CloseIcon />
          </s>
        </div>
      </div> : <></>}
      <div className="send-part">

        <textarea
          className="form-control bg-blue-100 focus:bg-blue-300 text-input focus:outline-0 resize-none rounded-md w-full"
          placeholder="Enter text here..."
          id="text-input"
          name="message"
          value={txt}
          onChange={e => setText(e.target.value)}
          onKeyDown={async (e) => {
            if (e.key === "Enter" && !e.shiftKey && txt.length > 0) {
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
          onClick={async (e) => {
            await SendHandler();
          }}
        >
          Send
        </button>


      </div>
    </div>
  );
}
