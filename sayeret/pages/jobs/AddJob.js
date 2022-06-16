import { addDoc, collection } from 'firebase/firestore';
import React,{useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Pressable, TextInput ,Alert} from 'react-native';
import { auth, db } from '../../firebase';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const AddJob = (props) => {
const [titleInput, setTitleInput] = useState("")
const [locationInput, setLocationInput] = useState("")
const [descriptionInput, setDescriptionInput] = useState("")
const [nameInput, setNameInput] = useState("")
const [phoneInput, setPhoneInput] = useState("")
const [emailInput, setEmailInput] = useState("")

const handleSubmit = ()=>{
  if(!titleInput.length){
    return Alert.alert("יש להזין את שם המשרה")
  }
  if(!locationInput.length){
    return Alert.alert("יש להזין את מיקום המשרה")
  }
  if(!descriptionInput.length){
    return Alert.alert("יש להזין את תיאור המשרה")
  }
  if(!nameInput.length){
    return Alert.alert("יש להזין את שם איש הקשר")
  }
  if(!phoneInput.length){
    return Alert.alert("יש להזין מספר טלפון")
  }
  if(!emailInput.length){
    return Alert.alert("יש להזין כתובת אימייל")
  }
    // TODO - fix JSON output
    addDoc(collection(db,'jobs'),{title:titleInput, location:locationInput, description:descriptionInput, name:nameInput, phone:phoneInput, email:emailInput, user:auth.currentUser.uid});
    props.navigation.navigate('A');
}

  return (
    <View style={styles.container}> 
    <TouchableOpacity style={{flexDirection:'row', alignSelf: 'baseline' }} onPress={()=>props.navigation.navigate("A")}>
             <Icon name="arrow-right-thick" size={35}/>
    </TouchableOpacity>
    <Text style = {styles.title}>הוספת משרה חדשה</Text>

      <View style={{width:"100%"}}>
        <Text style = {styles.textStyle}>הזן שם משרה: </Text>
        <TextInput
          style={styles.textInput}
          placeholder='שם המשרה'        
          value={titleInput}
          onChangeText={text=>setTitleInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <Text style = {styles.textStyle}>הזן מיקום:  </Text>
        <TextInput
          style={styles.textInput}
          placeholder='מיקום'     
          value={locationInput}
          onChangeText={text=>setLocationInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <Text style = {styles.textStyle}>הזן את תיאור המשרה:  </Text>
        <TextInput
        style={{...styles.textInput,height:120}}
        placeholder='תיאור המשרה'
        value={descriptionInput}
        placeholderTextColor="#7f8c8d"
        multiline     
        onChangeText={text=>setDescriptionInput(text)}
        />
        <Text style = {styles.textStyle}>הזן איש קשר:  </Text>
        <TextInput
          style={styles.textInput}
          placeholder='שם איש הקשר'     
          value={nameInput}
          onChangeText={text=>setNameInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <Text style = {styles.textStyle}>הזן טלפון:  </Text>
        <TextInput
          style={styles.textInput}
          placeholder='טלפון'     
          value={phoneInput}
          onChangeText={text=>setPhoneInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <Text style = {styles.textStyle}>הזן מייל:  </Text>
        <TextInput
          style={styles.textInput}
          placeholder='אימייל'     
          value={emailInput}
          onChangeText={text=>setEmailInput(text)}
          placeholderTextColor="#7f8c8d"
        />

<Pressable 
style={({pressed})=>[styles.button,pressed && {backgroundColor:"#00cec9"}]}
onPress={handleSubmit}
>
  <Text style = {styles.buttonText}>הוסף משרה</Text>
</Pressable>
      </View>
    </View>
  )
}

export default AddJob

const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:"center",
      paddingHorizontal:5,
  },
  titleText:{
      fontSize:22,
  },
  title: {
    textAlign: 'center',
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
},
  button:{
    alignSelf:'center',
        alignItems:'center',
        marginTop:30,        
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,        
        borderRadius: 10,
        width: 120,
        height: 60,
        
  },
  textStyle: {
        fontSize: 17,
        margin: 5,
        textAlign: 'left', 
    },
  textInput:{
    marginVertical:8,
    width:"100%",
    textAlign:"right",
    height:40,
    borderColor:"gray",
    borderWidth:1,
    borderRadius:12,
    alignSelf:"flex-end",
    padding:5,
    fontSize:18,
    backgroundColor:"white",
    backgroundColor: 'lightgrey',      
  },
  selectInput:{
    flexDirection:"row-reverse",
    alignSelf:"flex-start",
    justifyContent:"flex-start",
    justifyContent: 'center',
    borderRadius:5,
  },
  buttonText:{
    color: "black",
    textAlign: 'center',
    fontWeight:"bold",
    fontSize:16,
 },
})