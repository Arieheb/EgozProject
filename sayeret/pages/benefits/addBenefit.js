import React, {useState} from 'react';
import { Image,View,SafeAreaView, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker'
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';
import Picture from '../../assets/Images/picture.png';



const AddBenefits= props=>{
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [vision, setVision] = useState(false);

    const uploadPic = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images, 
             allowsEditing: true,
             aspect: [4,3],
             quality: 1,
         });
         if(!result.cancelled){
            setPhoto(result.uri);
        }
    }

    const uploadImage = async(uri, photoName)=>{
        const response = await fetch(uri);
        const blob = await response.blob();
        let storageRef = ref(storage,"Benefits/"+photoName);
        return uploadBytesResumable(storageRef,blob);
    }

    const Submit =async function(){
        if(name === ""){
            alert("חייב לשים שם להטבה")
            return
        }
        if(info === ""){
            alert("חייב לשים תוכן להטבה")
            return
        }
        const dat = new Date().getTime();
        let pic = dat+name
        addDoc(collection(db, 'Benefits'), { 'name':name, 'info':info, 'pic':pic});
        uploadImage(photo,pic)
        setName("");
        setInfo("");
        setVision(false);                 
    }

  
    return(
        <SafeAreaView >
            <View style={{height: '30%', justifyContent:'center'}}>
                <TouchableOpacity style = {styles.plusButton} onPress={()=>setVision(true)}>
                <Icon name ="plus"  color="white"  size={45}/>   
                </TouchableOpacity> 
            </View>
            <Modal visible={vision}>
                <SafeAreaView style= {{...styles.container}}>
                    <View style={{height: '10%', justifyContent: 'center'}}>
                <TouchableOpacity style = {styles.returnButten} onPress={()=>{setVision(false);setName("");
                    setInfo("");}}>
                        <Icon name="arrow-right-thick" size={35}/>
                    </TouchableOpacity>
                    </View>
                <Text style = {styles.title}>הוספת הטבה חדשה</Text>
                <Text style = {styles.textStyle}> שם ההטבה:</Text>
                    <TextInput    
                                style={{...styles.input, height: 40,}} 
                                placeholder="שם ההטבה..."
                                value={name}
                                onChangeText={(text)=>{setName(text)}}
                                placeholderTextColor={"grey"}
                                />
                    <Text style = {styles.textStyle}> תיאור ההטבה:</Text>
                    <TextInput     
                                 style={{...styles.input, }} 
                                 multiline
                                 numberOfLines={5}
                                 placeholder="פרטי הטבה..."
                                 value={info}
                                 onChangeText={(text)=>{setInfo(text)}}
                                 placeholderTextColor={"grey"}
                                />
                    <View >
                    <TouchableOpacity style={styles.picButton}onPress={()=>uploadPic()}>
                        <Text style= {styles.buttonText}>העלה תמונה</Text>
                        {<Image source={photo?{uri: photo}:Picture} style={{ width: 150, height: 150 }}/>}
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity style = {styles.buttensStyle} onPress={()=>{Submit() }}>
                        <Text style= {styles.buttonText} >הוסף הטבה</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
         </SafeAreaView>
    )
    
}

export default AddBenefits
const styles = StyleSheet.create ({ 

    textStyle: {
        fontSize: 17,
        paddingTop: 3,
        margin: 5,
        textAlign: 'left',
    },
    page: {
        alignItems: "center",
    },
    container: {
        height: '100%',
        paddingBottom: 70, 
        width: '95%',
        display: 'flex', 
        alignSelf:'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
    },
    input: {
        borderRadius: 12,
        margin:5,
        paddingLeft: 7,
        borderWidth: 1,
        textAlign: 'right',
        backgroundColor: 'lightgrey'
     },
    returnButten: {
        alignItems: 'flex-start',
      },
    buttensStyle: {
        alignSelf:'center',
        alignItems:'center',
        marginTop:30,
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        borderRadius: 10,
        width: 120,
        height: 60,
    },
    buttensText: {
      textAlign: 'center',
      fontWeight:"bold",
    },
    buttonsBenefit: {
        backgroundColor: "red",
        borderRadius: 20,
        textAlign: "center",
    },
    buttonText: {
        color: "black",
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:16,
    },
    benefit: {
        backgroundColor: "white",
        borderRadius: 25,
        margin: 5,
        padding: 5,
        height: 200,
        flexDirection: "row",
    },
   
    infoFrame: {
        width: '50%',
        fontSize: 35,
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 25,

    },
    plusButton: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        marginTop: '10%',
        marginBottom: '40%',
        borderColor: "white",
        borderWidth: 0.5,
        alignItems:'center',
        justifyContent:'center',
    },
    picButton: {
        alignSelf:'center',
        alignItems:'center',
        marginTop:'5%',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        borderRadius: 10,
        width: '50%',
     
    }
    
});

