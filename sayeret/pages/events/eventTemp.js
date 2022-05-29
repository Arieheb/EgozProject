import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable,  TextInput, View, link, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Profile from '../../assets/Images/profile.png';
import {auth, db} from '../../firebase';

const EventTamplate = (props) => {

    return (
        <ScrollView>
            <View>
                <Text style = {styles.headerText}>לוח אירועים</Text>

                <View name='main' style = {styles.eventFrame} >
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.dateTimeText}> {props.timeAndDate} </Text>
                        <Text style = {styles.dateTimeText}> 19:00</Text>

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע: {props.eventName} </Text>
                        <Text style = {styles.infoText}> מקום/כתובת: {props.location} </Text>
                        <Text style = {styles.infoText}>פרטים נוספים: {props.information} </Text>
                        <Text style = {styles.infoText}> איש קשר: {props.contact} </Text>

                    </View>
                    
                </View>

                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("addEvent")}>
                        <Text style= {styles.buttonText} >הוספת אירוע חדש</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>

        );

    




}

export default EventTamplate

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