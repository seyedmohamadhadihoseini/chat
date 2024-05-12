"use client"
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Avatar() {
    const target = useSearchParams().get("target");
    return (
        <div className="signin-image">
            <figure>
                <Image src="/register/images/signin-image.jpg" alt="sing up image" width={300} height={400} />
            </figure>
            <Link href={"/register"+(target?`?target=${target}`:"")} className="signup-image-link">Create an account</Link>
        </div>
    );
}