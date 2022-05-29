import React, {useState} from 'react';
import { View,Text,StyleSheet,Modal,Button, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
                {/* <Text>catagories</Text>
                <Text>forum / chat</Text>
                <Text>members</Text> */}
                <TouchableRipple onPress={()=>submit()}>
                    <View style={styles.plus}>
                        <Text style={styles.up}>+</Text>
                    </View>
                </TouchableRipple>
            </Modal>
            <Button title='add forum' onPress={()=>{setVision(true);}}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    plus:{
        height : 50,
        width: 50,
        backgroundColor: "blue",
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
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
        
    }
})

export default OpenForum;