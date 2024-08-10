import MessageType from "@/lib/message";
import { useEffect, useLayoutEffect, useState } from "react";
import Interaction from "./Interaction";
import getNewMessage from "../update";
import Link from "next/link";
import Item_Reply from "./reply";
import MessageCategory from "@/lib/message/category";
import Item_Text from "./category/text";
import Item_Voice from "./category/voice";


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
    let displayShow;
    if (message.category === MessageCategory.text) {
        displayShow = <Item_Text date={currentDate} messageText={message.text} />
    }
    else if (message.category === MessageCategory.voice && message.voice) {
        displayShow = <Item_Voice src={message.voice} />
    }
    return <li className="message-li" id={`${message.id}`} >
        <div
         className={isMine ? "bg-slate-500" : "float-end bg-orange-500"} 
        //  style={{width:"30%"}}
         onClick={e=>{
            alert("clicked");
            handleClick(e);
         }}
         >
        {(replyMessage?.id && (!replyMessage.isRemoved)) ? <Item_Reply replyMessage={replyMessage} /> : ""}
            {displayShow}
        </div>

        <Interaction handleClose={handleClose} anchorEl={anchorEl} message={message} />
    </li>
}