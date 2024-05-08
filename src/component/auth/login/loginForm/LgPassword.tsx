
export default function LgPassword()
{
    return (
        <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="password" placeholder="Password" />
            <span className="focus-input100" data-placeholder="&#xf191;"></span>
        </div>
    );
}