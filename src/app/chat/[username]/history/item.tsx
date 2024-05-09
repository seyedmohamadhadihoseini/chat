import MessageType from "@/lib/message";
import DifferentOfTwoTime from "@/services/timeDiff";
import { useEffect, useLayoutEffect, useState } from "react";


export default function HistoryItem({ message, isMine }: { message: MessageType, isMine: boolean }) {

    let messageDate = DifferentOfTwoTime(message.createdDate, new Date());
    const currentDate = message.createdDate;
    return <li className="message-li">
        <p className={isMine ? "bg-slate-500" : "float-end bg-orange-500"}>
            {message.text}
            <sub>{`       ${currentDate.getHours()}:${currentDate.getMinutes()}`}</sub>
        </p>
    </li>
}