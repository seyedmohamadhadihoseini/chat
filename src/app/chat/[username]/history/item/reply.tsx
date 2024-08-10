import MessageType from "@/lib/message";
import Link from "next/link";

export default function Item_Reply({ replyMessage }: { replyMessage: null | MessageType }) {
  return <Link href={`#${replyMessage?.id}`}
    onClick={e => {
      const temp = document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor;
      document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = "rgba(50,50,200,0.2)";
      setTimeout(() => {
        document.getElementById(`${replyMessage?.id}`)!.style.backgroundColor = temp;
      }, 500);
    }}>{replyMessage?.text.substring(0, Math.min(replyMessage.text.length, 20))}...</Link>
}