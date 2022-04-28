import {React,useState,} from 'react';
import {View,StyleSheet,Image,TextInput,Button,Text,TouchableOpacity,Dimensions} from 'react-native';
import Logo from '../../assets/Images/logo.png';
import {validate} from 'react-email-validator';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const{width,height:wHeight} = Dimensions.get("window");

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
        <KeyboardAwareScrollView style={styles.container} scrollEnabled={false}>
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
                    <View style= {styles.gf = { flexDirection:"row" }}>
                        <TouchableOpacity style={styles.gfButtons}>
                            <Text style = {styles.gfText}>google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.gfButtons}>
                            <Text style = {styles.gfText}>facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container:{
       height:wHeight,
       marginTop:40,
       flexDirection:'column',
    },
    top:{
       width:'100%',
       height:'40%',
       display:'flex',
       alignItems:'center',
       padding:10,
    },
    bottom:{
        width:'100%',
        height:'60%',
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
    gf:{
        alignItems:'center',
        justifyContent:'center',
    
    },
    gfButtons:{
        paddingTop:20,
        padding:30,
        margin:20,
    },
    gfText:{
        fontWeight:'bold',
        fontSize:16,
    },
    
})
export default LoginScreen