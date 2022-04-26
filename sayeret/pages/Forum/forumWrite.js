import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { collection, setDoc, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

const WriteToForum = props => {
    const [messages, setMessages] = useState([]);
 
    
    useLayoutEffect(() => {
        const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user,
            }))
        ));

        return () => {
          unsubscribe();
        };

    }, [props.navigation]);
    
    const onSend = useCallback((messages=[]) => {
        console.log(messages[0])
        const { _id, createdAt, text, user,} = messages[0]
        // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        setDoc(doc(collection(db,"chats"),messages[0]._id),{ _id:_id, createdAt:createdAt})
    });

    return (
        <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={true}
            onSend={messages => onSend(messages)}
            user={{
                _id: auth?.currentUser?.email,
                name: auth?.currentUser?.displayName,
                avatar: auth?.currentUser?.photoURL
            }}
        />
    );
}

export default WriteToForum
