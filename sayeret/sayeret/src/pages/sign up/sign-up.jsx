import "./Sign-up.css"
import React, {Component} from 'react';
import MonthYearPocker from 'react-month-year-picker';
export function signUp(){
    return(
    <div id="sign-up">
        <input type = "text" plaeceholder="userNames">שם פרטי ומשפחה</input>
        <input type = "password" plaeceholder="passowrd">סיסמא</input>
        <input type="password" plaeceholder="passowrd">חזור על הסיסמא</input>
        <button id= "continue-button">המשך</button>
        <input type="text" />
    </div>
    );
}
