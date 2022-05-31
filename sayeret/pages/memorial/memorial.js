import {Modal, FlatList, Dimensions, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import Blurp from './ModalTemp';
import {auth, db} from '../../firebase';
import { collection, onSnapshot, query, QuerySnapshot,orderBy } from 'firebase/firestore';
import { useEffect,useState } from 'react';
import memorial from "../../assets/Images/izkor.jpg";



const scrWidth = Dimensions.get('screen').width;
const scrHeight = Dimensions.get('screen').height;

const Memorial = () => { 
    const [memoryInfo, setMemoryInfo] = useState([]);
    useEffect (()=> {

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
              semitary: doc.data().semitary
            }))
          );
    });
    return () => unsubscribe();
  },[]);

    
     return (
      <ImageBackground source={memorial} style = {styles.view}>
       <View style = {styles.container}>
        <FlatList data = {memoryInfo}
            keyExtractor = {item => item.Name}
            renderItem = {(data) => <Blurp name = {data.item.Name} image={data.item.profilePic} info = {data.item.information} semitary = {data.item.semitary} part = {data.item.section} row = {data.item.row} graveNumber = {data.item.graveNumber}  ></Blurp>}
            numColumns = {3}
>
         </FlatList>
         </View>

         </ImageBackground>
    );
  };
  
  export default Memorial 

  const styles = StyleSheet.create({
    container: {
        marginHorizontal: "auto",
        width: scrWidth,
        height: scrHeight,
        paddingTop: 20,
        paddingBottom: 100
      },
      
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


  });
  