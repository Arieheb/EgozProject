import React, { useState, useEffect } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import Profile from '../../assets/Images/profile.png';
import {storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const UploadImage = (props) => {  
    const user = props.user; 

    const download = ()=>{
        getDownloadURL( ref(storage, "profile/"+user.pic)).then((url)=> {
            setImage(url);
        })
        .catch ((e)=> console.log ('ERROR=>', e));
    }
    const [image, setImage] = useState(null);
    //showing profile image on page load
    useEffect (()=> {
        if(user.pic!="")
            download();
    },[]);

    const uploadPic = async()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images, 
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        if(!result.cancelled){
            uploadImage(result.uri,user.pic).then(()=>{
                download();
            }).catch((error)=>{
                alert("failure")
            })
        }
    }
    
    const takePic = async()=>{
        let result = await ImagePicker.launchCameraAsync(
            {
                mediaTypes: ImagePicker.MediaTypeOptions.Images, 
                allowsEditing: true,
                aspect: [4,3],
                quality: 1,
            }
        );
        if(!result.cancelled){
            uploadImage(result.uri,user.pic).then(()=>{
                download();
            }).catch((error)=>{
                alert("failed to upload picture")
            })
        }
    }

    const uploadImage = async(uri, imageName)=>{
        const response = await fetch(uri);
        const blob = await response.blob();
        let storageRef = ref(storage,"profile/"+imageName);
        return uploadBytesResumable(storageRef,blob);
    }

return (
    <View style={imageUploaderStyles.container}>
        { <Image source={image?{uri: image}:Profile} style={{ width: 200, height: 200 }}/>}
        
        <View style={imageUploaderStyles.uploadBtnContainer}>
            <TouchableOpacity onPress={()=>uploadPic()} style={imageUploaderStyles.uploadBtn} >
                <Text>{image ? 'עריכת תמונה' : 'העלאת תמונה'} </Text>
                <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
        </View>
    </View>

 );
}

export default UploadImage

const imageUploaderStyles=StyleSheet.create({
   container:{
       elevation:2,
       height:200,
       width:200,
       backgroundColor:'#efefef',
       position:'relative',
       borderRadius:999,
       overflow:'hidden',
       alignSelf:'center',
   },
   uploadBtnContainer:{
       opacity:0.7,
       position:'absolute',
       right:0,
       bottom:0,
       backgroundColor:'lightgrey',
       width:'100%',
       height:'25%',
   },
   uploadBtn:{
       display:'flex',
       alignItems:"center",
       justifyContent:'center'
   }
})