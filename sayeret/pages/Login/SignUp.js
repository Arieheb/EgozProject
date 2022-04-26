import React from 'react';
import {View,StyleSheet,Image,TextInput} from 'react-native';

const SignUpScreen = () => {
    return (
    <View style={styles.container}>
        <View>
         <Text>הירשם</Text>
        </View>
        <View>
         <TextInput placeholder='Email:'/>
         <TextInput placeholder='Password:'/>
         <TextInput placeholder='confirm Password:'/>
        </View>
    </View>

    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:35,
    }
})
