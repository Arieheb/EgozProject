import {React,useState,} from 'react';
import {View,StyleSheet,Image,TextInput,Button,Text,TouchableOpacity} from 'react-native';
import Logo from '../../assets/Images/logo.png';
import {validate} from 'react-email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = props => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = () =>
    {   auth
        .createUserWithEmailAndPassword(email,password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))
    }
    
    return (
        <View style={styles.container}>
            <View style = {styles.top}>
                <Image style = {styles.logo} source={Logo} 
                styles={styles.logo} 
                />
            </View>
            <View style = {styles.bottom}>
                <Text style = {styles.heading}>כניסה</Text>
                <View style = {styles.inputView}>
                    <TextInput placeholder='Email:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={email}
                    onChangeText={text=>setEmail(text)}
                    />
                    <TextInput placeholder='Password:' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    value={password}
                    onChangeText={text=>setPassword(text)}
                    secureTextEntry
                    />
                    <TouchableOpacity 
                    style = {styles.buttons}
                    >
                        <Text style = {styles.buttonText}>היכנס</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate('SignUp')}>
                        <Text style = {styles.buttonText}>הירשם</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginTop:40,
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
    },
    top:{
       width:'100%',
       height:'40%',
       display:'flex',
       alignItems:'center',
    },
    bottom:{
        width:'100%',
        height:'60%',
        backgroundColor:'#31386C',  
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
    },
    heading:{
        color:'#fff',
        fontSize:32,
        fontWeight:'bold',
        marginLeft:40,
        marginTop:40,
    },
    inputView:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:35,
    },
    input: {
       width:'90%',
       borderWidth:1,
       borderColor:'#fff',
       height:52,
       borderRadius:8,
       paddingRight:15,
       margin:5,
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
       alignItems:'center',
       justifyContent:'center',
    },
    buttonText:{
        fontWeight:'bold',
        fontSize:19,
    },
    
})
export default LoginScreen