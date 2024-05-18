import MessageType from "@/lib/message";
import Link from "next/link";

export default function Item_Reply({replyMessage,isMine}:{replyMessage:null | MessageType,isMine:boolean}){
    

    return  <Link href={`#${replyMessage?.id}`} 
    className={`reply-link ${isMine?"":"float-end"}` }
    onClick={e=>{
      const temp = document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor;
      document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = "rgba(50,50,200,0.2)";
      setTimeout(() => {
        document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = temp;
      }, 500);
    }}>{replyMessage?.text.substring(0,Math.min(replyMessage.text.length,20))}...</Link>
}