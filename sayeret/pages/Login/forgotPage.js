import { StyleSheet, Text, View, TextInput, TouchableOpacity,Dimensions,Image} from 'react-native';
import {React,useState,} from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const{height:wHeight} = Dimensions.get("window");

const auth = getAuth();

  const forgotPage = props => {
    const [email,setEmail] = useState("");
    sendPasswordResetEmail(auth, email)
    .then(() => {
    alert("אימייל לאיפוס סיסמא נשלח")
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    });
    return (
        
        <View style={styles.container} >
          
            <View style = {styles.top}>
                
            </View>
            <View style = {styles.bottom}>
                <View style = {styles.inputView}>
                    <TextInput placeholder='אימייל:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    />
                    <TouchableOpacity style = {styles.button1}>
                        <Text style = {styles.buttonText}>שלח סיסמא חדשה</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button2} onPress={()=>props.navigation.navigate("Login")}>
                        <Text style = {styles.buttonText}>חזרה לעמוד כניסה</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View >
        
    )
  }
  
  export default forgotPage
  
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
     logo:{
         flex:1,
         resizeMode:'contain',
         width:'70%',
     },
   
     bottom:{
         width:'100%',
         height:'65%',
         backgroundColor:'#373737fe',  
         borderTopLeftRadius:25,
         borderTopRightRadius:25,  
     },
     inputView:{
         width:'100%',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         marginTop:25, 
         paddingTop:30,
     },
     input: {
        width:'90%',
        borderWidth:1,
        borderColor:'#fff',
        height:52,
        borderRadius:8,
        paddingRight:15,
        margin:5,
        color: "white",
        padding:20,
        textAlign: 'right',
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
        borderWidth:3,
        
     },
     button2:{
        alignItems:'center',
        width:'90%',
        height:50,
        backgroundColor:'#191917fe',
        marginTop:10,
        borderRadius:8,
        borderWidth:3,
        display:'flex',
        justifyContent:'center',

     },
     buttonText:{
         fontWeight:'bold',
         fontSize:19,
         color:'white'
         
     },

  })