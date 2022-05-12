import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Profile from '../../assets/Images/profile.png';
import {Avatar,Title,Caption, Drawer, TouchableRipple} from 'react-native-paper'



const Blurp = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View style={styles.centeredView} >
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image source={Profile} style = {{width: 100, height: 130}} />
        <Text style={styles.textStyle}>{props.name}</Text>
      </Pressable>
     


      <Modal
        animationType= "fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>

        <View name = 'main view' style={styles.centeredView}>
          <View style={styles.modalView}>
            <View name='top area' style = {styles.topArea} >
                <View name = 'profile picture' style={styles.proPic}>
                  <Image source={Profile} style = {{width: 100, height: 130}} />
                </View>
                <View name = 'buried'>
                  <Text style={styles.nameEdit}>{props.name} ז"ל</Text>
                  <Text style= {{fontWeight: 'bold', textAlign: 'right', fontSize: 17}}>מקום קבורה </Text>
                  <Text style = {styles.textDesign}>בית קברות: קרית גת</Text>
                  <Text style = {styles.textDesign}>חלקה: 1</Text>
                  <Text style = {styles.textDesign}>שורה: 2</Text>
                  <Text style = {styles.textDesign}>קבר: 1</Text>
                </View>
            </View>

          
            <View name= 'information' style = {styles.infoSection}>
            <ScrollView>
              <Text style={styles.textDesign}>{props.info}</Text>
              <Text style={styles.textDesign}>{props.link}</Text>
              </ScrollView>
            </View>
          
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>minimize</Text>
            </Pressable>
          </View>
        </View>
        
      </Modal>


      


      
    </View>
  );
  };
  
  export default Blurp 

  const styles = StyleSheet.create({
    nameEdit: {
      paddingTop: 10,
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 'bold',
    },

    textDesign: {
      textAlign: 'right',

    },

    topArea: {
      flexDirection: 'row-reverse',
      margin: 5,  

    },
    proPic: {
      padding: 10,     
    }, 



    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 220,
      
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      
    },

    infoSection: {
      flex:1,
      margin: 5, 
      padding: 5,
    }, 
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      // backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      // color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    modalText: {
      marginBottom: 15,
      
    }
  });
  