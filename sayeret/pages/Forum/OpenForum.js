import React, {useState} from 'react';
import { View,Text,StyleSheet,Modal,Button, SafeAreaView,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import {db} from "../../firebase";
import {collection,query,addDoc,getDocs, where, orderBy} from 'firebase/firestore';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TouchableRipple,Avatar} from 'react-native-paper';

const OpenForum = props=>{
    const [name, setName] = useState("");
    [vision, setVision] = useState(false);

    const submit =async function(){
        if(name === ""){
            alert("חייב לשים שם לפורום")
            return
        }

        //adding a new document
        const ref = collection(db,'chats');
        addDoc(ref,{"name":name,"last_time":new Date(), "last_message":""})
        //getting the document for the id
        const q = query(ref, where("name", "==", name) ,orderBy("last_time", "desc"));
        const querySnapshot = await getDocs(q);
        let once = 0;
        querySnapshot.forEach((doc) => {
            //adding the chat function only to the new chat
            if(once == 0){
                const docRef = collection(db,'chats',doc.id,'chat')
                addDoc(docRef,{})
                once++;
            }
        });
        setName("");
        setVision(false)
    }
   
    return(
        <View>
            <Modal visible={vision}>
                <SafeAreaView style={styles.header}>   
                    <TouchableRipple onPress={()=>{setVision(false)}}>
                        <Icon
                            name='arrow-right-thick'
                            size={30} 
                        />
                    </TouchableRipple>
                </SafeAreaView>
                <TextInput
                    value={name}
                    placeholder="שם הפורום"
                    onChangeText={(text)=>{setName(text)}}
                />
                <Text>catagories</Text>
                <Text>forum / chat</Text>
                <Text>members</Text>
                <TouchableRipple onPress={()=>submit()}>
                    <View style={styles.button}>
                        <Text style={styles.up}>הוסף</Text>
                    </View>
                </TouchableRipple>
            </Modal>

            {/* <View style ={styles.plus} >
                <TouchableOpacity  onPress={()=>setVision(true)}>
                    <Text style={styles.up}>+</Text>
            </TouchableOpacity>
           </View> */}
                   <TouchableOpacity style = {styles.topButton} onPress={()=>setVision(true)}>
    <Icon name ="plus"  color="white"  size={70}/>   
     </TouchableOpacity> 

        </View>
    );
};

const styles = StyleSheet.create({
    button:{
      width:100,
      height:50,
      backgroundColor:"blue",
      borderRadius:20,
      alignItems:'center',
      justifyContent:'center',
    },
    plus:{
        height : 75,
        width: 75,
        backgroundColor: "blue",
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        top:530,
        right:30,
        zIndex:1
    },
    up:{
        color:"white",
        fontSize:24
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
        
    },
    topButton: {
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 8,
        borderColor: "white",
        borderWidth: 0.5,
        position:'absolute',
        top:530,
        right:30,
        zIndex:1
    },
})

export default OpenForum;