import React, { useCallback, useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { collection, setDoc, doc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { GiftedChat } from 'react-native-gifted-chat';

const WriteToForum = props => {
    const [messages, setMessages] = useState([]);
 
    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello there start working of the app',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, []);
    const onSend = useCallback((messages=[]) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
        setDoc(doc(collection(db,"chats"),messages[0]._id),{text:messages[0].text, createdAt:messages[0].createdAt})
    }, []);
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
