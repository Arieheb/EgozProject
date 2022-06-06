import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native'
import React, {useEffect, useState} from 'react'
import {collection, query, where, getDocs} from 'firebase/firestore'
import {db} from '../../firebase'

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
          <Text>אשר</Text>
        </TouchableOpacity>        
        <TouchableOpacity>
          <Text>בטל</Text>
        </TouchableOpacity>        
      </Modal>
    </View>
  );
}


const Admin = () => {
  const [newUsers, setWaiter] = useState([]);
  useEffect (async()=>{
    const ref = collection(db, 'users');
    const que = query (ref,where("guest","==",true));
    const results = await getDocs(que)
    const p=[]
    results.forEach(doc=>{
      p.push({
        id: doc.id,
        fname: doc.data().FirstName,
        lname: doc.data().LastName,
        questionaire: doc.data().questionaire,
      })
    })
    setWaiter(p);
 },[]);

  return (
    <View>
        <View>
        <Text>ניהול משתמשים</Text>
        <FlatList data={newUsers}
        keyExtractor = {item=> item.id}
        renderItem = {(data)=><GuestItem name={data.item.fname+" "+data.item.lname} questionaire={data.item.questionaire}/>}
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