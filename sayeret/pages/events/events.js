import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';


const EventCal = props => {
    // const [value, onChange] = useState(new Date());
    // <Text>hello</Text>
    return (
        <ScrollView>
            <View>
                <Text style = {styles.headerText}>לוח האירועים</Text>

                <View name='main' style = {styles.eventFrame} >

                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע: האחד באפריל</Text>
                        <Text style = {styles.infoText}> מקום/כתובת: כל הארץ </Text>
                        <Text style = {styles.infoText}>פרטים נוספים: חגיגות יום האחד באפריל מתחילות!! מסיבות והפקות ענק </Text>
                        <Text style = {styles.infoText}> איש קשר: אריה ברלין - 05855392574 </Text>

                    </View>
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.dateTimeText}> 01/04/2022</Text>
                        <Text style = {styles.dateTimeText}> 19:00</Text>

                    </View> 
                </View>
                    
                
                <View name='main' style = {styles.eventFrame} >

                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע: יום זיכרון לאבי יחיאל</Text>
                        <Text style = {styles.infoText}> מקום/כתובת: כרמיאל</Text>
                        <Text style = {styles.infoText}> פרטים נוספים: יום זיכרון לאבי יחיאל שנפל במלחמת יום העצמאות, המשפחה מארחת לעלייה לקבר וארוחת הודיה
                        לאחר מכן. כולם מוזמנים להצטרף. כתובת מדויקת תינתן באופן פרטי</Text>
                        <Text style = {styles.infoText}> איש קשר: סימה יחיאל</Text>

                    </View>
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.dateTimeText}> 25/04/2022</Text>
                        <Text style = {styles.dateTimeText}> 17:00</Text>

                    </View> 
                </View>

                <View name='main' style = {styles.eventFrame} >

                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע:</Text>
                        <Text style = {styles.infoText}> מקום/כתובת: </Text>
                        <Text style = {styles.infoText}> פרטים נוספים: </Text>
                        <Text style = {styles.infoText}> איש קשר: </Text>

                    </View>
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.dateTimeText}> תאריך</Text>
                        <Text style = {styles.dateTimeText}> שעה</Text>

                    </View> 
                </View>

                <View name='main' style = {styles.eventFrame} >

                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע:</Text>
                        <Text style = {styles.infoText}> מקום/כתובת: </Text>
                        <Text style = {styles.infoText}> פרטים נוספים: </Text>
                        <Text style = {styles.infoText}> איש קשר: </Text>

                    </View>
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.dateTimeText}> תאריך</Text>
                        <Text style = {styles.dateTimeText}> שעה</Text>

                    </View> 
                </View>
                
                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate('הוספת אירוע')}>
                        <Text style= {styles.buttonText} >הוספת אירוע חדש</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

export default EventCal


const styles = StyleSheet.create ({ 
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        margin: 5

    },
    eventFrame: {
        borderRadius:4,
        borderWidth: 2,
        borderColor: 'red',
        flexDirection: 'row', 
        margin: 5, 
        padding: 5
    }, 
    

    dateTimeFrame: {
        flexDirection: 'column' ,
        width: '28%',
        height:'100%'
     
    },
    dateTimeText: {
        textAlign: 'center',
        margin: '13%',
        

    },
    
    infoFrame: {
        flex: 1,
        flexDirection: 'column',
        // borderWidth: 1,
        // borderColor: 'blue',
        width: '72%'


        
    },
     infoText: {
        textAlign: 'right',
        fontSize: 15,
        margin: 2

     },

   
     buttons: {
        borderRadius: 100,
        margin:30,
        borderWidth:1,
        alignSelf:'stretch',
        height: 100,
        width: 100,
        alignItems: 'center',
        position: 'relative'
    },

    buttonText: {
        textAlign: 'center',
        paddingTop: '35%',
        fontSize: 15
        
    }




});