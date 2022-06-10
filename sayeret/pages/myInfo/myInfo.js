import {React, useState,Component} from "react";
import {AppRegistry, Image, TextInput, Button, Dimensions, StyleSheet, Platform, Text, View, TouchableOpacity, ScrollView, TouchableHighlight, KeyboardAvoidingView, Alert } from 'react-native';
//import Logo from '../../assets/Images/logo.png';
// import {validate} from 'react-email-validator';
import { Header } from "react-native-elements";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { block } from "react-native-reanimated";
import { waitForPendingWrites } from "firebase/firestore";
import UploadImage from "./uploadPhoto";
import { signOut } from 'firebase/auth';
import { addDoc,updateDoc, collection } from 'firebase/firestore';



const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;

const signOutNow = () => {
    signOut(auth).then(() => {
        navigation.replace('login');
    }).catch((error) => {
    });
}

const Profile = (props) => {
    const [fnInput, setFnInput] = useState("");
    const [lnInput, setLnInput] = useState("");
    const [addInput, setAddInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [cityInput, setCityInput] = useState("");
    // const [lastNameInput, setLastNameInput] = useState("");
    // const [lastNameInput, setLastNameInput] = useState("");

    const user = props.route.params.user
    const handleSubmit = () => {
        //TODO - fix JSON output
        updateDoc(collection(db,'users'),{ FirstName:fnInput, LastName:lnInput, Address:addInput, City: cityInput, phone: phoneInput});
        Alert.alert("השינויים נשמרו בהצלחה")
        props.navigation.navigate('home');
    }
    return ( 
        <ScrollView>

        <View style = {styles.container}>   
            {/* profile picture view */}
            <View style = {styles.headName}>               
                <UploadImage user={user}/>
                <Text style = {{fontSize: 30, color: 'black',}}>{user.FirstName} {user.LastName}</Text>
            </View>
            
            {/* first name view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>שם פרטי: </Text>
                <TextInput 
                    style={styles.input}
                    placeholder={user.FirstName}
                    value = {fnInput}                    
                    placeholderTextColor={"#fff"}
                    onChangeText={text=>setFnInput(text)}
                    />                
            </View>
            
            {/* last name view */}            
           <View style= {styles.itemLayout}>
           <Text style = {styles.textStyle}>שם משפחה: </Text>
                <TextInput placeholder={user.LastName} 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={lnInput}
                    onChangeText={text=>setLnInput(text)}
                />
                
            </View>

            {/* Address view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>כתובת: </Text>
                <TextInput placeholder={user.Address}
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={addInput}
                    onChangeText={text=>setAddInput(text)}
                    />
            </View>

            {/* City view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>עיר: </Text>
                <TextInput placeholder={user.city}
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={cityInput}
                    onChangeText={text=>setCityInput(text)}
                    />
            </View>

            {/* phone number view */}
            <View style = {styles.itemLayout}>
            <Text style = {styles.textStyle}>מספר פלאפון: </Text>
                <TextInput placeholder={user.phone}
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value = {phoneInput}
                    onChangeText={text=>setPhoneInput(text)}
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
            {/* <View style= {styles.itemLayout}>
            <Text style = {styles.textStyle}>סיסמא:  </Text>
                <TouchableOpacity>

                </TouchableOpacity>


            </View> */}
            
            {/* save changes button */}
            <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText} onPress = {handleSubmit }>שמירת שינויים</Text>
            </TouchableOpacity>

            {/* log out button */}
            <TouchableOpacity style = {styles.buttons} onPress={signOutNow}>


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
        textAlign: 'left',
        
        
    },
    input: {
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
        
     },
     
});