import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable,TextInput ,Alert} from 'react-native';
import Job from '../../models/job'

const AddJob = props => {
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

    const newJob = new Job(titleInput, locationInput, descriptionInput, nameInput, phoneInput, emailInput);
    Alert.alert(JSON.stringify(newJob))
    // TODO - fix JSON output
    // TODO - update databse
    return
}

  return (
    <View style={styles.container}> 
      <View style={{width:"100%", alignItems:"center"}}>
        <TextInput
          style={styles.textInput}
          placeholder='שם המשרה'        
          value={titleInput}
          fontSize="18"
          onChangeText={text=>setTitleInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
          style={styles.textInput}
          placeholder='מיקום'     
          value={locationInput}
          fontSize="18"
          onChangeText={text=>setLocationInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
        style={{...styles.textInput,height:120}}
        placeholder='תיאור המשרה'
        value={descriptionInput}
        fontSize="18"
        placeholderTextColor="#7f8c8d"
        multiline     
        onChangeText={text=>setDescriptionInput(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder='שם איש הקשר'     
          value={nameInput}
          fontSize="18"
          onChangeText={text=>setNameInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
          style={styles.textInput}
          placeholder='טלפון'     
          value={phoneInput}
          fontSize="18"
          onChangeText={text=>setPhoneInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
          style={styles.textInput}
          placeholder='אימייל'     
          value={emailInput}
          fontSize="18"
          onChangeText={text=>setEmailInput(text)}
          placeholderTextColor="#7f8c8d"
        />

<Pressable 
style={({pressed})=>[styles.button,pressed && {backgroundColor:"#00cec9"}]}
onPress={handleSubmit}
>
  <Text>הוסף משרה</Text>
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
  button:{
    height:40,
    width:100,
    backgroundColor:"#81ecec",
    borderRadius:4,
    marginTop:20,
    alignItems:"center",
    justifyContent:"center"
  },
  textInput:{
    marginVertical:8,
    width:"100%",
    textAlign:"right",
    height:40,
    borderColor:"gray",
    borderWidth:1,
    alignSelf:"flex-end",
    padding:5
  }
  })