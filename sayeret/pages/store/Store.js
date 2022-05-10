import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {WebView} from 'react-native-webview';
const Store = () => {
  return (
    <WebView 
        source={{uri:"https://shop117095.istores.co.il/#"}}
    />
  )
}

export default Store

const styles = StyleSheet.create({})