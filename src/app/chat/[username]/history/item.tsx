import MessageType from "@/lib/message";
import { useEffect, useLayoutEffect, useState } from "react";
import Interaction from "./Interaction";
import getNewMessage from "./update";
import Link from "next/link";


export default function HistoryItem({ message, isMine }: { message: MessageType, isMine: boolean }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [replyMessage, setReplyMessage] = useState<null | MessageType>(null);
  useLayoutEffect(() => {
    if (message.replayId)
      getNewMessage(message.replayId).then(result => {
        setReplyMessage(result);
      })
  }, [])
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const currentDate = message.createdDate;
  return <li className="message-li" id={`${message.id}`}>
    {(replyMessage?.id && (!replyMessage.isRemoved)) ?<Link href={`#${replyMessage?.id}`} 
    className={`reply-link ${isMine?"":"float-end"}` }
    onClick={e=>{
      const temp = document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor;
      document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = "rgba(50,50,200,0.2)";
      setTimeout(() => {
        document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = temp;
      }, 500);
    }}>{replyMessage?.text.substring(0,Math.min(replyMessage.text.length,20))}...</Link>:""}
    <p className={isMine ? "bg-slate-500" : "float-end bg-orange-500"}
      onClick={handleClick}
    >
      {message.text}
      <sub>{`       ${currentDate.getHours()}:${currentDate.getMinutes()}`}</sub>
    </p>
    <Interaction handleClose={handleClose} anchorEl={anchorEl} message={message} />
  </li>
}