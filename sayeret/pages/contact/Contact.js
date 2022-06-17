import React from 'react'
import {WebView} from 'react-native-webview';


const Contact = (props) => {
    return (
        <WebView 
            source={{uri:"https://shop117095.istores.co.il/contact/"}}
            injectedJavaScript='document.getElementsByTagName("footer")[0].setAttribute("hidden", true);
            document.getElementsByTagName("header")[0].setAttribute("hidden", true);
            document.getElementsByClassName("form-group af-inner")[document.getElementsByClassName("form-group af-inner").length-2].setAttribute("hidden", true)'
        />
      )
}
export default Contact 
