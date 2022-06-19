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
            return Alert.alert("יש להזין את שם בית הקברות")
        }
        if(!informationInput.length){
            return Alert.alert("יש להזין את מידע אודות הנופל")
        }
        if(!linkInput.length){
            return Alert.alert("יש להזין קישור לעמוד הנופל המלא")
        }
        addDoc(collection(db,'Memorial'),{ Name:nameInput, graveNumber:{graveNumberInput}, information:informationInput, link:linkInput, row: rowInput, section: sectionInput, semitary: semitaryInput});
            props.navigation.navigate('Memorials');
    }

    return (
        <View>
            <KeyboardAwareScrollView>
            
                <View style= {styles.container}>
                    <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.navigation.navigate('Memorials')}>
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
                             style={styles.input}
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
                            multiline
                            style={styles.infoText}
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
                        <Text style= {styles.buttonText}>הוספת חלל</Text>
                    </Pressable>

                </View>
            </KeyboardAwareScrollView>
        </View>

        
    );
}

export default AddMemorial

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
})
