import React, { useState, useEffect } from 'react';
import {  Modal, Image, Dimensions, Pressable, View,ScrollView, Text, StyleSheet} from 'react-native';
import {auth, db, storage} from '../../firebase';
import {ref, getDownloadURL} from 'firebase/storage';

const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;

const Blurp = (props) => {
  const [imageUrl, setImageUrl] = useState (undefined);
  useEffect (() => {
   getDownloadURL( ref(storage, props.image)).then ((url)=> {
      setImageUrl (url);
    })
    .catch ((e)=> console.log ('ERROR=>', e));
  }, []);
  
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
   
    <View style={styles.centeredView} >
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image source={{uri: imageUrl}} style = {{width: 100, height: 130, borderRadius: 50}} />
        <Text style={styles.textStyle}>{props.name}</Text>
        <Text style={styles.moreTextStyle}>קרא עוד</Text>

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
                  <Image source={{uri: imageUrl}} style = {{width: 100, height: 130}} />
                </View>
                <View name = 'buried'>
                  <Text style={styles.nameEdit}>{props.name} ז"ל</Text>
                  <Text style= {{fontWeight: 'bold', textAlign: 'left', fontSize: 17, textDecorationLine: 'underline'}}>מקום קבורה </Text>
                  <Text style = {styles.textDesign}>בית קברות: {props.semitary} </Text>
                  <Text style = {styles.textDesign}>חלקה: {props.part} </Text>
                  <Text style = {styles.textDesign}>שורה: {props.row} </Text>
                  <Text style = {styles.textDesign}>קבר: {props.graveNumber} </Text>
                </View>
            </View>

          
            <View name= 'information' style = {styles.infoSection}>
            <ScrollView>
              <Text style={styles.textDesign}>{props.info}</Text>             
              </ScrollView>
            </View>
          
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>הסתר</Text>
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
      textAlign: 'left',

    },

    topArea: {
      flexDirection: 'row',
      margin: 5,  
      

    },
    proPic: {
      padding: 10,     
    }, 



    centeredView: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 5,
      padding: 5,      
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: 0.8,
      shadowRadius: 4,
      elevation: 5,
      
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
      elevation: 2,
      maxWidth:110,
      height:205,
      alignItems:'center',
    },
    buttonOpen: {
      backgroundColor: 'black',
      borderRadius: 50,
      
      
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      
    },
    moreTextStyle: {
      textAlign: 'center',
      textDecorationLine: 'underline',
            color: 'white'

    },
    modalText: {
      marginBottom: 15,
      
    }
  });
  