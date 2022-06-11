import React, {useState , useEffect} from 'react';
import {SafeAreaView, Modal, Text,TextInput, View, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import { Linking } from 'react-native';
import JobCard from './JobCard';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { collection, query, onSnapshot, getDocs, where } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import Icons from 'react-native-vector-icons/Ionicons'


const Search = (props) => {
    const list = props.list;
  
    const [searchList, setSearchList] = useState([]);
    const [input, setInput] = useState("");
    const [visible, setVisible] = useState(false);
  
    //getting the list according to the input
    const searcher = (name)=>{
        setSearchList(list.filter(item=>(String(item.title).includes(name))||(String(item.location).includes(name))));
    }
  
    useEffect(()=>{setSearchList(list)},[])
  
  
  return (
    <View>
      <TouchableOpacity onPress={()=>setVisible(true)}>
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
                return <JobCard id={item.id} title={item.title} location={item.location} contactName={item.contactName} contactPhone={item.contactPhone} contactEmail={item.contactEmail} description={item.description} user={item.user} admin={props.admin}/>
            }}
            />
        </Modal>
    </View>
  )
  }
  

const JobsMain = props=>{
    const [jobsList, updateJobsList] = useState([]);
    const [admin, setAdmin] = useState(false);
    useEffect (()=>{
        const q =query(collection(db,'users'),where('user_id','==', auth.currentUser.uid));
        getDocs(q).then(result=>{result.forEach(doc=>{setAdmin(doc.data().isAdmin);})})

        const collectionJobs = collection(db, 'jobs');
        const que = query (collectionJobs);
        const unsubscribe = onSnapshot (que, QuerySnapshot => {
            updateJobsList(
                QuerySnapshot.docs.map (doc => ({
                    id: doc.id,
                    contactName: doc.data().name,
                    description: doc.data().description,
                    contactEmail: doc.data().email,
                    title: doc.data().title,
                    location: doc.data().location,
                    contactPhone: doc.data().phone,
                    user: doc.data().user,

                }))
            );
        });
        return () => unsubscribe();
     },[]);

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        <View style={styles.container}>
            <Search list={jobsList} admin={admin}/>
            <View style={styles.jobGroups}>
                <Text style={styles.jobGroupsTitle}>קבוצות ה-WhatsApp שלנו:</Text>
                <View style={styles.jobGroupsLinks}>
                <TouchableOpacity style = {styles.jobGroupsLink} onPress={()=>Linking.openURL("https://chat.whatsapp.com/Jyd1Rw8XaHcIaJ2I8j5OCL")}>
                       <Text>היי-טק</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.jobGroupsLink} onPress={()=>Linking.openURL("https://chat.whatsapp.com/I6oOrQn0BfT3mGFaUig2Oc")}>
                      <Text>כללי</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
                <FlatList   
                    style={{width:"100%",}}
                    contentContainerStyle={{alignItems:"center"}}
                    data={jobsList}
                    renderItem={({item}) => {
                        return <JobCard id={item.id} title={item.title} location={item.location} contactName={item.contactName} contactPhone={item.contactPhone} contactEmail={item.contactEmail} description={item.description} user={item.user} admin={admin}/>
                    }}
                />  
                <View style={{height: '10%', justifyContent:'center'}}>
                        <TouchableOpacity style = {styles.plusButton} onPress={()=>goToAddJob()}>
                            <Icon name ="plus"  color="white"  size={45}/>   
                        </TouchableOpacity> 
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
jobGroups:{
    width:"98%",
    minWidth:"98%",
    height:50,
    padding:5,
    marginVertical:10,
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"white",
    borderColor:"gray",
    alignContent:"center",
    borderRadius: 20,
    shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      alignItems: 'center',
      flexDirection:'row',
},
jobGroupsTitle:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    paddingBottom:3,
    alignItems: 'center',
    flexDirection:'row',
},
jobGroupsLinks:{
   
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flex:1,
},
jobGroupsLink:{
    color:"#35DB4E",
    backgroundColor:"white",
    fontWeight:"bold",
    fontSize:14,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent:"center",
},
    container:{
    flex:1,
    alignItems:"center",
},
titleText:{
    fontSize:22,
},
plusButton: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    marginTop: '10%',
    marginBottom: '10%',
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

})

export default JobsMain
