import React, {useState, useEffect} from 'react';
import {Platform,Text,Button, View, StyleSheet, FlatList,Modal,SafeAreaView, Alert} from 'react-native';
import { TouchableRipple,Avatar} from 'react-native-paper';
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import Profile from "../../assets/Images/profile.png"
import WriteToForum from './forumWrite';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import OpenForum from './OpenForum';


//formatting the date to the currect format
function dateFormat(timeStamp){
    let time = new Date(timeStamp.toMillis());
    let today = new Date();

    let tday =today.getDate();
    let tmonth = parseInt(today.getMonth()+1);
    let tyear =today.getFullYear();

    let day = time.getDate();
    let month = parseInt(time.getMonth()+1);
    let year  = time.getFullYear();


    let min = time.getMinutes();
    if(min<10){
        min = '0' + min;
    }
    let date;

    if(year-tyear==0 && month-tmonth==0 && tday-day<2){
        if(tday-day == 1)
            date = "אתמול"
        else if(tday-day == 0)
            date = time.getHours()+":"+min;
    }
    else
        date = day + "/"+ month+"/"+year;

    return date;
}

//deletes a chat from the app
const Delete =(id)=>{
    Alert.alert(
        "למחוק?",
        "האם אתה בטוח שאתה רוצה למחוק את הפורום הזה",
        [
          {
            text: "בטל",
            onPress: () => {return},
          },
          {
            text: "מחק",
            onPress: async () => {
                await deleteDoc(doc(db, "chats", id));
            },
        },
    ],
    );
   
}

const ForumItem = props=>{
    const user = props.user
    const [visible,setVisible] = useState(false);
    return(
        <View>
            {/* the item */}
            <TouchableRipple onLongPress={()=>Delete(user.id)} onPress={()=>{setVisible(true)}}>
                <View style={styles.container}>
                    <Avatar.Image source={!user.image?Profile:user.image}/>
                    <View style={styles.mid}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.message} numberOfLines={1}>{user.last_message}</Text>
                    </View>
                    <Text style={styles.last}>{dateFormat(user.last_time)}</Text>
                </View>
            </TouchableRipple>
            
            {/* the chat room */}
            <Modal visible={visible}>
                <SafeAreaView style={styles.header}>   
                    <TouchableRipple onPress={()=>{setVisible(false)}}>
                        <Icon
                            name='arrow-right-thick'
                            size={30} 
                        />
                    </TouchableRipple>
                    <Avatar.Image 
                        source={!user.image?Profile:user.image}
                        size={40}
                        style={{marginLeft:20,marginRight:10}}
                    />
                    <Text style={styles.name}>{user.name}</Text>
                </SafeAreaView>
                <WriteToForum id={user.id} params={props.params}/>
            </Modal>
        </View>    
    );
}

const Forum = props=>{
    const [forumList, updateForumList] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, 'chats');
        const q = query(collectionRef, orderBy('last_time', 'desc'));
    
        const unsubscribe = onSnapshot(q, querySnapshot => {
          updateForumList(
            querySnapshot.docs.map(doc => ({
              id:doc.id,
              name: doc.data().name,
              last_time: doc.data().last_time,
              last_message: doc.data().last_message,
            }))
          );
        });
        return () => unsubscribe();
      }, []);

    return(
        
        <View>
            <FlatList data={forumList}
                style={{height:"95%"}}
                keyExtractor = {item=>item.id}
                renderItem={(data)=><ForumItem  user={data.item} params={props.route.params}/>}
            />
            <OpenForum/>        
        </View> 
    );
};

const styles = StyleSheet.create({
    name:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf: "flex-start",
        marginTop:5,
    },
    message:{
        alignSelf: "flex-start",
    },
    last:{
        alignItems:'flex-start',
    },
    mid:{
        width:"50%",
        marginLeft:20,
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        marginHorizontal:20
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        backgroundColor:"#00aadd",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        paddingTop: Platform.OS === 'ios'? 30:15,
        paddingLeft:5,
        
    }

})

export default Forum
