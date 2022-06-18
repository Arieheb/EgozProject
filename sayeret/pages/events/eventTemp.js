import React from 'react';
import { View,  Text, StyleSheet , ScrollView, TouchableOpacity, Alert} from 'react-native';
import {db} from '../../firebase';
import {deleteDoc, doc } from 'firebase/firestore';


const EventTemplate = (props) => {
    const del = async(id)=>{
        Alert.alert(
            "למחוק?",
            "האם אתה בטוח שאתה רוצה למחוק את האירוע הזה?",
            [
              {
                text: "בטל",
                onPress: () => {return},
              },
              {
                text: "מחק",
                onPress: async () => {
                    await deleteDoc(doc(db, "events",id));
                },
            },
        ],
        );
      }
    //   console.log(props.eventDate.seconds)
      const date = new Date(props.eventDate.toDate())
    return (
            <View>
                <TouchableOpacity activeOpacity={0.9} onLongPress={()=>del(props.id)}>
                    <ScrollView>
                        <View name='main' style = {styles.eventFrame} >
                            <View name = 'date and time' style = {styles.dateTimeFrame}>
                                <Text style = {styles.timeText}>{props.eventTime} </Text>
                                <Text style = {styles.dateText}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>

                            </View> 
                            <View name= 'information' style = {styles.infoFrame}>
                                <Text style = {styles.infoText}> שם האירוע: {props.eventName} </Text>
                                <Text style = {styles.infoText}> מקום/כתובת: {props.eventLocation} </Text>
                                <Text style = {styles.infoText}>פרטים נוספים: {props.eventInformation} </Text>
                                <Text style = {styles.infoText}> איש קשר: {props.eventContact} </Text>

                            </View>
                            
                        </View>
                        </ScrollView>    
                </TouchableOpacity>
            </View>

        );
}


export default EventTemplate

const styles = StyleSheet.create ({ 
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        margin: 5,
    },
    eventFrame: {
        borderRadius:4,
        flexDirection: 'row', 
        margin: 5, 
        padding: 5,
        backgroundColor: "white",
        borderRadius: 20,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,  
        borderColor: "black",
        borderWidth: 1      
    }, 
    

    dateTimeFrame: {
        flexDirection: 'column' ,
        width: '28%',
        height:'100%',
        
    },
    timeText: {
        textAlign: 'center',
        paddingTop: '18%',
        // margin: '13%',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
    },

    dateText: {
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,
        paddingTop: 10

    },
    
    infoFrame: {
        flex: 1,
        flexDirection: 'column',
        width: '72%'


        
    },
     infoText: {
        textAlign: 'left',
        fontSize: 15,
        margin: 2,

     },    

    buttonText: {
        textAlign: 'center',
        paddingTop: '40%',
        fontSize: 15
        
    }




});