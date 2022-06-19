import { useEffect,useState } from 'react';
import {FlatList, View, StyleSheet, ImageBackground,SafeAreaView,Text, TextInput, Modal, TouchableOpacity} from 'react-native';
import {auth, db} from '../../firebase';
import { collection, onSnapshot, query ,orderBy, where, getDocs} from 'firebase/firestore';
import memorial from "../../assets/Images/izkor.jpg";
import Blurp from './ModalTemp';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"



const Search = (props) => {
  const list = props.list;

  const [searchList, setSearchList] = useState([]);
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);

  //getting the list according to the input
  const searcher = (name)=>{
      setSearchList(list.filter(item=>(String(item.Name).includes(name))));
  }

  useEffect(()=>{setSearchList(list)},[])


return (
  <View>
      <View style = {{maxWidth:'13%'}}>
    <TouchableOpacity onPress={()=>setVisible(true)}>
          <Icons name='search' color='white'size={55}/>
    </TouchableOpacity>

      </View>
      <Modal visible={visible}>
      <ImageBackground source={memorial} style = {{...styles.view, height:'100%'}}>
          <SafeAreaView style={styles.top}>
              <TouchableOpacity onPress={()=>{setVisible(false);setInput("");searcher("")}}>
                  <Icons name='arrow-back' color='white' style={{transform:[{rotateY: '180deg'}]}} size={45}/>
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
              <FlatList data = {searchList}
              keyExtractor = {item => item.Name}
              renderItem = {(data) => <Blurp name = {data.item.Name} image={data.item.profilePic} info = {data.item.information} semitary = {data.item.semitary} part = {data.item.section} row = {data.item.row} graveNumber = {data.item.graveNumber} link = {data.item.link}  ></Blurp>}
              numColumns = {3}
              />
            </ImageBackground>
      </Modal>
  </View>
)
}




const Memorial = (props) => { 
    const [memoryInfo, setMemoryInfo] = useState([]);
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
      })})}
            
      const MemoryCollection = collection (db, 'Memorial')
      const que = query (MemoryCollection, orderBy ('Name', 'asc'));

      const unsubscribe = onSnapshot (que, QuerySnapshot => {
          setMemoryInfo (
            QuerySnapshot.docs.map (doc => ({
              Name: doc.data().Name,
              graveNumber: doc.data().graveNumber,
              information: doc.data().information,
              profilePic: doc.data().profilePic,
              row: doc.data().row,
              section: doc.data().section,
              semitary: doc.data().semitary,
              link: doc.data().link,
            }))
          );
    });
    return () => unsubscribe();
  },[]);

    
     return (
      <View style = {{width: '100%', height: "100%"}}>
        <ImageBackground source={memorial} style = {styles.view}>
          <View style = {styles.container}>
          <Search list={memoryInfo}/>
            <FlatList data = {memoryInfo}
            keyExtractor = {item => item.Name}
            renderItem = {(data) => <Blurp name = {data.item.Name} image={data.item.profilePic} info = {data.item.information} semitary = {data.item.semitary} part = {data.item.section} row = {data.item.row} graveNumber = {data.item.graveNumber} link = {data.item.link}  ></Blurp>}
            numColumns = {3}/>
            
            {admin?
            <View style={{ alignItems:'center',justifyContent:'center'}}>
              <TouchableOpacity style = {styles.plusButton} onPress={()=>props.navigation.navigate('addMemory')}>
                  <Icon name ="plus"  color="white"  size={45}/>   
              </TouchableOpacity>
            </View>:null}
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Memorial 

  const styles = StyleSheet.create({    
    item: {
        flex: 1,
        maxWidth: "30%", // 100% devided by the number of rows you want
        alignItems: "center", 
        
        // my visual styles; not important for the grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff",
        height: 300
      },
      view: {
        alignItems: "center",
        justifyContent: "center",
        
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


  });
  