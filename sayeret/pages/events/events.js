import React, { useState, useEffect } from 'react';
import {FlatList, View,SafeAreaView,TouchableOpacity, Text, StyleSheet} from 'react-native';
import { collection, onSnapshot, query,orderBy } from 'firebase/firestore';
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
                    id: doc.id,
                    eventName: doc.data().eventName,
                    eventLocation: doc.data().eventLocation,
                    eventInformation: doc.data().eventInformation,
                    eventContact: doc.data().eventContact,
                    eventTime: doc.data().eventTime,
                    eventDate: doc.data().eventDate
              })})
            );
      });
      return () => unsubscribe();
    },[]);

    return (
        <SafeAreaView style = {styles.container}>
                    
                    {/* <Text style = {styles.headerText}>לוח אירועים</Text> */}

                <FlatList data = {eventInfo}
                    keyExtractor = {item => item.id}
                    renderItem={({item}) => {
                    return <EventTemplate id = {item.id} eventName = {item.eventName} eventTime = {item.eventTime} eventDate = {item.eventDate} eventLocation = {item.eventLocation} eventInformation = {item.eventInformation} eventContact = {item.eventContact}/>}}
                    />
                <View style={{height: '30%', alignItems:'center',justifyContent:'center',alignContent:'center'}}>
                    <TouchableOpacity style = {styles.plusButton} onPress={()=>props.navigation.navigate('addEvent')}>
                        <Icon name ="plus"  color="white"  size={45}/>   
                    </TouchableOpacity>
            </View>
           </SafeAreaView>
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
        width: 60,
        height: 60,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        // marginTop: '-10%',
        marginBottom: '55%',
        borderColor: "white",
        borderWidth: 0.5,
        alignItems:'center',
        justifyContent:'center',
    },




});
