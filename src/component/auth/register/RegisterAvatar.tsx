import Image from "next/image";

export default function RegisterAvatar() {
    return (
        <div className="signup-image">
            <figure>
                <Image src="/register/images/signup-image.jpg"
                    alt="sing up image" width={300} height={400}
                />
            </figure>
            <a href="/login" className="signup-image-link">I am already member</a>
        </div>
    );
}