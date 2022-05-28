import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
// import { signOut } from 'firebase/auth';
import { collection, addDoc, updateDoc,doc, query, orderBy, onSnapshot, limit, startAfter, getDocs, getDoc,where } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';


const WriteToForum = (props) => {
    const [messages, setMessages] = useState([]);
    
    //when page is loaded get the last 20 messages
    useEffect(async () => {
      setMessages([]);
      const collectionRef = collection(db, 'chats', props.id, 'chat');
      const q = query(collectionRef, orderBy('createdAt', 'desc'), limit(20));
      const unsubscribe = onSnapshot(q, querySnapshot => {
        let newInfo = querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user
        }))
        setMessages(messages.concat(newInfo));
      });
  
      return () => unsubscribe();
    }, []);

    //loading messages when close to the top of the chat
    const onLoadEarlier = async ()=>{
      const collectionRef = collection(db, 'chats', props.id, 'chat');
       const qu = query(collection(db,'chats',props.id,'chat'), where("_id","==",messages[messages.length-1]._id))
       const results = await getDocs(qu);
       let id;
       results.forEach(doc=>{
         id = doc.id
       })

       const adoc =await getDoc(doc(db,'chats',props.id,'chat',id));
       const q = query(collectionRef, orderBy('createdAt', 'desc'), limit(10), startAfter(adoc));
       const result = await getDocs(q);

       let newInfo = result.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user
      }))
       setMessages(messages.concat(newInfo))
    }
  
    //checking whether close to the top or not
   function isCloseToTop({ layoutMeasurement, contentOffset, contentSize }) {
    const paddingToTop = 80;
    return contentSize.height - layoutMeasurement.height - paddingToTop <= contentOffset.y;
   }


   //adding the new message to the database
  const onSend = useCallback((messages = []) => {

    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user,} = messages[0]
    addDoc(collection(db, 'chats',props.id,'chat'), { _id, createdAt,  text, user});
    updateDoc(doc(db,'chats',props.id),{"last_time":createdAt, "last_message":text});

  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        
      }}
      //when getting to the top load previous messages
      listViewProps={{
        scrollEventThrottle: 400,
        onScroll: ({ nativeEvent }) => {
          if (isCloseToTop(nativeEvent)) {
            onLoadEarlier();
          }
        }
      }}
    />
  )
}

export default WriteToForum