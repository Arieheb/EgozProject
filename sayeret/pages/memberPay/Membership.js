import React, { useState, useEffect } from 'react'
import { TouchableRipple,Avatar} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from 'react-native-vector-icons/Ionicons';

import {WebView} from 'react-native-webview';


import {Platform,Text, View, StyleSheet, FlatList,Modal,SafeAreaView, Alert, TextInput, TouchableOpacity} from 'react-native';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc} from 'firebase/firestore';
import { db,storage } from '../../firebase';
import { ref,getDownloadURL, deleteObject  } from 'firebase/storage';


  


const PayMember = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
        <TouchableOpacity style={styles.memberBtn} onPress = {()=> setIsVisible(true)}>
            <Text style={styles.text}>תשלום חברות</Text>
        </TouchableOpacity>
    <Modal visible = {isVisible}>
    <SafeAreaView style={styles.header}>   
                    <TouchableRipple style = {{alignItems: 'flex-start',backgroundColor:"#485260", 
}}
                    onPress={()=>{setIsVisible(false)}}>
                        <Icon
                            name='arrow-right-thick'
                            size={30} 
                        />
                    </TouchableRipple>
                    {/* <Text style={styles.name}>{user.name}</Text> */}
                </SafeAreaView>
      <WebView 
        source={{uri:"https://shop117095.istores.co.il/%D7%97%D7%91%D7%A8-%D7%A2%D7%9E%D7%95%D7%AA%D7%94-%D7%97%D7%91%D7%A8%D7%95%D7%AA-%D7%A9%D7%A0%D7%AA%D7%99%D7%AA/"}}
        injectedJavaScript='document.getElementsByTagName("footer")[0].setAttribute("hidden", true);'
    />
    </Modal>
    </View>
    
  )
}

export default PayMember

const styles = StyleSheet.create({
  memberBtn:{
    borderWidth:2,
    borderRadius:20,
    backgroundColor:"white",
    borderColor:"gray",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginRight: 6
  },
  text:{
    justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      fontSize: 18,
  },
})