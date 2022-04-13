import React from 'react';
import {View,StyleSheet,Image,TextInput} from 'react-native';
import Logo from '../images/logo.png';

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={Logo} 
                styles={[styles.logo,{height:height*0.3}]} 
                resizeMode="contain"
                />
            </View>
            <View>
                <TextInput placeholder='Email:'/>
                <TextInput placeholder='Password:'/>
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
    },
})