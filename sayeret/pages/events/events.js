import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import AddEvent from './AddEvent';
import { Navigation } from 'react-calendar';
import PButton from '../../assets/Images/plusButton.png';


const EventCal = props => {
    // const [value, onChange] = useState(new Date());
    // <Text>hello</Text>
    return (
        <ScrollView>
            <View>
                <Text>לוח האירועים שלי</Text>

                    <TouchableOpacity style = {styles.buttons} onPress={()=>props.navigation.navigate('AddEvent')}>
                        <Text style= {styles.buttonText} >+</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

export default EventCal


const styles = StyleSheet.create ({ 

    buttons: {
        borderRadius: 100,
        // // paddingRight:10,
        // margin:5,
        // paddingLeft: 7,
        borderWidth:1,
        alignSelf:'stretch',
        height: 50,
        width: 50,
        alignItems: 'center',
        alignSelf: 'flex-end'
        // position: 'relative'
},
buttonText: {
    textAlign: 'center',
    alignContent: 'flex-end',
    fontSize: 30,
    paddingTop: 2, 
    
},
   






});