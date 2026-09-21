
import { Link } from "react-router-dom"
import "./login-signin.css"
export default function Login(){
    return(
        <div className="login-page">
        <div className="login-section">
            <div className="image">
                <img src="/assets/download (31).jfif"/>
            </div>
            <div className="login-table">
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password"/>
                    <button> Login</button>
                    <div className="forget-password">
                        <p>forget Password?</p>
                    </div>
                    <div className="notHave-account">
                        <p>Don't have account ?<span> <Link className="span" to={"/signin"}>signin</Link></span> </p>
                    </div>

                </form>
            </div>

        </div>
        </div>
    )

}