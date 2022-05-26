import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
// import { signOut } from 'firebase/auth';
import { collection, addDoc, updateDoc,doc, query, orderBy, onSnapshot, limit } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

const WriteToForum = (props) => {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
      const collectionRef = collection(db, 'chats', props.id, 'chat');
      const q = query(collectionRef, orderBy('createdAt', 'desc'), limit(20));
  
      const unsubscribe = onSnapshot(q, querySnapshot => {
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            createdAt: doc.data().createdAt.toDate(),
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });
  
      return () => unsubscribe();
    }, []);
  
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
    />
  )
}

export default WriteToForum