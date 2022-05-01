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
            <Text style = {styles.textStyle}>שם פרטי: </Text>
                <TextInput placeholder='שם פרטי'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
                
            </View>
            
            {/* last name view */}            
           <View style= {styles.itemLayout}>
           <Text style = {styles.textStyle}>שם משפחה: </Text>
                <TextInput placeholder='שם משפחה' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
                
            </View>

            {/* date of birth view */}
            <View style = {styles.itemLayout}>               
            <Text style = {styles.textStyle}>תאריך לידה: </Text>
                <TextInput placeholder='dd/mm/yyyy'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* user name view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>שם משתמש: </Text>
                <TextInput placeholder='User Name'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* Address view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>כתובת: </Text>
                <TextInput placeholder='Address'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* phone number view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>מספר פלאפון: </Text>
                <TextInput placeholder='Phone Number'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />                                    
            </View>

            {/* membership expiration date view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>תוקף חברות: </Text>
                <TextInput placeholder='dd/mm/yyyy'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    // onChangeText={text=>setEmail(text)}
                    />

            </View>

            {/* Password info view */}
            <View style= {styles.itemLayout}>
            <Text style = {styles.textStyle}>סיסמא:  </Text>
                <TextInput placeholder='Password' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    />


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
        height: '200%',
        paddingBottom: 70, 
        width: wWidth,
        display: 'flex',
        
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
        flexDirection: 'column',
        alignSelf: 'flex-end',
        width: '100%',
        alignContent: 'center',
        
    }, 

    textStyle: {
        fontSize: 17,
        paddingTop: 3,
        margin: 5,
        textAlign: 'right',
        
        
    },
    input: {
        // width:'400%',
        // textDecorationLine: "underline",
        height:40,
        borderRadius: 12,
        paddingRight:10,
        margin:5,
        paddingLeft: 7,
        borderWidth:1,
        textAlign: 'right',
        

     },
     buttons:{
        alignSelf:'center',
        alignItems:'center',
        width:'85%',
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