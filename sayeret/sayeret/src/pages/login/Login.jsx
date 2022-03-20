import "./Login.css"

export function Login(){
    return (
        <div id="login">
            <input type = "text" plaeceholder="userNames"></input>
            <input type = "password" plaeceholder="passowrd"></input>
            <button id= "login-button">התחבר</button>
            <button id= "signup-button">הרשמה</button>
            <span class="psw"> שכחת <a href="#">סיסמא?</a></span>
        </div>
    );
}