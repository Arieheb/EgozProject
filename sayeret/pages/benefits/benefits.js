// import React, { useState, useEffect } from 'react';
// import { Image,TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import *as ImagePicker from 'expo-image-picker';


// const Benefits = (props) => {
//     return (
//         <Text>hello gfhgfhgfhgf</Text>
//     );
// }
// export default Benefits 
import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
//import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';
import masa from "../../assets/Images/unit-hero.jpg";
import event from "../../assets/Images/eventsImage.jpeg";





const EventCal = props => {
    // const [value, onChange] = useState(new Date());
    // <Text>hello</Text>
    return (
        <ScrollView>
            <View style = {styles.benefitsView}>
                <Text style = {styles.headerText}>הטבות</Text>

                <View name='main' style = {styles.eventFrame} >
                    <View name = 'date' style = {styles.picFrame}>
                    <Image source={event} style = {styles.benefitsPic}>
                        </Image>
                        

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                    
                </View>
                <View name='main1' style = {styles.eventFrame} >
                    <View name = 'date and time' style = {styles.picFrame}>
                    <Image source={event} style = {styles.benefitsPic}>
                        </Image>
                        

                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                    </View>
                    
                </View>


            </View>
                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("addEvent")}>
                        <Text style= {styles.buttonText} >הוספת אירוע חדש</Text>
                    </TouchableOpacity>
        </ScrollView>

    );
}

export default EventCal


const styles = StyleSheet.create ({ 
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
    picFrame: {
        flexDirection: 'column' ,
        width: '60%',
        height:'50%',
    },
    dateTimeText: {
        textAlign: 'center',
        margin: '13%',
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
});