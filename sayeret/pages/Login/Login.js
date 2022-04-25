import {React,useState,} from 'react';
import {View,StyleSheet,Image,TextInput,Button} from 'react-native';
import Logo from '../../assets/Images/logo.png';


const LoginScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
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
                />
            </View>
            <View>
                <Button title='היכנס' style={styles.button}></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:30,
    },
    logo:{
        width:'70%',
        maxHeight:'30%',
    },
    input: {
        margin: 10,
        paddingHorizontal: 25,
    },
    button:{
        
    }
    
})
export default LoginScreen