import "./sign-up.css"
export function signUp(){
    return(
    <div id="sign-up">
        <input type = "text" plaeceholder="userNames">שם פרטי ומשפחה</input>
        <input type = "password" plaeceholder="passowrd">סיסמא</input>
        <input type="password" plaeceholder="passowrd">חזור על הסיסמא</input>
        <button id= "continue-button">המשך</button>
    </div>
    );
}