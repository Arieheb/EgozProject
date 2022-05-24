import { View, Text ,TextInput, Picker , StyleSheet,TouchableOpacity,StatusBar,Image} from 'react-native'
import {React,useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { ScrollView } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

 
const SignUpAuth = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
    const handleSignUp = () =>
      {   
        auth
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
        }
   
      return (
        <View style={styles.container}>
        <View style = {styles.top}>
          <Text style= {styles.heading}> שאלון אימות</Text>
        </View>
        <View style = {styles.bottom}>
          <View style = {styles.inputView}>
              <Text style={styles.text}>האם שירתת ביחידה?</Text>
              <TextInput 
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={email}
                onChangeText={text=>setEmail(text)}
              />
              <Text style={styles.text}>האם שירתת ביחידה?</Text>
              <TextInput  
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry
              />
              <Text style={styles.text}>האם שירתת ביחידה?</Text>
              <TextInput  
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={confirmPassword}
                onChangeText={text=>setConfirmPassword(text)}
                secureTextEntry
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
 scrollview:{
   // backgroundColor:'#373737fe',
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
     marginLeft:20,
     marginTop:20,
     
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