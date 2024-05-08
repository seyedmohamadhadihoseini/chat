export function RgName() {
    return (
        <div className="form-group">
            <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
            <input type="text" name="name" id="name" placeholder="Your Name" />
        </div>
    );
}


export function RgUsername() {
    return (
        <div className="form-group">
            <label htmlFor="username"><i className="zmdi zmdi-email"></i></label>
            <input type="text" name="username" pattern="[a-zA-Z0-9-]+" id="username" placeholder="Your Username" />
        </div>
    );
}
export function RgPassword() {
    return (
        <div className="form-group">
            <label htmlFor="password"><i className="zmdi zmdi-lock"></i></label>
            <input type="password" name="password" id="password" placeholder="Password" />
        </div>
    );
}

export function RgConfirmPassword() {
    return (
        <div className="form-group">
            <label htmlFor="re-password"><i className="zmdi zmdi-lock-outline"></i></label>
            <input type="password" name="re-password" id="re-password" placeholder="Repeat your password" />
        </div>
    );
}
export function RgAgreeterm() {
    return (
        <div className="form-group">
            <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
            <label htmlFor="agree-term" className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
        </div>
    );
}
export function RgSubmitButton() {

    return (
        <div className="form-group form-button">
            <button type="submit" name="signup"
                id="signup" className="form-submit">Register</button>
        </div>
    );
}
export function RgProgile() {
    return (
        <div className="form-group flex items-center space-x-6">
            {/* <div className="shrink-0">
                <Image  alt="profile image" src="/users/img/avatar1.png"  className="h-16 w-16 object-cover rounded-full" fill={true} />
            </div> */}
            <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input type="file" name="profile" id="profile"
                accept="image/png, image/gif, image/jpeg"
                 className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
            </label>
        </div>
    );
}