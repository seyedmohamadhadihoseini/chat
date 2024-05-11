
import { User } from '@/lib/user';
import prefixOfProfiles from '@/services/prefixOfProfile';
import Image from 'next/image';
import Link from 'next/link';
export default function ContactItem({ user }: { user: User | null }) {
    let profile = user?.profile;
    if (!profile) {
        profile = "avatar2.png";
    }
    console.log(`${prefixOfProfiles()}?name=${user?.profile}`);
    return <li >
        <Link className="original-contact-item" href={`/chat/${user?.username}`}>
            <div className="contact-image">
                <Image  src={`${prefixOfProfiles()}?name=${user?.profile}`} fill={true} alt={`${user?.name}`} className='avatar rounded-full' />
            </div>
            <div className='about'>
                <h1>{user?.name}</h1>
                <p>{user?.username}</p>
            </div>
        </Link>
    </li>
}