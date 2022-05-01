import {React, useState,Component} from "react";
import {AppRegistry, Image, TextInput, Button, Dimensions, StyleSheet, Platform, Text, View, TouchableOpacity, ScrollView, TouchableHighlight, KeyboardAvoidingView } from 'react-native';
//import Logo from '../../assets/Images/logo.png';
// import {validate} from 'react-email-validator';
import { Header } from "react-native-elements";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { block } from "react-native-reanimated";
import { waitForPendingWrites } from "firebase/firestore";
import UploadImage from "./uploadPhoto";

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const Profile = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const proPic = new UploadImage();
    return ( 
        <ScrollView>

        <View style = {styles.container}>   
            {/* profile picture view */}
            <View style = {styles.headName}>               
                <UploadImage/>
                <Text style = {{fontSize: 30, color: 'black',}}>אריה ברלין</Text>
            </View>
            
            {/* first name view */}
            <View style = {styles.itemLayout}>
                <TextInput placeholder='שם פרטי'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                    <Text style = {styles.textStyle}>שם פרטי: </Text>
            </View>
            
            {/* last name view */}            
           <View style= {styles.itemLayout}>
                <TextInput placeholder='שם משפחה' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
                <Text style = {styles.textStyle}>שם משפחה: </Text>
            </View>

            {/* date of birth view */}
            <View style = {styles.itemLayout}>               
                <TextInput placeholder='dd/mm/yyyy'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                    <Text style = {styles.textStyle}>תאריך לידה: </Text>
            </View>

            {/* user name view */}
            <View style = {styles.itemLayout}>
                <TextInput placeholder='User Name'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                    <Text style = {styles.textStyle}>שם משתמש: </Text>
            </View>

            {/* Address view */}
            <View style = {styles.itemLayout}>
                <TextInput placeholder='Address'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                <Text style = {styles.textStyle}>כתובת: </Text>
            </View>

            {/* phone number view */}
            <View style = {styles.itemLayout}>
                <TextInput placeholder='Phone Number'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />                                    
                    <Text style = {styles.textStyle}>מספר פלאפון: </Text>
            </View>

            {/* membership expiration date view */}
            <View style = {styles.itemLayout}>
                <TextInput placeholder='dd/mm/yyyy'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                <Text style = {styles.textStyle}>תוקף חברות: </Text>

            </View>

            {/* Password info view */}
            <View style= {styles.itemLayout}>
                <TextInput placeholder='Password' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    />
                    <Text style = {styles.textStyle}>סיסמא:  </Text>


            </View>
            
            {/* save changes button */}
            <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText}>שמירת שינויים</Text>
            </TouchableOpacity>

            {/* log out button */}
            <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText}>התנתק</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    );
};

export default Profile

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey', 
        height: wHeight,
        width: wWidth,
        display: 'flex',
        // alignItems: 'center'        
    },

    headName: { 
        alignItems: 'center', 
        marginTop: 20, 
    },
    imageStyle: {
        height:120, 
        width:120, 
        backgroundColor:'white', 
        borderRadius:100,
    },

    itemLayout: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }, 

    textStyle: {
        fontSize: 17,
        paddingTop: 10,
        margin: 5
        
    },
    input: {
        width:'40%',
        // textDecorationLine: "underline",
        height:40,
        borderRadius: 12,
        paddingRight:15,
        margin:5,
        paddingLeft: 7

     },
     buttons:{
        alignSelf:'center',
        alignItems:'center',
        width:'90%',
        color:'blue',
        height:40,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:8,
        display:'flex',
        justifyContent:'center',
     },
     buttonText:{
         fontWeight:'bold',
         fontSize:19,
     },
     
});