import React, { useEffect, useState } from 'react'
import { StyleSheet} from 'react-native'
import {WebView} from 'react-native-webview';
import { db } from '../../firebase';
import { collection, onSnapshot, query, } from 'firebase/firestore';

const Store = () => {
  const [link, setLink] = useState("");

  useEffect(()=>{
    const q  = query(collection(db,'edits'));
    onSnapshot(q, result=>{
      result.docs.forEach(doc=>{
        if(doc.id == "store")
          setLink(doc.data().link)
      })
    })
  },[])

  return (
    <WebView 
        source={{uri:link}}
        injectedJavaScript='document.getElementsByTagName("footer")[0].setAttribute("hidden", true);'
    />
  )
}

export default Store

const styles = StyleSheet.create({})