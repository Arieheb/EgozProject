import React, { useState, useEffect } from 'react';
import { Modal, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import { Navigation } from 'react-calendar';
import event from "../../assets/Images/eventsImage.jpeg";
import memorial from "../../assets/Images/izkor.jpg";
import pizza from "../../assets/Images/pizza.jpg";


const App = () => {
    const [alert, setAlert] = React.useState({
      type: 'error',
      text: 'This is a alert message',
      show: false
    })
  
    function onCloseAlert() {
      setAlert({
        type: '',
        text: '',
        show: false
      })
    }
  
    function onShowAlert(type) {
      setAlert({
        type: type,
        text: 'Demo alert',
        show: true
      })
    }
}
const Benefits = props => {
         const [value, onChange] = useState(new Date());
         useEffect (()=>{
            //const MemoryCollection = collection (db, 'Benefits')
         })
    return (
        <ScrollView >
            <View style = {styles.page}>
                <Text style = {styles.title}>הטבות</Text>

                <View name='benefit' style = {styles.benefit} >
                    <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={pizza}style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>Alert.alert("מבצע על שתי פיצות משפחתיות בפיצה האט","בא לכם פיצה?שתי משפחתיות מפנקות של פיצה האט ב-₪85 – כולל משלוח לכל הארץ!קקופון: 714500בתין ")}>
                        <Text style= {styles.buttonText} >קרא עוד</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View name='benefit' style = {styles.benefit} >
                    <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={event}style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>Alert.alert("sdfsdf")}>
                        <Text style= {styles.buttonText} >קרא עוד</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View name='benefit' style = {styles.benefit} >
                    <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={memorial} style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>Alert.alert("sdfsdf")}>
                        <Text style= {styles.buttonText} >קרא עוד</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View name='benefit' style = {styles.benefit} >
                    <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={memorial} style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>Alert.alert("sdfsdf")}>
                        <Text style= {styles.buttonText} >קרא עוד</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View name='benefit' style = {styles.benefit} >
                    <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={memorial} style = {styles.benefitsPic}></Image>
                    </View> 
                    <View name= 'information' style = {styles.infoFrame}>
                        <Text style = {styles.infoText}> שם ההטבה: הנחה בפיצה</Text>
                        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>Alert.alert("sdfsdf")}>
                        <Text style= {styles.buttonText} >קרא עוד</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("home")}>
                        <Text style= {styles.buttonText} >הטבה חדשה</Text>
                    </TouchableOpacity>

                </View>
        </ScrollView>

    );
}

export default Benefits


const styles = StyleSheet.create ({ 
    page: {
        alignItems: "center",
    },
    buttonsBenefit: {
        backgroundColor: "red",
        borderRadius: 20,
        textAlign: "center",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 2
    },
    title: {
        fontWeight: "bold",
        color: "black",
        
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
        fontSize: 35,
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 25,

    },
    benefitsPic: {
        width: 180,
        height: 180,
        borderRadius: 20
    },
    buttons: {
        borderRadius: 100,
        width:170,
        height: 75,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        margin: 20,
        marginTop: 8,
        color:"white",
    },
});

