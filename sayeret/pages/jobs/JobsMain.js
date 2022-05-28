import React, {useState} from 'react';
import {Text,Button, View, StyleSheet,FlatList} from 'react-native';
import { Linking } from 'react-native';
import JobCard from './JobCard';

const JobsMain = props=>{
    const [jobsList, updateJobsList] = useState([
        {id:0,title:"מתכנת/ת dot.net",location:"פתח תקווה", contactName: "לירון", contactPhone:"0509397547", contactEmail:"lirona@eltek.com", description:"דרוש/ה מתכנת/ת לחברה תעשייתית בתחום האלקטרוניקה בפתח תקווה, כפיפות ישירה למנהל IT, משרה מלאה ללא ימי שישי, תנאים מעולים למתאימים/ות."},
        {id:1,title:"מתכנת/ת ++C",location:"נתניה",contactName: "תומר", contactPhone:"0545782209", contactEmail:"tomerco@amdocs.com", description:"לצוות פיתוח איכותי המפתח פתרונות עבור חברת אנרגיה קמעונאית באזור השרון דרוש /ה מתכנת /ת בעל /ת ניסיון."},
        {id:2,title:"מתכנת/ת Fullstack",location:"ירושלים",contactName: "אפרת", contactPhone:"0505488023", contactEmail:"efrata@lightricks.com", description:"לנעה מערכות בעמ דרושים /ות מתכנתים /ות Fullstack ו- Backend. דרוש /ה CTO שייכנס / תכנס כ- Founder ודרושים מתכנתים /ות Fullstack ו- Backend."},
        {id:3,title:"מנהל אורחן",location:"קרית מוצקין",contactName: "משיח", contactPhone:"0509321083", contactEmail:"lamalo@orhanmashiah.com", description:"לאורחן משיח דרוש מנהל, זמר ופרזנטור ששיאו מאחוריו, ויעשה הכל כדי להיות בטופ. דרישות תפקיד: שחצן, וולגרי ובעל ביטחון עצמי מופרז."}
    ]);

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        <View style={styles.container}>
            <View style={styles.jobGroups}>
                <Text style={styles.jobGroupsTitle}>קבוצות ה-WhatsApp שלנו</Text>
                <View style={styles.jobGroupsLinks}>
                <Button style={styles.jobGroupsLink} title='הייטק' onPress={() => Linking.openURL("https://chat.whatsapp.com/Jyd1Rw8XaHcIaJ2I8j5OCL")}></Button>
                <Button style={styles.jobGroupsLink} title='כללי' onPress={() => Linking.openURL("https://chat.whatsapp.com/I6oOrQn0BfT3mGFaUig2Oc")}></Button>
                </View>
            </View>
                <FlatList   
                    style={{width:"100%"}}
                    contentContainerStyle={{alignItems:"center"}}
                    data={jobsList}
                    renderItem={({item}) => {
                        return <JobCard title={item.title} location={item.location} contactName={item.contactName} contactPhone={item.contactPhone} contactEmail={item.contactEmail} description={item.description}/>
                    }}
                />  
                <View style={{minHeight:80}}>
             <Button title='הוסף משרה חדשה' onPress={goToAddJob}></Button>
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
jobGroups:{
    width:"98%",
    minWidth:"98%",
    height:100,
    padding:5,
    marginVertical:10,
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"#35DB4E",
    borderColor:"gray",
    alignContent:"center"
},
jobGroupsTitle:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    paddingBottom:3
},
jobGroupsLinks:{
    // backgroundColor:"brown"
    // TODO  *** Continue fron here ***
},
jobGroupsLink:{
    color:"#35DB4E",
    fontWeight:"bold",
    fontSize:14,

},
    container:{
    flex:1,
    alignItems:"center"
},
titleText:{
    fontSize:22,
}
})

export default JobsMain
