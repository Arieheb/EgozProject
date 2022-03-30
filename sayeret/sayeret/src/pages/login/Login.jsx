import "./Login.css"

export function Login(){
    return (
        <div id="Login">
            <input type = "Text" plaeceholder="Email"></input>
            <input type = "Password" plaeceholder="Passowrd"></input>
            <button id= "Login-button">התחבר</button>
            <button id= "Signup-button">הרשמה</button>
            <span class="psw"> שכחת <a href="#">סיסמא?</a></span>
        </div>
    );
}