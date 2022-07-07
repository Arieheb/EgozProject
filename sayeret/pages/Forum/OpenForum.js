import React, {useState} from 'react';
import { View,Text,StyleSheet,Modal,Image, SafeAreaView,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'
import {db, storage} from "../../firebase";
import { ref, uploadBytesResumable} from 'firebase/storage';
import {collection,query,addDoc,getDocs, where, orderBy} from 'firebase/firestore';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { TouchableRipple,Avatar} from 'react-native-paper';
import profile from '../../assets/Images/profile.png'
import Picture from '../../assets/Images/picture.png';
import camera from '../../assets/Images/pic_camera.png';


const OpenForum = props=>{
    const [name, setName] = useState("");
    const [vision, setVision] = useState(false);
    const [image, setImage] = useState();
    const [preview, setPrev] =useState(false);
    const dat = new Date().getTime();
    const uploadPic = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.Images, 
             allowsEditing: true,
             aspect: [4,4],
             quality: 1,
         });
         if(!result.cancelled){
            setImage(result.uri);
        }
    }
     
    const takePic = async()=>{
        let result = await ImagePicker.launchCameraAsync(
            {
                mediaTypes: ImagePicker.MediaTypeOptions.Images, 
                allowsEditing: true,
                aspect: [4,4],
                quality: 1,
            }
        );
        if(!result.cancelled){
            setImage(result.uri);
        }
    }
    
    const uploadImage = async(uri, imageName)=>{
        const response = await fetch(uri);
        const blob = await response.blob();
        let storageRef = ref(storage,"forum/"+imageName);
        return uploadBytesResumable(storageRef,blob);
    }

    
    const submit =async function(){
        if(name === ""){
            alert("חייב לשים שם לפורום")
            return
        }
        let pic = dat+name
        if(image)
        uploadImage(image,pic);
        setTimeout(async()=>{
            //adding a new document
            const ref = collection(db,'chats');
            addDoc(ref,{"name":name,"last_time":new Date(), "last_message":"", 'pic':pic})
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
            setImage("")
            setVision(false)},1800)
    }
    
    return(
        <View>
            <View> 
                <Modal visible={vision}>
                <SafeAreaView style={styles.header}>   
                    <TouchableRipple onPress={()=>{setVision(false);setImage("");setName("")}}>
                        <Icon
                            name='arrow-right-thick'
                            size={35} 
                        />
                    </TouchableRipple>
                </SafeAreaView>

                <View style ={{flexDirection:"row", backgroundColor:'lightgray'}}>
                <TouchableOpacity onPress={()=>{setPrev(true)}}>
                    <Avatar.Image style={styles.avatar} source={image?{uri:image}:camera}/>
                </TouchableOpacity>
                <TextInput
                    value={name}
                    placeholder="שם הפורום"
                    onChangeText={(text)=>{setName(text)}}
                    style = {{width:"85%", backgroundColor:'lightgray'}}
                />
                </View>
              
                <Modal visible={preview}>
                    <TouchableRipple style={styles.picButton} onPress={()=>uploadPic()}>
                    <View style={{...styles.button,width:200}}>
                            <Text style={styles.buttonText}>העלה תמונה</Text>
                            {<Image source={image?{uri: image}:Picture} style={{ width: 150, height: 150 }}/>}
                        </View>
                    </TouchableRipple>
                    <TouchableRipple style={styles.picButton} onPress={()=>takePic()}>
                    <View style={{...styles.button,width:200}}>
                            <Text style={styles.buttonText}>צלם תמונה</Text>
                            {<Image source={image?{uri: image}:camera} style={{ width: 150, height: 150 }}/>}
                        </View>
                    </TouchableRipple>

                    <TouchableRipple style = {styles.buttensStyle} onPress={()=>setPrev(false)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>אשר</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple style = {styles.buttensStyle} onPress={()=>{!image?setPrev(false):null;setImage();}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>{image?"נקה":"בטל"}</Text>
                    </View>
                    </TouchableRipple>

                </Modal>

                <TouchableRipple style = {styles.buttensStyle} onPress={()=>submit()}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>הוסף</Text>
                    </View>
                </TouchableRipple>
            </Modal>
            </View>  
            <View>
            <TouchableOpacity style = {styles.plusButton} onPress={()=>setVision(true)}>
                 <Icon name ="plus"  color="white"  size={45}/>   
             </TouchableOpacity>
        </View>                       
        </View>
    );
};

const styles = StyleSheet.create({
    button:{
      width:100,
      height:50,
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
        bottom:90,
        left:2,
        zIndex:1
    },
    buttonText:{
        color: "black",
        textAlign: 'center',
        fontWeight:"bold",
        fontSize:16,
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        backgroundColor:"#485260",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        paddingTop: Platform.OS === 'ios'? 30:15,
        paddingLeft:5,
        
    },

    
    plusButton: {
        borderRadius: 100,
        width: 60,
        height: 60,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        borderColor: "white",
        borderWidth: 0.5,
        alignItems:'center',
        justifyContent:'center',
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
        width: 170,
        height: 170,
    }
    ,
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

   avatar:{
        backgroundColor:'lightgray',
        borderWidth:1,
        width:60,
        height:60,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden'
   }

    
})

export default OpenForum;