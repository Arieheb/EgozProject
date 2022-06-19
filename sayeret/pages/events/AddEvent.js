import React, { useState} from 'react';
import {TextInput, View,Alert,ScrollView, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import DateTimePicker from '@react-native-community/datetimepicker'


const AddEvent = (props) => {
    const [titleInput, setTitleInput] = useState("");
    const [locationInput, setLocationInput] = useState("");
    const [infomationInput, setInformationInput] = useState("");
    const [contactInput, setContactInput] = useState("");
    const [timeInput, setTimeInput] = useState("");
    const [date, setDate] = useState(new Date())
    const [show, setShow] = useState(false)


    const handleSubmit = () => {
        if(!titleInput.length){
            return Alert.alert("יש להזין את שם האירוע")
        }
        if(!locationInput.length){
            return Alert.alert("יש להזין את מיקום האירוע")
        }
        if(!infomationInput.length){
            return Alert.alert("יש להזין את תיאור האירוע")
        }
        if(!contactInput.length){
            return Alert.alert("יש להזין את שם איש הקשר")
        }
        if(!timeInput.length){
            return Alert.alert("יש להזין את זמן האירוע")
        }
        if(!date){
            return Alert.alert("יש להזין את תאריך האירוע")
        }
        //TODO - fix JSON output
        addDoc(collection(db,'events'),{ eventName:titleInput, eventLocation:locationInput, eventInformation:infomationInput, eventContact:contactInput, eventTime: timeInput, eventDate: date});
        props.navigation.navigate('events');
    }


    return (
        <KeyboardAwareScrollView>
            
            <View style= {styles.container}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate("events")}>
             <Icon name="arrow-right-thick" size={35}/>
            </TouchableOpacity>
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

                    <Pressable onPress={()=>setShow(true)} >
                        <Text style = {styles.textStyle}>תאריך: </Text>
                        {show?
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        display='default'
                        style = {{borderRadius: 50}}
                        onChange = {(a, chosenDate)=>{setDate(chosenDate||date);setShow(false)}}
                    />:null}
                        <Text style={{...styles.input,paddingTop:10, color:'grey', textAlign:'left'}}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
                        
                    </Pressable>
                    
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
          
export default AddEvent

const styles = StyleSheet.create ({ 
    container: { 
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
        marginTop:30,
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 10,
        width: 120,
        height: 60,
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
        backgroundColor: 'lightgrey',      

        
     },
});