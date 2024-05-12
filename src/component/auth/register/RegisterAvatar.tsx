import Image from "next/image";
import Link from "next/link";

export default function RegisterAvatar() {
    return (
        <div className="signup-image">
            <figure>
                <Image src="/register/images/signup-image.jpg"
                    alt="sing up image" width={300} height={400}
                />
            </figure>
            <Link href="/login" className="signup-image-link">I am already member</Link>
        </div>
    );
}