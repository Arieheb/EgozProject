import React, {useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {db} from "../../firebase";
import {collection,query,addDoc,getDocs, where, orderBy} from 'firebase/firestore';

const OpenForum = props=>{
    const [name, setName] = useState("");

    const submit =async function(){
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

        props.navigation.navigate('A');
    }
   
    // const [value, setValue] = useState(['מרכז', 'ירושלים והסביבה', 'צפון', 'דרום']);
    // const [open, setOpen] = useState(false);
    // const [items, setItems] = useState([
    //     {label: 'מרכז', value: 'מרכז'},
    //     {label: 'תל אביב', value: 'תל אביב', parent: 'מרכז'},
    //     {label: 'רמת גן', value: 'רמת גן', parent: 'מרכז'},
    //     {label: 'ירושלים והסביבה', value: 'ירושלים'},
    //     {label: 'ירושלים', value: 'ירושלים', parent: 'ירושלים'},
    //     {label: 'צפון', value: 'צפון'},
    //     {label: 'דרום', value: 'דרום'}
    //   ]);

    return(
        <View>
            <TextInput
                value={name}
                placeholder="שם הפורום"
                onChangeText={(text)=>{setName(text)}}
            />
            <Text>catagories</Text>
            {/* <DropDownPicker
                placeholder='קטגוריות'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                onChangeText={text=>setLocationInput(text)}

                multiple={true}
                mode="BADGE"
                badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            /> */}

            <Text>forum / chat</Text>
            <Text>members</Text>
            <Text>name</Text>
            <TouchableOpacity onPress={submit}>
                <View style={styles.plus}>
                    <Text style={styles.up}>+</Text>
                </View>
            </TouchableOpacity>
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
    }
})

export default OpenForum;