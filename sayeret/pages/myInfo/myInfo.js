import {React, useState,Component} from "react";
import {AppRegistry, Image, TextInput, Button, Dimensions, StyleSheet, Text, View, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
//import Logo from '../../assets/Images/logo.png';
// import {validate} from 'react-email-validator';
import { Header } from "react-native-elements";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const{width,height:wHeight} = Dimensions.get("window");




const Profile = (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    
    return (
        
        <View style = {styles.container}>            
            {/* profile picture view */}
            <View style = {styles.listItem}>
                <Image style ={styles.imageStyle}
                source = {require ('../../assets/Images/logo.png')}/>
                <Text style = {{fontSize: 30, color: 'black',}}>Full Name</Text>
            </View>
            
            {/* first name view */}
           <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>First name: </Text>
                <TextInput placeholder='First Name'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>
            
            {/* last name view */}            
           <View style= {{flexDirection:'row'}}>
                <Text style = {styles.textStyle}>Last Name: </Text>
                <TextInput placeholder='Last Name' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    onChangeText={text=>setPassword(text)}

                    />
            </View>

            {/* date of birth view */}
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>Date of Birth </Text>
                <TextInput placeholder='dd/mm/yyyy'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* user name view */}
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>User Name: </Text>
                <TextInput placeholder='User Name'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* Address view */}
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>Address </Text>
                <TextInput placeholder='Address'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* phone number view */}
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>Phone Number: </Text>
                <TextInput placeholder='Phone Number'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* membership expiration date view */}
            <View style = {{flexDirection: 'row'}}>
                <Text style = {styles.textStyle}>Membership Expiration date: </Text>
                <TextInput placeholder='dd/mm/yyyy:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={email}
                    onChangeText={text=>setEmail(text)}
                    />
            </View>

            {/* Password info view */}
            <View style= {{flexDirection:'row'}}>
                <Text style = {styles.textStyle}>Password </Text>
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
                <Text style= {styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>

            {/* log out button */}
            <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText}>Log Out</Text>
            </TouchableOpacity>

        </View>
    );
};

export default Profile

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'grey', 
        height: '100%'
    },
    listItem: { 
        alignItems: 'center', 
        marginTop: 20, 
    },
    imageStyle: {
        height:120, 
        width:120, 
        backgroundColor:'white', 
        borderRadius:100,
    },
    textStyle: {
        fontSize: 17,
        paddingTop: 10,
        margin: 5
    },
    input: {
        width:'70%',
        borderWidth:1,
        borderColor:'#fff',
        height:40,
        borderRadius:8,
        paddingRight:15,
        margin:5,
     },
     buttons:{
        
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