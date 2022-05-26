import { View, Text ,TextInput, Pressable , StyleSheet,TouchableOpacity,StatusBar,Alert} from 'react-native'
import {React,useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import DropDownPicker from 'react-native-dropdown-picker';

 
const SignUpAuth = () => {
  // const [show1,setShow1] = useState(false);
  // const [show2,setShow2] = useState(false);

 // const [choice, setChoice] = useState("")
  const [nameInput, setNameInput] = useState("")
  const [year, setYear] = useState("")
  const [month, setMonth] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(['לא','כן']);
  const [items, setItems] = useState([
    {label: 'כן', value: 'כן'},
    {label: 'לא', value: 'לא'},
  
]);
  const handleSignUp = () =>
    {   
      auth
      // if(!choice.length){
      //   return Alert.alert("יש להזין בחירה ")
      // }
  
      if(!nameInput.length){
        return Alert.alert("יש להזין שם ")
      }
      if(!year.length){
        return Alert.alert("יש להזין את שנת הגיוס")
      }
      if(!month.length){
        return Alert.alert("יש להזין את חודש הגיוס")
      }
      if(!descriptionInput.length){
        return Alert.alert("יש להזין סיבת הצטרפות")
      }
      if(!phoneInput.length){
        return Alert.alert("יש להזין מספר טלפון")
      }
    
      // const userDetails = new user(nameInput, year, month, descriptionInput, phoneInput);
      // Alert.alert(JSON.stringify(userDetails))
      
    }
   
    return (
     <View style={styles.container}>

        <View style = {styles.top}>
          <Text style= {styles.heading}> שאלון אימות</Text>
        </View>

        <View style = {styles.bottom}>
          <View style = {styles.inputView}>
            <View styles={styles.pickerView}>
              <Text style={styles.text}>האם שירתת ביחידה?</Text>
              {/* <DropDownPicker
                placeholder='בחר'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                //onChangeText={text=>setChoice(text)}
              /> */}
            
            </View> 
              <Text style={styles.text}>באיזה שנה?</Text>
              <TextInput  
                style={styles.input}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />
              <Text style={styles.text}>באיזה מחזור?</Text>
              <TextInput  
                style={styles.input}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />
              <Text style={styles.text}>באיזה צוות?</Text>
              <TextInput  
                style={styles.input}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />
              <TouchableOpacity style = {styles.buttons} onPress = {handleSignUp}>
                <Text style = {styles.buttonText} >סיום</Text>
              </TouchableOpacity>
          </View>
        </View>
     </View>
     
        );
    };
    
  

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    backgroundColor:'#fff',
    
 },

 top:{
    width:'100%',
    height:'15%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-end',
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'#fff'
 },
 bottom:{
     width:'100%',
     height:'85%',
     backgroundColor:'#373737fe',   
     borderTopLeftRadius:25,
     borderTopRightRadius:25,
 },
 heading:{
     color:'black',
     fontSize:40,
     fontWeight:'bold',
 },
 pickerView:{
    flexDirection:'row',
 },
 inputView:{
     width:'100%',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     marginTop:35,
 },
 text:{
    textAlign:'right', 
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
 },
 input: {
    width:'90%',
    borderWidth:1,
    borderColor:'#fff',
    height:52,
    borderRadius:8,
    paddingRight:15,
    margin:10,
    padding:10,
    color:"white",
 },
 buttons:{  
    alignItems:'center',
    width:'90%',
    color:'blue',
    height:55,
    backgroundColor:'#fff',
    marginTop:10,
    borderRadius:20,
    display:'flex',
    justifyContent:'center',
 },
 buttonText:{
     fontWeight:'bold',
     fontSize:19,
     
 },
     
});

export default SignUpAuth