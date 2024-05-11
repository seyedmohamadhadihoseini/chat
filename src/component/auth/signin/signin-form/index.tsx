"use client";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import CheckLogin from "../server/loginCheck";
import { Bounce, toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function SignInForm() {
    const [errorMessage, formAction] = useFormState(CheckLogin, { message: "", id: 0 });
    useEffect(() => {

        if (errorMessage?.message != "") {
            toast(errorMessage?.message);
        }
        
    }, [errorMessage]);
    return (
        <form  action={formAction} className="register-form" id="login-form">
            <div className="form-group">
                <label htmlFor="username"><i className="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="username" id="username" placeholder="username" />
            </div>
            <div className="form-group">
                <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
                <input type="password" name="password" id="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
            </div>
            <div className="form-group form-button">
                <button type="submit" name="signin" id="signin" className="form-submit">Log in</button>
            </div>
            <ToastContainer position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce} />
        </form>
    );
}