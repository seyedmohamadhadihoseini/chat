
import "$public/login_v3/vendor/bootstrap/css/bootstrap.min.css";
import "$public/Login_v3/fonts/iconic/css/material-design-iconic-font.min.css";
import "$public/Login_v3/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "$public/login_v3/vendor/animate/animate.css";
import "$public/login_v3/vendor/css-hamburgers/hamburgers.min.css";
import "$public/login_v3/vendor/animsition/css/animsition.min.css";
import "$public/login_v3/vendor/select2/select2.min.css";
import "$public/login_v3/vendor/daterangepicker/daterangepicker.css";
import "$public/login_v3/css/util.css";
import "$public/login_v3/css/main.css";
import LoginForm from "./loginForm/LoginForm";

export default function Login() {


    return (
        <div id="login">
            <div className="limiter">
                <div className="container-login100" style={{ backgroundImage: "url('/login_v3/images/bg-01.jpg')" }}>
                    <div className="wrap-login100">
                        <LoginForm />
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
        </div>

    )
}