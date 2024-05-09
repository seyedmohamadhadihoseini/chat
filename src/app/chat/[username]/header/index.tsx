import prefixOfProfiles from "@/services/prefixOfProfile";
import DifferentOfTwoTime from "@/services/timeDiff";
import Image from "next/image";
import Link from "next/link";

export default async function ChatHeader({ user }: { user: { name: string, id: number, lastDate: Date, profile: string } | null }) {
    return (
        <div className="chat-header">
            <Link href="/chat">
                <Image src="/app/left_arrow.png"
                    id="back-to-contacts" alt="back to contact list"

                    width={50} height={100} />
            </Link>
            <Link
                href="#"
                data-toggle="modal"
                data-target="#view_info"
            >
                <div className="contact-image">

                    <img
                        src={prefixOfProfiles()+user?.profile}
                        alt="avatar"
                        // fill={true}
                        className="profile rounded-full"
                    />
                </div>
            </Link>
            <div className="chat-about" >
                <h6 className="m-b-0">{user?.name}</h6>
                <small>Last seen:{DifferentOfTwoTime(user ? user.lastDate : new Date(), new Date())}</small>
            </div>

        </div>
    )
}