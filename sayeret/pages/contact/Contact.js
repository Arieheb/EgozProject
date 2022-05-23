import React from 'react'
import { StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview';


const Contact = (props) => {
    return (
        <WebView 
            source={{uri:"https://shop117095.istores.co.il/contact/"}}
        />
      )
}
export default Contact 
