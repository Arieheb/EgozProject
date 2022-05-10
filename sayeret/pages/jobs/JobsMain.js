import React, {useState} from 'react';
import {Text,Button, View, StyleSheet,FlatList} from 'react-native';
import JobCard from './JobCard';

const JobsMain = props=>{
    const [jobsList, updateJobsList] = useState([
        {id:0,title:"מתכנת/ת dot.net",location:"פתח תקווה",description:"דרוש/ה מתכנת/ת לחברה תעשייתית בתחום האלקטרוניקה בפתח תקווה, כפיפות ישירה למנהל IT, משרה מלאה ללא ימי שישי, תנאים מעולים למתאימים/ות."},
        {id:1,title:"מתכנת/ת ++C",location:"נתניה",description:"לצוות פיתוח איכותי המפתח פתרונות עבור חברת אנרגיה קמעונאית באזור השרון דרוש /ה מתכנת /ת בעל /ת ניסיון."},
        {id:2,title:"מתכנת/ת Fullstack",location:"ירושלים",description:"לנעה מערכות בעמ דרושים /ות מתכנתים /ות Fullstack ו- Backend. דרוש /ה CTO שייכנס / תכנס כ- Founder ודרושים מתכנתים /ות Fullstack ו- Backend."},
        {id:3,title:"מנהל אורחן",location:"קרית מוצקין",description:"לאורחן משיח דרוש מנהל, זמר ופרזנטור ששיאו מאחוריו, ויעשה הכל כדי להיות בטופ. דרישות תפקיד: שחצן, וולגרי ובעל ביטחון עצמי מופרז."}
    ]);

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        <View style={styles.container}>
                <FlatList   
                    style={{width:"100%"}}
                    contentContainerStyle={{alignItems:"center"}}
                    data={jobsList}
                    renderItem={({item}) => {
                        return <JobCard title={item.title} location={item.location} description={item.description}/>
                    }}
                />  
                <View style={{minHeight:80}}>
             <Button title='הוסף משרה חדשה' onPress={goToAddJob}></Button>
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center"
},
titleText:{
    fontSize:22,

}
})

export default JobsMain
