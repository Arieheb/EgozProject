import {React,useState,} from 'react';
import {View,StyleSheet,Image,TextInput,Button} from 'react-native';
import Logo from '../../assets/Images/logo.png';
import {validate} from 'react-email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const LoginScreen = () => {
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
            <View>
                <Image source={Logo} 
                styles={styles.logo} 
                resizeMode="contain"
                />
            </View>
            <View>
                <TextInput placeholder='אימייל:'
                style={styles.input}
                value={email}
                onChangeText={text=>setEmail(text)}
                />
                <TextInput placeholder='סיסמא:' 
                style={styles.input}
                value={password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry
                />
            </View>
            <View>
                <Button title='היכנס' style={styles.button}></Button>
                <Button title='הרשמה' style={styles.button}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
       padding:40, 
       justifyContent:'center',
    },
    logo:{
        
        alignItems:'center',
    },
    input: {
        padding:10,
        backgroundColor:'grey',
        width:'100%',
        margin:5,
        borderRadius:5,
        marginTop:20,
    },
    button:{
        padding:20,
        marginTop:10,
        
    }
    
})
export default LoginScreen