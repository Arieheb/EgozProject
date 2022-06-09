import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import {doc,collection, query, where, onSnapshot, updateDoc, deleteDoc, orderBy} from 'firebase/firestore'
import {db} from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { async } from '@firebase/util'

const accept = (id)=>{
  updateDoc(doc(db,'users',id),{'guest':false});
  return false;
} 

const decline = (id, userId)=>{
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

const makeAdmin = (id)=>{
  updateDoc(doc(db,'users',id),{'isaAdmin':true});
  return false;
}

const GuestItem = props=>{
  const [visible, setVisiblity] = useState(false);
  return(
    <View>
      <View style = {styles.newUsers}>
      <Text>{props.name} רוצה להצטרף</Text>
      <TouchableOpacity style = {styles.buttensStyle} onPress={()=>setVisiblity(true)}>
        <Text style = {styles.buttensText}>אפשרויות</Text>
      </TouchableOpacity>
      </View>
      <Modal visible={visible} transparent={true}>
       <View style = {{backgroundColor: "rgba(0,0,0,0.5)", height: '100%'}}>
        <View style={styles.modal}>
        <Text style = {styles.textStyle} >{props.name}</Text>
        <Text>שאלון אימות:</Text>
        <Text>שירת ביחידה: {props.questionaire.inUnit?"כן":"לא"}</Text>
        {props.questionaire.inUnit?
        <View>
        <Text>שנתון: {props.questionaire.year}</Text>
        <Text>מחזור: {props.questionaire.generation}</Text>
        <Text>צוות: {props.questionaire.team}</Text>
        </View>:
        <Text>סיבת הצטרפות: {props.questionaire.why}</Text>
        }

        <TouchableOpacity style = {styles.buttensStyle} onPress={()=>setVisiblity(accept(props.id))}>
          <Text style = {styles.buttensText}>אשר</Text>
        </TouchableOpacity>        
        <TouchableOpacity style = {styles.buttensStyle} onPress={()=>setVisiblity(decline(props.id, props.userId))}>
          <Text style = {styles.buttensText}>סרב</Text>
        </TouchableOpacity> 
        <View >
        <TouchableOpacity style={styles.returnButten} onPress={()=>setVisiblity(false)}>
          <Icon name="arrow-right-thick" size={55}/>
        </TouchableOpacity>
        </View>
        </View>  
        </View>     
      </Modal>
    </View>
  );
}

const removeAdmin = id=>{
  updateDoc(doc(db,'users',id),{'isAdmin':false});
  return false;
}

const UserItem = props=>{
  const user = props.user
  const [visible,setVisiblity] = useState(false);
  return(
    <View>
      <Text>{user.fname} {user.lname}</Text>
      <TouchableOpacity onPress={()=>setVisiblity(true)}>
        <Text>פרטים נוספים</Text>
      </TouchableOpacity>

      <Modal visible={visible}>
        <TouchableOpacity onPress={()=>setVisiblity(false)}>
          <Icon name="arrow-right-thick" size={55}/>
        </TouchableOpacity>
          <Text>{user.fname} {user.lname}</Text>
          <Text>פרטים</Text>
          <Text>כתובת: {user.address}</Text>
          <Text>עיר: {user.city}</Text>
          <Text>אימייל: {user.email}</Text>
          <Text>טלפון: {user.phone}</Text>
          <Text>היה ביחידה: {user.questionaire.inUnit?"כן" : "לא"}</Text>
          {props.admin?
          <View>
            <TouchableOpacity onPress={()=>setVisiblity(removeAdmin(user.id))}>
              <Text>הסר כמנהל</Text>
            </TouchableOpacity>
          </View>
          :
          <View>
          <TouchableOpacity onPress={()=>setVisiblity(makeAdmin(user.id))}>
            <Text>הפוך למנהל</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setVisiblity(decline(user.id,user.userId))}>
            <Text>הסר משתמש</Text>
          </TouchableOpacity>
          </View>
          }
      </Modal>
    </View>
  );
}
 

const Admin = () => {
  const [load, setLoad] = useState(false);
  const [everyBody, setEveryBody] = useState([]);
  const [newUsers, setWaiter] = useState([]);
  const [allUsers, setUser] = useState([]);
  const [admins, setAdmins] = useState([]);
  //getting the new users
  useEffect (async()=>{
    const ref = collection(db, 'users');
    const que = query (ref,orderBy('guest','asc'));
    const unsubscribe = onSnapshot(que, querySnapshot => {
      setEveryBody(
        querySnapshot.docs.map(doc => ({
          id: doc.id,
          fname: doc.data().FirstName,
          lname: doc.data().LastName,
          questionaire: doc.data().questionaire,
          userId: doc.data().user_id,
          guest: doc.data().guest,
          admin: doc.data().isAdmin,
          email: doc.data().email,
          address: doc.data().Address,
          city: doc.data().city,
          phone: doc.data().phone,
          
        }))
      );
        setWaiter(everyBody.filter(item=>item.guest))
        setUser(everyBody.filter(item=>!item.guest&&!item.admin))
        setAdmins(everyBody.filter(item=>item.admin))
        setLoad(true);
    });
    return () => unsubscribe();
 },[]);

  return !load?null:(
    <View>
        <View>
          <Text>משתמשים חדשים</Text>
          <FlatList data={newUsers}
          keyExtractor = {item=> item.id}
          renderItem = {(data)=><GuestItem userId={data.item.userId} id={data.item.id} name={data.item.fname+" "+data.item.lname} questionaire={data.item.questionaire}/>}
          />
        </View>
        <View style={{width:'100%', borderWidth:1}}/>
        <View>
            <Text>ניהול משתמשים</Text>
            <FlatList
              data = {allUsers}
              keyExtractor = {item=> item.id}
              renderItem ={(data)=><UserItem user={data.item} admin={false}/>}
            />
        </View>
        <View style={{width:'100%', borderWidth:1}}/>
        <View>
          <Text>ניהול מנהלים</Text>
          <FlatList
              data = {admins}
              keyExtractor = {item=> item.id}
              renderItem ={(data)=><UserItem user={data.item} admin={true}/>}
            />
        </View>
     

    </View>

  )
}

export default Admin

const styles = StyleSheet.create({
  newUsers: {
    backgroundColor: "white",
    borderRadius: 25,
    margin: 5,
    padding: 5,
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1
  },
  buttensStyle: {
    backgroundColor:"white",
    fontSize:14,
    borderWidth: 1,
    padding: 5,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    height: 40,
},
buttensText: {
  textAlign: 'center',
  fontWeight:"bold",
},
textStyle: {
  fontSize:20,
  fontWeight:"bold",
},
modal: {
  backgroundColor: "white",
  borderRadius: 25,
  marginTop: '50%',
  marginHorizontal: '2.5%',
  padding: 40,
  height: 310,
  width: '95%',
  flexDirection: "column",
  alignItems: "center",
  borderColor: "black",
  borderWidth: 1,
  shadowOffset: {
    width: 2,
    height: 2
  },
  shadowOpacity: 0.5,
  shadowRadius: 4,
  elevation: 5,
},
returnButten: {
  justifyContent: 'flex-start', 
},
})