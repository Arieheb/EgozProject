import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { auth, db } from '../../firebase';
import { collection, addDoc, updateDoc,doc, query, orderBy, onSnapshot, limit, startAfter, getDocs, getDoc,where } from 'firebase/firestore';
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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

  // compares two messages and sees if it is from the same user
  function isSameUser(a, b){

    if(!a.user || !b.user)
      return false;
    return (a.user.name === b.user.name)? true: false;}

  //comapres two messages and sees if it is on the same day or not
  function isSameDay(a, b){
    let dayA = new Date(a.createdAt)
    let dayB = new Date(b.createdAt)
    return dayA.getDate()===dayB.getDate()?true: false;
  }

//-----------------------------------------rendering the chat  ----------------------------------------------------------------
  //renders the text bubble
  function bubble(props) {
    if (isSameUser(props.currentMessage, props.previousMessage) &&  isSameDay(props.currentMessage, props.previousMessage)) {
      return (
        <Bubble {...props}/>
      );
    }
    return (
      <View style={styles.bubble}>
        <Text style={styles.name}>{props.currentMessage.user.name}</Text>
        <Bubble {...props}  textStyle={{
                                    right: {
                                        color: 'white',
                                    },
                                    left: {
                                        color: '#24204F',
                                    },
                                }}
                                wrapperStyle={{
                                    left: {
                                        backgroundColor: 'white',
                                    },
                                    right: {
                                        backgroundColor: "#ff3b00", // red
                                    },
                                }} />
      </View>
    );
  }

  //renders the send button
  function sendButton(props){
    return(
      <Send {...props} containerStyle={styles.send}>
        <Icon style={styles.icon} name='send' color="white" size={24}/>
      </Send>
    )
  }

  function toolBar(props){
    return(
      <InputToolbar {...props} containerStyle={styles.inputContainer}/>
    )
  }
//---------------------------------------------------------------------------------------------------
   //adding the new message to the database
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const { _id, createdAt, text, user,} = messages[0]
    addDoc(collection(db, 'chats',props.id,'chat'), { _id, createdAt,  text, user});
    updateDoc(doc(db,'chats',props.id),{"last_time":createdAt, "last_message":text});
  }, [])

  return (
      <GiftedChat
        placeholder='תכתוב משהו...'
        messages={messages}
        renderAvatar={null}
        renderSend = {sendButton}
        renderUsernameOnMessage={true}
        renderInputToolbar = {toolBar}
        bottomOffset={0}
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
const styles = StyleSheet.create({
  name:{
    color:'blue',
  },

  send:{
    height:45,
    width:45, 
    backgroundColor:"gray",
    borderRadius:25,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:0,

  },
  icon:{
    transform:[{rotateY: '180deg'}]
  },
  inputContainer:{
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 25
  },
  bubble:{
    backgroundColor:'red',
    maxWidth:300
  }

})