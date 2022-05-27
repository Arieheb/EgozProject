import React, { useState, useEffect } from 'react';
import { Modal, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
//import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';
import masa from "../../assets/Images/unit-hero.jpg";
import event from "../../assets/Images/eventsImage.jpeg";
import memorial from "../../assets/Images/izkor.jpg";
import Gift from './Modalbenefits';





const Benefits = () => {
         const [value, onChange] = useState(new Date());
         useEffect (()=>{
            //const MemoryCollection = collection (db, 'Benefits')
         })
    return (
        <ScrollView >
            <View>
                <Text style = {styles.title}>הטבות</Text>

                <View name='main' style = {styles.benefit} >
                    <View name = 'date' style = {styles.picFrame}>
                    <Image source={event}style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                </View>
                <View name='main1' style = {styles.benefit} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    {/* <Image source={memorial} style = {styles.benefitsPic}> </Image> */}
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                </View>
                <View name='main1' style = {styles.benefit} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    {/* <Image source={memorial} style = {styles.benefitsPic}> </Image> */}
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                </View>
                <View name='main1' style = {styles.benefit} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    {/* <Image source={memorial} style = {styles.benefitsPic}> </Image> */}
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                </View>
                <View name='main1' style = {styles.benefit} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    {/* <Image source={memorial} style = {styles.benefitsPic}> </Image> */}
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

export default Benefits


const styles = StyleSheet.create ({ 
    title: {
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        fontSize: 30,
    },
    benefit: {
        backgroundColor: "white",
        borderRadius: 25,
        margin: 5,
        padding: 5,
        height: 200,
        flexDirection: "row",
    },
    picFrame: {
        width: '50%',
        alignItems: "center",
        padding: 5,
    },
    infoFrame: {
        width: '50%',
    },
    benefitsPic: {
        width: 180,
        height: 180,
        borderRadius: 20

    }
});