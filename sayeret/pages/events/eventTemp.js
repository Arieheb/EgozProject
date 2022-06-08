import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable,  TextInput, View, link, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Profile from '../../assets/Images/profile.png';
import {auth, db} from '../../firebase';

const EventTemplate = (props) => {

    return (
        <ScrollView>
            <View>
                
                <View name='main' style = {styles.eventFrame} >
                    <View name = 'date and time' style = {styles.dateTimeFrame}>
                        <Text style = {styles.timeText}>{props.eventTime} </Text>
                        <Text style = {styles.dateText}>{props.eventDate}</Text>

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם האירוע: {props.eventName} </Text>
                        <Text style = {styles.infoText}> מקום/כתובת: {props.eventLocation} </Text>
                        <Text style = {styles.infoText}>פרטים נוספים: {props.eventInformation} </Text>
                        <Text style = {styles.infoText}> איש קשר: {props.eventContact} </Text>

                    </View>
                    
                </View>
            </View>
        </ScrollView>

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
        // borderWidth: 1.5,
        // borderRadius: 40

        // borderwidth: '2'
        
     
    },
    timeText: {
        textAlign: 'center',
        paddingTop: '18%',
        margin: '13%',
        justifyContent: "center",
        alignItems: "center",
        // fontWeight: 'bold',
        fontSize: 18,
    },

    dateText: {
        textAlign: 'center',
        // margin: '13%',
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18,

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