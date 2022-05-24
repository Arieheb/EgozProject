import React, { useState, useEffect } from 'react';
import {Image,TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import {AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';


const AddEvent = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <ScrollView>
        <View style= {styles.container}>
        <Text style = {{textAlign: 'center', fontSize: 35, color: 'white'}}>הוספת אירוע חדש</Text>
            <View >
                <Text style = {styles.textStyle}>שם האירוע:</Text>
                <TextInput placeholder='שם האירוע'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                />
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>מיקום: </Text>
                <TextInput placeholder='מיקום' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                />
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>תיאור האירוע:</Text>
                <ScrollView>
                <TextInput placeholder= 'תיאור האירוע' 
                    multiline = {true}
                    style={styles.infoText}
                    placeholderTextColor={"#fff"}
                />
                </ScrollView>
            </View>

            <View style= {{}}>
           <Text style = {styles.textStyle}>איש קשר:</Text>
                <TextInput placeholder='איש קשר' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                />
            </View>

           
        <TouchableOpacity style = {styles.buttons}>
                <Text style= {styles.buttonText}>הוספת אירוע</Text>
            </TouchableOpacity>
{/* <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150}}
        onValueChange={(itemValue, ) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}

            </View>
            </ScrollView>
    );

}

export default AddEvent

const styles = StyleSheet.create ({ 
    container: {
        backgroundColor: 'grey',  
        height: '100%',
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
        textAlign: 'left',
        
        
    },
    input: {
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

     infoText: {
        height:100,
        borderRadius: 12,
        paddingRight:10,
        margin:5,
        paddingLeft: 7,
        borderWidth: 1,
        textAlign: 'right',
        
     },
});