import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import {doc,collection, query, where, onSnapshot, updateDoc, deleteDoc} from 'firebase/firestore'
import {db} from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const accept = (id)=>{
  updateDoc(doc(db,'users',id),{'guest':false});
  return false;
} 

const decline = (id)=>{
  Alert.alert(
    "למחוק?",
    "האם אתה בטוח שאתה רוצה למחוק את המשתמש הזה",
    [
      {
        text: "בטל",
        onPress: () => {return},
      },
      {
        text: "מחק",
        onPress: async () => {
            await deleteDoc(doc(db, "users", id));
        },
    },
],
);

  return false;
}


GuestItem = props=>{
  const [visible, setVisiblity] = useState(false);
  return(
    <View>
      <Text>{props.name}</Text>
      <TouchableOpacity onPress={()=>setVisiblity(true)}>
        <Text>סתכל</Text>
      </TouchableOpacity>
      <Modal visible={visible}>
        <TouchableOpacity onPress={()=>setVisiblity(false)}>
          <Icon name="arrow-right-thick" size={20}/>
        </TouchableOpacity>
        <Text>{props.name}</Text>
        {/* {props.questionaire.map((item, index) => (
         <Text key={index}>{item.productTitle}</Text>
        ))} */}

        <TouchableOpacity onPress={()=>setVisiblity(accept(props.id))}>
          <Text>אשר</Text>
        </TouchableOpacity>        
        <TouchableOpacity onPress={()=>setVisiblity(decline(props.id))}>
          <Text>בטל</Text>
        </TouchableOpacity>        
      </Modal>
    </View>
  );
}


const Admin = () => {
  const [newUsers, setWaiter] = useState([]);
  //getting the new users
  useEffect (async()=>{
    const ref = collection(db, 'users');
    const que = query (ref,where("guest","==",true));
    const unsubscribe = onSnapshot(que, querySnapshot => {
      setWaiter(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          fname: doc.data().FirstName,
          lname: doc.data().LastName,
          questionaire: doc.data().questionaire,
        }))
      );
    });
    return () => unsubscribe();
 },[]);

  return (
    <View>
        <View>
        <Text>ניהול משתמשים</Text>
        <FlatList data={newUsers}
        keyExtractor = {item=> item.id}
        renderItem = {(data)=><GuestItem id={data.item.id} name={data.item.fname+" "+data.item.lname} questionaire={data.item.questionaire}/>}
        />
        </View>

        <View>
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
     

    </View>

  )
}

export default Admin

const styles = StyleSheet.create({})