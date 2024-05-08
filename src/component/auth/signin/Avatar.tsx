import Image from "next/image";

export default function Avatar() {
    return (
        <div className="signin-image">
            <figure>
                <Image src="/register/images/signin-image.jpg" alt="sing up image" width={300} height={400} />
            </figure>
            <a href="/register" className="signup-image-link">Create an account</a>
        </div>
    );
}