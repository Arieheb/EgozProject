import React, {useState} from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from "react-native-vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker'
import { ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase';


const AddBenefits= props=>{
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");
    const [vision, setVision] = useState(false);

    const uploadPic = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images, 
             allowsEditing: true,
             aspect: [4,4],
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
        const dat = new Date().getTime();
        let pic = dat+name
        addDoc(collection(db, 'Benefits'), { 'name':name, 'info':info, 'pic':pic});
        uploadImage(photo,pic)
        setName("");
        setInfo("");
        setVision(false);                 
    }

  
    return(
        <View>
            <View style={{height: '35%'}}>
                <TouchableOpacity style = {styles.plusButton} onPress={()=>setVision(true)}>
                <Icon name ="plus"  color="white"  size={70}/>   
                </TouchableOpacity> 
            </View>
            <Modal visible={vision}>
                <View style= {styles.container}>
                <Text style = {styles.title}>הוספת הטבה חדשה</Text>
                <Text style = {styles.textStyle}> שם ההטבה:</Text>
                    <TextInput    
                                style={styles.input} 
                                placeholder="שם ההטבה"
                                value={name}
                                onChangeText={(text)=>{setName(text)}}
                                placeholderTextColor={"grey"}
                                />
                    <Text style = {styles.textStyle}> תיאור ההטבה:</Text>
                    <TextInput     
                                style={{...styles.input, height: 100}} 
                                placeholder="פרטי הטבה..."
                                value={info}
                                onChangeText={(text)=>{setInfo(text)}}
                                placeholderTextColor={"grey"}
                                />
                    <TouchableOpacity style={styles.picButton}onPress={()=>uploadPic()}>
                        <Text style= {styles.buttonText}>העלה תמונה</Text>
                        <Icons name="picture-o" size={55}/>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.buttensStyle} onPress={()=>{Submit() }}>
                        <Text style= {styles.buttonText} >הוסף הטבה</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.returnButten} onPress={()=>{setVision(false);setName("");
                    setInfo("");}}>
                        <Icon name="arrow-right-thick" size={55}/>
                    </TouchableOpacity>

                </View>
            </Modal>
          
         </View>
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
        width: '100%',
        display: 'flex', 
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 10,
    },
    input: {
        height:40,
        borderRadius: 12,
        // paddingRight:10,
        margin:5,
        paddingLeft: 7,
        borderWidth: 1,
        textAlign: 'right',
     },
    returnButten: {
        alignItems: 'center',
      },
    buttensStyle: {
        // backgroundColor:"white",
        // fontSize:14,
        // borderWidth: 1,
        // padding: 5,
        // marginTop: 10,
        // borderRadius: 10,
        // width: 300,
        // height: 40,
        alignSelf:'center',
        alignItems:'center',
        // width:'85%',
        // color:'blue',
        // height:40,
        // backgroundColor:'#fff',
        marginTop:30,
        // borderRadius:8,
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        // padding: 5,
        // position: 'absolute',
        marginTop: 50,
        borderRadius: 10,
        width: 120,
        height: 60,
        // alignContent:'flex-end'
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
        // textAlign: "center",
        // fontSize: 25,
        // fontWeight: "bold",
        // margin: 2
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
    plusButton: {
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
    picButton: {
        alignSelf:'center',
        alignItems:'center',
        marginTop:30,
        display:'flex',
        justifyContent:'center',
        backgroundColor:"white",
        fontSize:16,
        borderWidth: 1,
        marginTop: 50,
        borderRadius: 10,
        width: 160,
        height: 160,
    }
    
});

