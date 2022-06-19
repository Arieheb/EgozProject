import React, { useState} from 'react';
import {TextInput, View,Alert,ScrollView, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const AddMemorial = (props) => {
    const [nameInput,setNameInput] = useState("")
    const [semitaryInput,setSemitaryInput] = useState("")
    const [graveNumberInput,setGraveNumberInput] = useState("")
    const [informationInput,setInformationInput] = useState("")
    const [linkInput,setLinkInput] = useState("")
    const [rowInput,setRowInput] = useState("")
    const [sectionInput,setSectionInput] = useState("")
    
    const handleSubmit = () => {
        if(!nameInput.length){
            return Alert.alert("יש להזין את שם הנופל")
        }
        if(!semitaryInput.length){
            return Alert.alert("יש להזין את מיקום בית הקברות")
        }
        if(!infomationInput.length){
            return Alert.alert("יש להזין את מידע אודות הנופל")
        }
        if(!linkInput.length){
            return Alert.alert("יש להזין קישור לעמוד הנופל המלא")
        }
        // if(!timeInput.length){
        //     return Alert.alert("יש להזין את זמן האירוע")
        // }
        // if(!date){
        //     return Alert.alert("יש להזין את תאריך האירוע")
        // }

    }
    addDoc(collection(db,'Memorial'),{ Name:nameInput, graveNumber:graveNumberInput, information:informationInput, link:linkInput, row: rowInput, section: sectionInput, semitary: semitaryInput});
        props.navigation.navigate('Memorial');

    return (
        <View>
            <KeyboardAwareScrollView>
            
                <View style= {styles.container}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('Memorial')}>
                        <Icon name="arrow-right-thick" size={35}/>
                    </TouchableOpacity>
                    <Text style = {styles.title}>הוספת נופל</Text>
                    <View>
                        <Text style = {styles.textStyle}>שם הנופל:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='שם הנופל'
                            value = {nameInput}
                            onChangeText = {text => setNameInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>שם בית הקברות: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='שם בית הקברות' 
                            value = {semitaryInput}
                            onChangeText = {text => setSemitaryInput(text)}
                            placeholderTextColor={"grey"}
                        
                        />
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>מספר חלקה:</Text>
                        <ScrollView>
                        <TextInput placeholder= 'מספר חלקה' 
                            multiline
                            style={styles.infoText}
                            value = {sectionInput}
                            onChangeText = {text => setSectionInput(text)}
                            placeholderTextColor={"grey"}
                        />
                        </ScrollView>
                    </View>

                    <View style = {{}}>
                <Text style = {styles.textStyle}>מספר שורה:</Text>
                        <TextInput placeholder='מספר שורה' 
                            style={styles.input}
                            value = {rowInput}
                            onChangeText = {text => setRowInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                        <Text style = {styles.textStyle}>מספר קבר:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='מספר קבר'
                            value = {graveNumberInput}
                            onChangeText = {text => setGraveNumberInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                        <Text style = {styles.textStyle}>פרטים על הנופל:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='פרטים על הנופל'
                            value = {informationInput}
                            onChangeText = {text => setInformationInput(text)}
                            placeholderTextColor={"grey"}
                        />
                    </View>

                    <View style = {{}}>
                        <Text style = {styles.textStyle}>קישור לעמוד הנופל המלא:</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder='קישור לעמוד הנופל המלא'
                            value = {linkInput}
                            onChangeText = {text => setLinkInput(text)}
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
        </View>

        
    );
}

export default AddMemorial

const styles = StyleSheet.create ({ })
