import React, { useState, useEffect } from 'react';
import { Image,TextInput, View, Platform,ScrollView, TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';


const AddEvent = () => {
    return (
        <ScrollView>
        <View style= {styles.container}>
        <Text style = {{textAlign: 'center', fontSize: 35, color: 'white'}}>Adding new event</Text>
        
        
            <View >
            <Text style = {styles.textStyle}>שם האירוע:</Text>
                <TextInput placeholder='שם האירוע'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>מיקום: </Text>
                <TextInput placeholder='מיקום' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>תיאור האירוע:</Text>
                <TextInput placeholder= 'תיאור האירוע'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>איש קשר:</Text>
                <TextInput placeholder='איש קשר' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    // value={password}
                    // onChangeText={text=>setPassword(text)}
                />
            </View>

           
        <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText}>שמירה</Text>
            </TouchableOpacity>
            </View>
            </ScrollView>
    );

}

export default AddEvent

const styles = StyleSheet.create ({ 
    container: {
        backgroundColor: 'grey',  
        height: '200%',
        paddingBottom: 70, 
        width: '100%',
        display: 'flex',
        
    },

    headName: { 
        alignItems: 'center', 
        marginTop: 25,

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
        borderWidth: 1,
        textAlign: 'right',
        

     },
     buttons:{
        alignSelf:'center',
        alignItems:'center',
        width:'85%',
        color:'blue',
        height:40,
        backgroundColor:'#fff',
        marginTop:30,
        borderRadius:8,
        display:'flex',
        justifyContent:'center',
     },
     buttonText:{
        
     },
     
    // container: {
    //     backgroundColor: 'maroon', 
    //     height: '200%',
    //     paddingBottom: 70, 
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignSelf: 'flex-end',
    //     alignContent: 'center',
    // },

    // textInput: {
    //     fontSize: 17,
    //     paddingTop: 3,
    //     margin: 5,
    //     textAlign: 'right',
    // },

    // input: {
    //     height:40,
    //     borderRadius: 12,
    //     paddingRight:10,
    //     margin:5,
    //     paddingLeft: 7,
    //     borderWidth:4,
    //     textAlign: 'right',
    // },

    // button: {
    //     alignSelf:'center',
    //     alignItems:'center',
    //     width:'85%',
    //     color:'blue',
    //     height:40,
    //     backgroundColor:'#fff',
    //     marginTop:10,
    //     borderRadius:8,
    //     display:'flex',
    //     justifyContent:'center',
    // },

    // buttonText: {
    //     fontWeight:'bold',
    //     fontSize:19,
    // }

});