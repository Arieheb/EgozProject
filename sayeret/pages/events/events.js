import React, { useState, useEffect } from 'react';
import {FlatList, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';
import { collection, onSnapshot, query, QuerySnapshot,orderBy } from 'firebase/firestore';
import {auth, db} from '../../firebase';
import EventTemplate from './EventTemp';


const EventCal = (props) => {

    const [eventInfo , setEventInfo ] = useState([]);
    useEffect (()=> {

        const eventCollection = collection (db, 'events')
        const que = query(eventCollection, orderBy ('timeAndDate', 'asc'));
  
        const unsubscribe = onSnapshot (que, QuerySnapshot => {
            console.log(QuerySnapshot.size)
            setEventInfo (
              QuerySnapshot.docs.map(doc => {
                  
                console.log("having items")
                return({
                eventName: doc.data().eventName,
                timeAndDate: doc.data().timeAndDate,
                location: doc.data().location,
                information: doc.data().information,
                contact: doc.data().contact
              })})
            );
      });
      return () => unsubscribe();
    },[]);

    console.log(eventInfo);
    return (


       <View style = {styles.container}>
           <Text style = {styles.headerText}>לוח אירועים</Text>

        <FlatList data = {eventInfo}
            keyExtractor = {item => item.eventName}
            renderItem = {(data) => <EventTemplate eventName = {data.item.eventName} timeAndDate = {data.item.timeAndDate} location = {data.item.location} information = {data.item.information} contact = {data.item.contact}></EventTemplate>}
            // numColumns = {3}
>
         </FlatList>
        <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("addEvent")}>
                        <Text style= {styles.buttonText} >הוספת אירוע חדש</Text>
                    </TouchableOpacity>

         </View>

    );
        }

export default EventCal


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
    }, 
    

    dateTimeFrame: {
        flexDirection: 'column' ,
        width: '28%',
        height:'100%',
        
     
    },
    dateTimeText: {
        textAlign: 'center',
        margin: '13%',
        justifyContent: "center",
      alignItems: "center",
    //   marginTop: 5,
    //   padding: 5,
        

    },
    
    infoFrame: {
        flex: 1,
        flexDirection: 'column',

        width: '72%'


        
    },
     infoText: {
        textAlign: 'left',
        fontSize: 15,
        margin: 2

     },

   
     buttons: {
        borderRadius: 100,
        margin:30,
        borderWidth:1,
        height: 100,
        width: 100,
    },

    buttonText: {
        textAlign: 'center',
        paddingTop: '40%',
        fontSize: 15
        
    }




});