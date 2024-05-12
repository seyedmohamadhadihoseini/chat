import "$public/register/fonts/material-icon/css/material-design-iconic-font.min.css";
import "$public/register/css/style.css";
import RegisterAvatar from "./RegisterAvatar";
import RegisterForm from "./register-from";
import { Suspense } from "react";
export default function Register()
{
    return (
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <Suspense>
                            
                        <RegisterForm/>
                        </Suspense>
                    </div>
                    <RegisterAvatar/>
                </div>
            </div>
        </section>
    );
}