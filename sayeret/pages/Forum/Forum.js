import React from 'react';
import { View,Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const OpenForum = props=>{
    return(
        <NavigationContainer>
        <View>
            <Text>OpenForum</Text>
            <Button title='open a forum'></Button>
        </View>
        </NavigationContainer>
    );
}

export default OpenForum;