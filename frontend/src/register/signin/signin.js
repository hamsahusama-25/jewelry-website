import { Link } from "react-router-dom"
import "./signin.css"
export default function Signin(){
    return(
        <div className="signin-page">
        <div className="signin-section">
            <div className="image">
                <img src="/assets/download (21).jfif"/>
            </div>
            <div className="signin-table">
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="Confirm password"/>
                    <button> signin</button>
                    <div className="forget-password">
                    </div>
                    <div className="notHave-account">
                        <p>I already have an account <span><Link className="span" to={"/login"}>Login</Link></span> </p>
                    </div>

                </form>
            </div>

        </div>
        </div>
    )

}