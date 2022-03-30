
import "./Sign-up.css"

export function signUp(){
    return(
    <div id="sign-up">
        <input type="email" pattern=".+@+\." size="30" required></input>
        <input type = "text" plaeceholder="userNames">שם פרטי ומשפחה</input>
        <input type = "password" plaeceholder="passowrd">סיסמא</input>
        <input type="password" plaeceholder="passowrd">חזור על הסיסמא</input>
        <button id= "continue-button">המשך</button>
        <input type="text" />
    </div>
    );
}
