import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Blurp from './ModalTemp';



const Memorial = (props) => {
    return (
        <View>
            <View name = 'Avner Saadon'>
                <Blurp/>
            </View>
            
            <View name = 'Avraham hameiri'>
                <Blurp/>
            </View>

            <View name = 'Eduard '>
                <Blurp/>
            </View>
            
            <View name = 'Offir planter'>
                <Blurp/>
            </View>

            <View name = 'ofek klugman'>
                <Blurp/>
            </View>

            <View name = 'Eliyahu mitlman'>
                <Blurp/>
            </View>

            <View name = 'Alexsander shwartsman'>
                <Blurp/>
            </View>

            <View name = 'Amnon bar ner'>
                <Blurp/>
            </View>
        </View>
    );
  };
  
  export default Memorial 

  const styles = StyleSheet.create({
    centeredView: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 80,
    //   backgroundColor: "white",
      borderRadius: 20,
    //   padding: 35,
    //   alignItems: "center",
    //   shadowColor: "#000",
    //   shadowOffset: {
    //     width: 0,
    //     height: 2
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 4,
    //   elevation: 5
    },
    button: {
      borderRadius: 100,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  