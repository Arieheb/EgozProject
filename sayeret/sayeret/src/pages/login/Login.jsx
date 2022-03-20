import "./Login.css"

export function Login(){
    return (
        <div id="login">
            <input type = "text" plaeceholder="userNames"></input>
            <input type = "password" plaeceholder="passowrd"></input>
            <button id= "login-button">התחבר</button>
            <button id= "signup-button">הרשמה</button>
            <span class="psw">Forgot <a href="#">password?</a></span>
        </div>
    );
}