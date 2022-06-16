import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {WebView} from 'react-native-webview';
import { updateDoc, doc } from 'firebase/firestore';
import { auth,db } from '../../firebase';

const Store = () => {
  return (
    <WebView 
        source={{uri:"https://shop117095.istores.co.il/#"}}
        injectedJavaScript='document.getElementsByTagName("footer")[0].setAttribute("hidden", true);'
    />
  )
}

export default Store

const styles = StyleSheet.create({})