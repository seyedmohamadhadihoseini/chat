import "$public/register/fonts/material-icon/css/material-design-iconic-font.min.css";
import "$public/register/css/style.css";
import Avatar from "./Avatar";
import SocialLogin from "./SocialLogin";
import SignInForm from "./signin-form";
import { headers } from "next/headers";
import { Suspense } from "react";
export default function SignIn() {

    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content" style={{ marginTop: 1 + "%" }}>
                    <Suspense>
                        <Avatar />
                    </Suspense>

                    <div className="signin-form">
                        <h2 className="form-title">Sign in</h2>
                        <Suspense>
                            <SignInForm />
                        </Suspense>
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </section>
    );
}