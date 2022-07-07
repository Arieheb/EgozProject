import React, { useState, useEffect } from 'react';
import {Modal, TextInput, FlatList, View,SafeAreaView,TouchableOpacity, Text, StyleSheet} from 'react-native';
import { collection, onSnapshot, query,orderBy, where, getDocs } from 'firebase/firestore';
import {db, auth} from '../../firebase';
import EventTemplate from './eventTemp';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from 'react-native-vector-icons/Ionicons'



const Search = (props) => {
    const list = props.list;
  
    const [searchList, setSearchList] = useState([]);
    const [input, setInput] = useState("");
    const [visible, setVisible] = useState(false);
  
    //getting the list according to the input
    const searcher = (name)=>{
        setSearchList(list.filter(item=>{
            let a = new Date(item.eventDate.toDate());
            return (String(item.eventName).includes(name))||(String(a.getDate()+'/'+(a.getMonth()+1)+'/'+a.getFullYear()).includes(name))
        }));
    }
  
    useEffect(()=>{setSearchList(list)},[])
  
  
  return (
    <View>
      <TouchableOpacity style={{alignSelf:'flex-start'}} onPress={()=>setVisible(true)}>
            <Icons name='search' size={45}/>
      </TouchableOpacity>
        <Modal visible={visible}>
            <SafeAreaView style={styles.top}>
                <TouchableOpacity onPress={()=>{setVisible(false);setInput("");searcher("")}}>
                    <Icons name='arrow-back' style={{transform:[{rotateY: '180deg'}]}} size={45}/>
                </TouchableOpacity>
            
            {/*search bar*/}
            <View style={styles.searchBar}>    
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
            </SafeAreaView>
            {/**the found list*/}
            <FlatList
             data={searchList}
             keyExtractor = {item=>item.id}
             renderItem={({item}) => {
                return <EventTemplate id = {item.id} eventName = {item.eventName} eventTime = {item.eventTime} eventDate = {item.eventDate} eventLocation = {item.eventLocation} eventInformation = {item.eventInformation} eventContact = {item.eventContact}/>
            }}
            />
        </Modal>
    </View>
  )
  }

const EventCal = (props) => {

    const [eventInfo , setEventInfo ] = useState([]);
    const [admin, setAdmin] = useState(false);
    useEffect (()=> {
        if(props.route.params != undefined){
            setAdmin(props.route.params.user.isAdmin)
        }
        else{
            const q =query(collection(db,'users'),where('user_id','==', auth.currentUser.uid));
            getDocs(q).then(result=>{
                result.forEach(doc=>{
                    setAdmin(doc.data().isAdmin);
            })}
            )
        }

        const eventCollection = collection (db, 'events')
        const que = query(eventCollection, orderBy ('eventDate', 'asc'));
  
        const unsubscribe = onSnapshot (que, QuerySnapshot => {
            setEventInfo (
              QuerySnapshot.docs.map(doc => {
                return({
                    id: doc.id,
                    eventName: doc.data().eventName,
                    eventLocation: doc.data().eventLocation,
                    eventInformation: doc.data().eventInformation,
                    eventContact: doc.data().eventContact,
                    eventTime: doc.data().eventTime,
                    eventDate: doc.data().eventDate
              })})
            );
      });

      return () => unsubscribe();
    },[]);

    return (
        <View>
            <SafeAreaView style = {styles.container}>
                    <Search list={eventInfo}/>
                    <View style={admin?{height:'80%'}:{height:'92%'}}>
                    <FlatList data = {eventInfo}
                        keyExtractor = {item => item.id}
                        renderItem={({item}) => {
                        return <EventTemplate id = {item.id} eventName = {item.eventName} eventTime = {item.eventTime} eventDate = {item.eventDate} eventLocation = {item.eventLocation} eventInformation = {item.eventInformation} eventContact = {item.eventContact} admin={admin}/>}}
                        />
                    </View>
                    {admin?
                    <View style={{ alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style = {styles.plusButton} onPress={()=>props.navigation.navigate('addEvent')}>
                            <Icon name ="plus"  color="white"  size={45}/>   
                        </TouchableOpacity>
                    </View>:null}
            </SafeAreaView>
           
           </View>
    );
        }

export default EventCal


const styles = StyleSheet.create ({ 
    headerText: {
        textAlign: 'center',
        fontSize: 25,
        margin: 5,
    },
    eventFrame: {
        borderRadius:4,
        flexDirection: 'row', 
        margin: 5, 
        padding: 5,
        backgroundColor: "white",
        borderRadius: 20,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
        borderWidth: 1,
        borderColor: "black"       
    }, 
    dateTimeFrame: {
        flexDirection: 'column' ,
        width: '28%',
        height:'100%',
    },
    dateTimeText: {
        textAlign: 'center',
        margin: '13%',
        justifyContent: "center",
        alignItems: "center",
    },
    infoFrame: {
        flex: 1,
        flexDirection: 'column',
        width: '72%'
    },
     infoText: {
        textAlign: 'left',
        fontSize: 15,
        margin: 2
     },
     buttons: {
        borderRadius: 100,
        margin:30,
        borderWidth:1,
        height: 100,
        width: 100,
    },
    buttonText: {
        textAlign: 'center',
        paddingTop: '40%',
        fontSize: 15
    },
    plusButton: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        marginTop: '5%',
        borderColor: "white",
        borderWidth: 0.5,
        alignItems:'center',
        justifyContent:'center',
    },
    textInput:{
        width:"95%",
        textAlign:"right",
        height:'100%',
        alignSelf:"flex-end",
        borderRadius:5,
        padding:5,
        fontSize:18,
        backgroundColor:"white"
      },
    
    searchBar:{
        flexDirection:'row',
        width:'85%',
        height: 40,
        borderColor:"gray",
        borderWidth:1,
        borderRadius:5,
        justifyContent: 'flex-start',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:"white"
    },
    top:{
        flexDirection:'row',
        width:'100%'
    }
    


});
