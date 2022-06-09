import React, { useState, useEffect } from 'react';
import {TextInput, View,Alert, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';
import {AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



const AddEvent = (props) => {
    const [titleInput, setTitleInput] = useState("");
    const [locationInput, setLocationInput] = useState("");
    const [infomationInput, setInformationInput] = useState("");
    const [contactInput, setContactInput] = useState("");
    const [timeInput, setTimeInput] = useState("");
    const [dateInput, setDateInput] = useState("");

    const handleSubmit = () => {
        if(!titleInput.length){
            return Alert.alert("יש להזין את שם האירוע")
        }
        if(!locationInput.length){
            return Alert.alert("יש להזין את מיקום המאירוע")
        }
        if(!infomationInput.length){
            return Alert.alert("יש להזין את תיאור האירוע")
        }
        if(!contactInput.length){
            return Alert.alert("יש להזין את שם איש הקשר")
        }
        if(!timeInput.length){
            return Alert.alert("יש להזין מספר טלפון")
        }
        if(!dateInput.length){
            return Alert.alert("יש להזין כתובת אימייל")
        }
        //TODO - fix JSON output
        addDoc(collection(db,'events'),{ eventName:titleInput, eventLocation:locationInput, eventInformation:infomationInput, eventContact:contactInput, eventTime: timeInput, eventDate: dateInput});
        props.navigation.navigate('events');
    }


    return (
        <KeyboardAwareScrollView>
            <View style= {styles.container}>
                <Text style = {styles.title}>הוספת אירוע חדש</Text>
                    <View>
                        <Text style = {styles.textStyle}>שם האירוע:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='שם האירוע'
                            value = {titleInput}
                            onChangeText = {text => setTitleInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>מיקום: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='מיקום' 
                            value = {locationInput}
                            onChangeText = {text => setLocationInput(text)}
                            placeholderTextColor={"grey"}
                        
                        />
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>תיאור האירוע:</Text>
                        <ScrollView>
                        <TextInput placeholder= 'תיאור האירוע' 
                            multiline
                            style={styles.infoText}
                            value = {infomationInput}
                            onChangeText = {text => setInformationInput(text)}
                            placeholderTextColor={"grey"}
                        />
                        </ScrollView>
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>איש קשר:</Text>
                        <TextInput placeholder='איש קשר' 
                            style={styles.input}
                            value = {contactInput}
                            onChangeText = {text => setContactInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                        <Text style = {styles.textStyle}>זמן:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='00:00'
                            value = {timeInput}
                            onChangeText = {text => setTimeInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                        <Text style = {styles.textStyle}>תאריך:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='dd/mm/yyyy'
                            value = {dateInput}
                            onChangeText = {text => setDateInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>
                    <Pressable 
                    style = {({pressed})=>[styles.buttons,pressed && {backgroundColor:"#00cec9"}] }
                    onPress={handleSubmit}
                    >                        
                        <Text style= {styles.buttonText}>הוספת אירוע</Text>
                    </Pressable>
            </View>
        </KeyboardAwareScrollView>
    );

}
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

          
export default AddEvent

const styles = StyleSheet.create ({ 
    container: {
        //backgroundColor: 'grey',  
        height: '100%',
        paddingBottom: 70, 
        width: '100%',
        display: 'flex',
        backgroundColor: 'white',
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 10,
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
        backgroundColor: 'lightgrey',      
     },
     buttons:{
        alignSelf:'center',
        alignItems:'center',
        // width:'85%',
        // color:'blue',
        // height:40,
        // backgroundColor:'#fff',
        marginTop:30,
        // borderRadius:8,
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        // padding: 5,
        // position: 'absolute',
        marginTop: 50,
        borderRadius: 10,
        width: 120,
        height: 60,
        // alignContent:'flex-end'
     },
     buttonText:{
        color: "black",
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:16,
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