import {SafeAreaView, StyleSheet,TextInput, Text, View, TouchableOpacity, FlatList, Modal, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import {doc,collection, query, where, onSnapshot, updateDoc, deleteDoc, orderBy, addDoc} from 'firebase/firestore'
import {db, storage} from '../../firebase'
import { ref, deleteObject } from 'firebase/storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/Ionicons'

const accept = (id)=>{
  updateDoc(doc(db,'users',id),{'guest':false});
  return false;
} 

const decline = (id, userId,pic)=>{
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
            addDoc(collection(db,'denied'),{userId:userId});
            if(pic!=""){
              deleteObject(ref(storage,"profile/"+pic))
            }
            await deleteDoc(doc(db, "users", id));
        },
    },
],
);

  return false;
}

const makeAdmin = (id)=>{
  updateDoc(doc(db,'users',id),{'isAdmin':true});
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
        <TouchableOpacity style = {styles.buttensStyle} onPress={()=>setVisiblity(decline(props.id, props.userId, props.pic))}>
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
          <TouchableOpacity onPress={()=>setVisiblity(decline(user.id, user.userId, user.pic))}>
            <Text>הסר משתמש</Text>
          </TouchableOpacity>
          </View>
          }
      </Modal>
    </View>
  );
}
 
const Search = (props) => {
  const list = props.list;

  const [searchList, setSearchList] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  //getting the list according to the input
  const searcher = (name)=>{
      setSearchList(list.filter(item=>(String(item.fname+item.lname).includes(name))));
  }

  useEffect(()=>{setSearchList(list)},[])


return (
  <View>
    <TouchableOpacity onPress={()=>setVisible(true)}>
          <Icons name='search' size={45}/>
    </TouchableOpacity>
      <Modal visible={visible}>
          <SafeAreaView>
              <TouchableOpacity onPress={()=>{setVisible(false);setInput("");searcher("")}}>
                  <Icons name='arrow-back' size={45}/>
              </TouchableOpacity>
          </SafeAreaView>
          {/*search bar*/}
          <View>    
              <TextInput 
                  style={styles.textInput}
                  placeholder='חפש'     
                  value={input}
                  onChangeText={text=>{setInput(text);searcher(text)}}
                  placeholderTextColor="#7f8c8d"
              />
              <TouchableOpacity onPress={()=>{setInput("");searcher("")}}>
                  <Text>X</Text>
              </TouchableOpacity>
          </View>
          {/**the found list*/}
          <FlatList
           data={searchList}
           keyExtractor = {item=>item.id}
           renderItem={(data)=><UserItem  user={data.item} admin={false}/>}
          />
      </Modal>
  </View>
)
}



const Admin = () => {
  const [newUsers, setWaiter] = useState([]);
  const [allUsers, setUser] = useState([]);
  const [admins, setAdmins] = useState([]);
  //getting the new users
  useEffect (()=>{
    const ref = collection(db, 'users');
    const que = query (ref, where('guest','==', true));
    const unsubscribe = onSnapshot(que, querySnapshot => {
      setWaiter(
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
          pic: doc.data().pic,
        })))  
    });

    const q = query (ref, where('guest','==', false),where('isAdmin','==',false));
    const unsubscribe2 = onSnapshot(q, querySnapshot => {
      setUser(
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
          pic: doc.data().pic,
        })))  
    });

    const qe = query (ref,where('isAdmin','==',true));
    const unsubscribe3 = onSnapshot(qe, querySnapshot => {
      setAdmins(
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
          pic: doc.data().pic,
        })))  
    });

    return () => {unsubscribe2();unsubscribe();unsubscribe3()};
 },[]);

  return (
    <View>
        <View>
          <Text>משתמשים חדשים</Text>
          <FlatList data={newUsers}
          keyExtractor = {item=> item.id}
          renderItem = {(data)=><GuestItem userId={data.item.userId} id={data.item.id} name={data.item.fname+" "+data.item.lname} questionaire={data.item.questionaire} pic={data.item.pic}/>}
          />
        </View>
        <View style={{width:'100%', borderWidth:1}}/>
        <View>
            <Search list={allUsers}/>
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
textInput:{
  marginVertical:8,
  width:"100%",
  textAlign:"right",
  height:40,
  borderColor:"gray",
  borderWidth:1,
  borderRadius:5,
  alignSelf:"flex-end",
  padding:5,
  fontSize:18,
  backgroundColor:"white"
},
})