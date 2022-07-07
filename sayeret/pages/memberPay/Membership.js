import React, { useState, useEffect} from 'react'
import {Text, View, StyleSheet,Modal,SafeAreaView, TouchableOpacity} from 'react-native';
import { TouchableRipple} from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {WebView} from 'react-native-webview';
import { db } from '../../firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';


const PayMember = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [link, setLink] = useState("")

  useEffect(()=>{
    const q  = query(collection(db,'edits'));
    onSnapshot(q, result=>{
      result.docs.forEach(doc=>{
        if(doc.id == "memberPayment")
          setLink(doc.data().link)
      })
    })
  },[])

  return (
    <View>
        <TouchableOpacity style={styles.memberBtn} onPress = {()=> setIsVisible(true)}>
            <Text style={styles.text}>תשלום חברות</Text>
        </TouchableOpacity>
      <Modal visible = {isVisible}>
        <SafeAreaView style={styles.header}>   
            <TouchableRipple style = {{alignItems: 'flex-start'}}
            onPress={()=>{setIsVisible(false)}}>
                <Icon
                    name='arrow-right-thick'
                    size={35}
                    
                    
                />
            </TouchableRipple>
            {/* <Text style={styles.name}>{user.name}</Text> */}
        </SafeAreaView>
        <WebView 
          source={{uri:link}}
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
  header: {
    backgroundColor:"#485260"
  }
})