import { User } from "@/lib/user";
import prefixOfProfiles from "@/services/prefixOfProfile";
import DifferentOfTwoTime from "@/services/timeDiff";
import Image from "next/image";
import Link from "next/link";

export default function ContactDisplay({
  contact,
  isActive,
}: {
  contact: User | null;
  isActive: boolean;
}) {
  const isAct: string = isActive ? "active" : "";

  
  return (
    <Link href={`/chat/${contact?.username}`}>
      <li className={`contact-li ${isAct}`}>
        <div className="contact-image">
          <Image
            src={`/users/img/${contact?.profile}`}
            alt="avatar"
            id="contact-avatar"
            fill={true}
            className="profile rounded-full"
          />
        </div>
        <div className="about">
          <div className="name">{contact?.name}</div>
          <div className="status">
            <i className="fa fa-circle offline"></i>{`${DifferentOfTwoTime(new Date(contact?.lastDate || ""), new Date())}`}
          </div>
        </div>
      </li>
    </Link>
  );
}
