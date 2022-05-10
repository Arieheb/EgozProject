import React,{useState} from 'react';
import { StyleSheet, Text, View, Pressable,TextInput ,Alert} from 'react-native';
import Job from '../../models/job'

const AddJob = props => {
const [titleInput, setTitleInput] = useState("")
const [locationInput, setLocationInput] = useState("")
const [descriptionInput, setDescriptionInput] = useState("")

const handleSubmit = ()=>{
  if(!titleInput.length){
    return Alert.alert("חרדת כותרת")
  }
  if(!locationInput.length){
    return Alert.alert("חרדת מיקום")
  }
  if(!descriptionInput.length){
    return Alert.alert("חרדת תיאור")
  }

    const newJob = new Job(titleInput,locationInput,descriptionInput);

    Alert.alert(JSON.stringify(newJob))
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