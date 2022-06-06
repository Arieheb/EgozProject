import React, {useState} from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from "react-native-vector-icons/FontAwesome5";


const AddBenefits= props=>{
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [vision, setVision] = useState(false);

    const Submit =async function(){
        addDoc(collection(db, 'Benefits'), { name, info, photo});
        setName("");
        setInfo("");
        setVision(false);
    }

  
    return(
        <View>
     <Modal visible={vision}>
    <View>
        <TextInput     value={name}
                    placeholder="שם ההטבה"
                    onChangeText={(text)=>{setName(text)}}/>
        <TextInput     value={info}
                    placeholder="פרטי הטבה"
                    onChangeText={(text)=>{setInfo(text)}}/>
        
        <TouchableOpacity style = {styles.topButton} onPress={()=>{Submit() }}>
            <Text style= {styles.buttonText} >הוסף</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>{setVision(false);setName("");
        setInfo("");}}>
            <Text style= {styles.buttonText} >חזור</Text>
        </TouchableOpacity>
    </View>
    </Modal>
    <TouchableOpacity style = {styles.topButton} onPress={()=>setVision(true)}>
    <Icon name ="plus"  color="white"  size={70}/>   
     </TouchableOpacity> 
    </View>
    )
    
}

export default AddBenefits
const styles = StyleSheet.create ({ 
    page: {
        alignItems: "center",
    },
    buttonsBenefit: {
        backgroundColor: "red",
        borderRadius: 20,
        textAlign: "center",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 2
    },
    title: {
        fontWeight: "bold",
        color: "black",
        
    },
    benefit: {
        backgroundColor: "white",
        borderRadius: 25,
        margin: 5,
        padding: 5,
        height: 200,
        flexDirection: "row",
    },
    picFrame: {
        width: '50%',
        alignItems: "center",
        padding: 5,
    },
    infoFrame: {
        width: '50%',
        fontSize: 35,
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 25,

    },
    benefitsPic: {
        width: 180,
        height: 180,
        borderRadius: 20
    },
    buttons: {
        borderRadius: 100,
        width:170,
        height: 75,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        margin: 20,
        marginTop: 8,
        color:"white",
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
    },
    
});

