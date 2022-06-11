import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,Image,Alert} from 'react-native';
import {React,useState,} from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const{height:wHeight} = Dimensions.get("window");

const auth = getAuth();
  const ForgotPage = props => {
    const [email,setEmail] = useState("");
    sendPasswordResetEmail(auth, email)
    .then(() => {
    alert("אימייל לאיפוס סיסמא נשלח")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    });
    const emailMessege=()=>{
        if(email.replace(' ','')==""){
            alert("מלא את שדה האימייל")
            return
          }
        alert("קישור לאיפוס סיסמא נשלח לחשבון המייל שלך")
    }
    return (
       <KeyboardAwareScrollView> 
        <View style={styles.container} >
            <View style = {styles.top}>
               <IconEvilIcons name='unlock' size={200}/>
               <Text style={styles.heading}>שחזור סיסמא</Text>
            </View>
            <View style = {styles.bottom}>
                <Text style={styles.text1}>הכנס אימייל משתמש:</Text>
                <View style = {styles.inputView}>
                    <TextInput placeholder='אימייל:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    />
                    <TouchableOpacity style = {styles.button1} onPress={emailMessege}>
                        <Text style = {styles.buttonText}>אפס סיסמא</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button2} onPress={()=>props.navigation.navigate("login")}>
                        <Text style = {styles.buttonText}>חזרה לעמוד כניסה</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View >
        </KeyboardAwareScrollView>
        
    )
  }
  
  export default ForgotPage
  
  const styles = StyleSheet.create({
    container:{
        height:wHeight,
        paddingTop:40,
        flexDirection:'column',
        backgroundColor:'white',
     },
     top:{
        width:'100%',
        height:'35%',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fff',
     },
     heading:{
        fontSize:50,
     },
     text1:{
        fontSize:24,
        color:'#fff',
        paddingTop:20, 
     },
     bottom:{
         width:'100%',
         height:'65%',
         backgroundColor:'#373737fe',  
         borderTopLeftRadius:25,
         borderTopRightRadius:25,  
         alignItems:'center',
     },
     inputView:{
         width:'100%',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         marginTop:10, 
         paddingTop:3,
     },
     input: {
        width:'90%',
        borderWidth:1,
        borderColor:'#fff',
        height:60,
        borderRadius:8,
        paddingRight:15,
        paddingLeft: 13,
        margin:5,
        color: "white",
        textAlign: 'right',
        fontSize:17,
     },
     button1:{
        alignItems:'center',
        width:'90%',
        height:50,
        backgroundColor:'#191917fe',
        marginTop:30,
        borderRadius:8,
        display:'flex',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#fff',
        fontWeight:'bold',
        
     },
     button2:{
        alignItems:'center',
        width:'90%',
        height:38,
        backgroundColor:'#191917fe',
        marginTop:10,
        borderRadius:8,
        borderWidth:1.5,
        display:'flex',
        justifyContent:'center',
        borderColor:'#fff',

     },
     buttonText:{
         fontWeight:'400',
         fontSize:17,
         color:'white'
         
     },

  })
