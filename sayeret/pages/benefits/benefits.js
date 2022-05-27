import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
//import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';
import masa from "../../assets/Images/unit-hero.jpg";
import event from "../../assets/Images/eventsImage.jpeg";
import memorial from "../../assets/Images/izkor.jpg";





const EventCal = props => {
    // const [value, onChange] = useState(new Date());
    // <Text>hello</Text>
    return (
        <ScrollView style = {styles.scrollView}>
            <View style = {styles.benefitsView}>
                <Text style = {styles.title}>הטבות</Text>

                <View name='main' style = {styles.benefitFrame} >
                    <View name = 'date' style = {styles.picFrame}>
                    <Image source={event} style = {styles.benefitsPic}>
                        </Image>
                        

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                    
                </View>
                <View name='main1' style = {styles.benefitFrame} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    <Image source={masa} style = {styles.benefitsPic}>
                        </Image>
                        

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                    
                </View>
                <View name='main1' style = {styles.benefitFrame} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    <Image source={memorial} style = {styles.benefitsPic}>
                        </Image>
                        

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                    
                </View>
                


            </View>
                    {/* <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("addEvent")}>
                        <Text style= {styles.buttonText} >הוספת אירוע חדש</Text>
                    </TouchableOpacity> */}
        </ScrollView>

    );
}

export default EventCal


const styles = StyleSheet.create ({ 
    scrollView: {
        height: '100%',
    },
    benefitsPic: {
        width: '100%',
        height:'100%',
        borderRadius: 50,
        marginBottom: 30
    },
    benefitsView: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontWeight: "bold",
        fontSize: 40, 
        textAlign: 'center',
        marginVertical: 10,
        color:"black",

    },
    benefitFrame: {
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
    picFrame: {
        flexDirection: 'column' ,
        width: '60%',
        height:'50%',
    },
    infoFrame: {
        flex: 1,
        flexDirection: 'column',
        width: '72%',
        height: '100%'
    },
     infoText: {
        textAlign: 'left',
        fontSize: 30,
        margin: 2,
        fontWeight: "bold",
     },
     buttons: {
        borderRadius: 100,
        // margin:30,
        borderWidth:1,
        height: 100,
        width: 100,
    },

    buttonText: {
        textAlign: 'center',
        // paddingTop: '40%',
        fontSize: 15
        
    },
});