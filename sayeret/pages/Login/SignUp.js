import {React,useState} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,
    }    from 'react-native';
    import { auth } from '../../firebase';
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
    import {validate} from 'react-email-validator';

const SignUpScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const handleSignUp = () =>
    {   
        auth
        createUserWithEmailAndPassword(auth,email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }
    return (
    < View style={styles.container}>
        <View style = {styles.top}>
            <Text style= {styles.heading}>הירשם</Text>
        </View>
        <View style = {styles.bottom}>
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
                <TextInput placeholder='Confirm Password:' 
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={confirmPassword}
                onChangeText={text=>setConfirmPassword(text)}
                secureTextEntry
                />
                <TouchableOpacity style = {styles.buttons} onPress = {handleSignUp}>
                    <Text style = {styles.buttonText} >הירשם</Text>
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

    },
    top:{
       width:'100%',
       height:'30%',
       display:'flex',
       alignItems:'flex-start',
       justifyContent:'flex-end',
       paddingBottom:30,
       paddingLeft:30,
    },
    bottom:{
        width:'100%',
        height:'70%',
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
    
})
export default SignUpScreen