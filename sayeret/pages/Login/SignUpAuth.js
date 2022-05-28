import { View, Text ,TextInput, Pressable , StyleSheet,TouchableOpacity,StatusBar,Alert} from 'react-native'
import {React,useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import DropDownPicker from 'react-native-dropdown-picker';

 
const SignUpAuth = props => {
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);

  
  //const [nameInput, setNameInput] = useState("")
  // const [year, setYear] = useState("")
  // const [month, setMonth] = useState("")
  // const [descriptionInput, setDescriptionInput] = useState("")
  // const [phoneInput, setPhoneInput] = useState("")
  
  return (
    <View style={styles.container}>

      <View style = {styles.top}>
        <Text style= {styles.heading}> שאלון אימות</Text>
      </View>

      <View style = {styles.bottom}>
        <View style = {styles.inputView}>
          <View style ={styles.choice}>   
            <TouchableOpacity 
            onPress={()=>{if(show1)setShow1(false);else setShow1(true)}}
            style={styles.choiceButton}
            >
              <Text style={styles.text}>כן</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{if(show2)setShow2(false);else setShow2(true)}}
            style={styles.choiceButton}
            >
              <Text style={styles.text}>לא</Text>
            </TouchableOpacity>  
          </View>  
            {show1?
              <View>
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
            </View>:null}
            {show2?
              <View>
                <Text style={styles.text}>מדוע אתה מעוניין להצטרף?</Text>
                <TextInput  
                  style={styles.input}
                  placeholder='...'
                  placeholderTextColor={"#fff"}
                />
                
            </View>:null}
            
            <TouchableOpacity style = {styles.buttons}>
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
 choice:{
    flexDirection:'row',
 },
 choiceButton:{
    margin:20,
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