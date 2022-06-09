import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import {doc,collection, query, where, onSnapshot, updateDoc, deleteDoc} from 'firebase/firestore'
import {db} from '../../firebase'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

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


GuestItem = props=>{
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
        {/* {props.questionaire.map((item, index) => (
         <Text key={index}>{item.productTitle}</Text>
        ))} */}

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


// const Search = (props) => {
  // const list = props.list;

  // const [searchList, setSearchList] = useState([]);
  // const [input, setInput] = useState("");
  // const [visible, setVisible] = useState(false);

  //getting the list according to the input
  // const searcher = (name)=>{
      // setSearchList(list.filter(item=>(String(item.name).includes(name))));
  // }

  // useEffect(()=>{setSearchList(list)},[])


// return (
  // <View>
    // <TouchableOpacity onPress={()=>setVisible(true)}>
          // <Icons name='search' size={45}/>
    // </TouchableOpacity>
      // <Modal visible={visible}>
          // <SafeAreaView>
              // <TouchableOpacity onPress={()=>{setVisible(false);setInput("");searcher("")}}>
                  // <Icons name='arrow-back' size={45}/>
              // </TouchableOpacity>
          // </SafeAreaView>
          // {/*search bar*/}
          // <View>    
              // <TextInput 
                  // style={styles.textInput}
                  // placeholder='חפש'     
                  // value={input}
                  // onChangeText={text=>{setInput(text);searcher(text)}}
                  // placeholderTextColor="#7f8c8d"
              // />
              // <TouchableOpacity onPress={()=>{setInput("");searcher("")}}>
                  // <Text>X</Text>
              // </TouchableOpacity>
          // </View>
          // {/**the found list*/}
          // <FlatList
          //  data={searchList}
          //  keyExtractor = {item=>item.id}
          //  renderItem={(data)=><memberItem  user={data.item} params={props.params}/>}
          // />
      // </Modal>
  // </View>
// )
// }


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
          userId: doc.data().user_id,
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
        renderItem = {(data)=><GuestItem userId={data.item.userId} id={data.item.id} name={data.item.fname+" "+data.item.lname} questionaire={data.item.questionaire}/>}
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
  height: 250,
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