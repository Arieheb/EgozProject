
import "./Sign-up.css"

export function signUp(){
    return(
    <div id="Sign-up">
        <input type = "Text" plaeceholder="UserNames">שם פרטי ומשפחה</input>
        <input type = "Password" plaeceholder="Passowrd">סיסמא</input>
        <input type="Password" plaeceholder="Passowrd">חזור על הסיסמא</input>
        <button id= "Continue-button">המשך</button>
        <input type="Text" />
    </div>
    );
}
