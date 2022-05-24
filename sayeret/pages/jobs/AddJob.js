import React,{useState} from 'react';
import {StyleSheet, Text, View, Pressable, TextInput ,Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import RNPickerSelect from "react-native-picker-select";
import Job from '../../models/job'

const AddJob = props => {
const [titleInput, setTitleInput] = useState("")
const [locationInput, setLocationInput] = useState("")
const [descriptionInput, setDescriptionInput] = useState("")
const [nameInput, setNameInput] = useState("")
const [phoneInput, setPhoneInput] = useState("")
const [emailInput, setEmailInput] = useState("")

const [open, setOpen] = useState(false);
const [value, setValue] = useState(['מרכז', 'ירושלים והסביבה', 'צפון', 'דרום']);
const [items, setItems] = useState([
  {label: 'מרכז', value: 'מרכז'},
  {label: 'תל אביב', value: 'תל אביב', parent: 'מרכז'},
  {label: 'רמת גן', value: 'רמת גן', parent: 'מרכז'},
  {label: 'ירושלים והסביבה', value: 'ירושלים'},
  {label: 'ירושלים', value: 'ירושלים', parent: 'ירושלים'},
  {label: 'צפון', value: 'צפון'},
  {label: 'דרום', value: 'דרום'}
]);

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
}

  return (
    <View style={styles.container}> 
      <View style={{width:"100%", alignItems:"center"}}>
        <TextInput
          style={styles.textInput}
          placeholder='שם המשרה'        
          value={titleInput}
          onChangeText={text=>setTitleInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
          style={styles.textInput}
          placeholder='מיקום'     
          value={locationInput}
          onChangeText={text=>setLocationInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        {/* <View style={{
          backgroundColor: '#171717',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius:5,
        }}> */}
      <DropDownPicker
        style={{... styles.textInput, ... styles.selectInput}}
        placeholder='מיקום'
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeText={text=>setLocationInput(text)}

        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
      />
    {/* </View> */}
        <TextInput
        style={{...styles.textInput,height:120}}
        placeholder='תיאור המשרה'
        value={descriptionInput}
        placeholderTextColor="#7f8c8d"
        multiline     
        onChangeText={text=>setDescriptionInput(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder='שם איש הקשר'     
          value={nameInput}
          onChangeText={text=>setNameInput(text)}
          placeholderTextColor="#7f8c8d"
        />
        <TextInput
          style={styles.textInput}
          placeholder='טלפון'     
          value={phoneInput}
          onChangeText={text=>setPhoneInput(text)}
          placeholderTextColor="#7f8c8d"
        />
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
    borderRadius:5,
    alignSelf:"flex-end",
    padding:5,
    fontSize:18,
  },
  selectInput:{
    flexDirection:"row-reverse",
    alignSelf:"flex-start",
    justifyContent:"flex-start",
    
  }
})