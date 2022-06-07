import React, { useState, useEffect } from 'react';
import {FlatList, View,TouchableOpacity, Text, StyleSheet, setVision } from 'react-native';
import { collection, onSnapshot, query, QuerySnapshot,orderBy } from 'firebase/firestore';
import {db} from '../../firebase';
import EventTemplate from './eventTemp';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const EventCal = (props) => {

    const [eventInfo , setEventInfo ] = useState([]);
    useEffect (()=> {

        const eventCollection = collection (db, 'events')
        const que = query(eventCollection, orderBy ('eventDate', 'asc'));
  
        const unsubscribe = onSnapshot (que, QuerySnapshot => {
            setEventInfo (
              QuerySnapshot.docs.map(doc => {
                return({
                eventName: doc.data().eventName,
                location: doc.data().location,
                information: doc.data().information,
                contact: doc.data().contact,
                time: doc.data().time,
                eventDate: doc.data().eventDate
              })})
            );
      });
      return () => unsubscribe();
    },[]);

    return (


       <View style = {styles.container}>
           <Text style = {styles.headerText}>לוח אירועים</Text>

        <FlatList data = {eventInfo}
            keyExtractor = {item => item.eventName}
            renderItem = {(data) => <EventTemplate eventName = {data.item.eventName} time = {data.item.time} eventDate = {data.item.eventDate} location = {data.item.location} information = {data.item.information} contact = {data.item.contact}></EventTemplate>}
>
        </FlatList>
        <TouchableOpacity style = {styles.plusButton} onPress={()=>props.navigation.navigate('addEvent')}>
            <Icon name ="plus"  color="white"  size={70}/>   
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
        borderWidth: 1,
        borderColor: "black"       
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
        
    },
    plusButton: {
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 8,
        borderColor: "white",
        borderWidth: 0.5,
    },




});
