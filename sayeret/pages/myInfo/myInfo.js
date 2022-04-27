import {React, useState,Component} from "react";
import {Text, AppRegistry, View, StyleSheet, Image, TextInput, Button} from 'react-native';
//import Logo from '../../assets/Images/logo.png';
// import {validate} from 'react-email-validator';
import { Header } from "react-native-elements";

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';



const MoreOptions = () => {
    return (
        <View>
            <Text> teest</Text>
        </View>
    );
};

export default MoreOptions

