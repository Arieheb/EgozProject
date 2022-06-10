import {React,useState,} from 'react';
import {View,StyleSheet,Image,TextInput,Text,TouchableOpacity,Dimensions,KeyboardAvoidingView,ImageBackground, Keyboard} from 'react-native';
import Logo from '../../assets/Images/login_logo.png';
import {validate} from 'react-email-validator';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth"
import { ScrollView } from 'react-native-gesture-handler';
import ForgotPage from './ForgotPage'

const{width,height:wHeight} = Dimensions.get("window");

const LoginScreen = props => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignIn = () => {   
        auth
        signInWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("ברוך הבא", user.email)
          })
          .catch(error => alert('אחד מהנתונים אינם נכונים'))
        
    }

    return (
    <ScrollView>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}>
            <View style = {styles.top}>
                <Image style = {styles.logo} source={Logo} 
                />
            </View>
            <View style = {styles.bottom}>
                <Text style = {styles.heading}>כניסה</Text>
                <View style = {styles.inputView}>
                    <TextInput placeholder='אימייל:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    />
                    <TextInput placeholder='סיסמא:' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    />
                    <TouchableOpacity 
                    style = {styles.buttons}
                    onPress={handleSignIn}
                    >
                        <Text style = {styles.buttonText} >היכנס</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate("SignUp")}>
                        <Text style = {styles.buttonText}>הירשם</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("ForgotPage")}>
                    <Text style = {styles.forgot}>שכחת סיסמא?</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
            </TouchableOpacity>
        </KeyboardAvoidingView >
        </ScrollView>
    );
};

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
    heading:{
        color:'#fff',
        fontSize:32,
        fontWeight:'bold',
        marginLeft:40,
        marginTop:30,
        textAlign:'left',
    },
    inputView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:25,
        
         
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
       padding:10,
       textAlign: 'right',
    },
    buttons:{
       alignItems:'center',
       width:'90%',
       color:'blue',
       height:40,
       backgroundColor:'#fff',
       marginTop:10,
       borderRadius:8,
       display:'flex',
       justifyContent:'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:19,
    },
    forgot:{
        margin:10,
        paddingTop:15,
        color:'white',
    },
   
    
})
export default LoginScreen