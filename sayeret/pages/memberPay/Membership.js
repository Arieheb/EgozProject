import React, { useState } from 'react'
import { StyleSheet,TouchableOpacity,Modal, Text, View } from 'react-native'
import {WebView} from 'react-native-webview';


  


const PayMember = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
    <TouchableOpacity 
  style={styles.memberBtn} 
  onPress = {()=> setIsVisible(true)}>
                      <Text 
                      style={styles.text}
                      >תשלום חברות</Text>
                  </TouchableOpacity>
    <Modal visible = {isVisible}>
      <WebView 
        source={{uri:"https://shop117095.istores.co.il/%D7%97%D7%91%D7%A8-%D7%A2%D7%9E%D7%95%D7%AA%D7%94-%D7%97%D7%91%D7%A8%D7%95%D7%AA-%D7%A9%D7%A0%D7%AA%D7%99%D7%AA/"}}
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
  },
  text:{
    justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      fontSize: 18,
  },
})