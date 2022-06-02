import React, { useState, useEffect } from 'react';
import { Modal, Image, View, Platform, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import { Navigation } from 'react-calendar';
import event from "../../assets/Images/eventsImage.jpeg";
import memorial from "../../assets/Images/izkor.jpg";
import pizza from "../../assets/Images/pizza.jpg";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import AddBenefits from './addBenefit';
import { FlatList } from 'react-native-gesture-handler';

const App = () => {
    const [alert, setAlert] = React.useState({
      type: 'error',
      text: 'This is a alert message',
      show: false
    })
  
    function onCloseAlert() {
      setAlert({
        type: '',
        text: '',
        show: false
      })
    }
  
    function onShowAlert(type) {
      setAlert({
        type: type,
        text: 'Demo alert',
        show: true
      })
    }
}
const Benefit = props => {
    const bene = props.user
    const [visible, setVisible] = useState(false);
    return(
        <View>

            <View name='benefit' style = {styles.benefit} >
            <View name = 'picPlace' style = {styles.picFrame}>
            <Image source={props.Image}style = {styles.benefitsPic}></Image>
            </View> 
            <View name= 'information' style = {styles.infoFrame}>
                <Text style = {styles.infoText}> {props.name}</Text>
                <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>{setVisible(true)}}>
                <Text style= {styles.buttonText} >קרא עוד</Text>
                </TouchableOpacity>
            </View>
    </View>

    <Modal visible={visible}>
        <View>
            <Text style = {styles.infoText}>{props.info}</Text>
            <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>{setVisible(false)}}>
                <Text style= {styles.buttonText} >חזור</Text>
                </TouchableOpacity>
        </View>
    </Modal>

     </View>
    );
}
const Benefits = props => {
         const [value, onChange] = useState(new Date());
         const[benefitInfo, setBenefitInfo] =useState([]);
         const[addBenefit, setAddBenefit] = useState([]);
         useEffect (()=>{
            const collectionBenefits = collection(db, 'Benefits');
            const que = query (collectionBenefits);
            
            const unsubscribe = onSnapshot (que, QuerySnapshot => {
                setBenefitInfo(
                    QuerySnapshot.docs.map (doc => ({
                        id: doc.id,
                        Name: doc.data().name,
                        photo: doc.data().photo,
                        info: doc.data().info
                    }))
                );
            });
            return () => unsubscribe();
         },[]);
         return (
         
            <View style = {styles.page}>
                {/* <Text style = {styles.title}>הטבות</Text> */}

                <FlatList data={benefitInfo} keyExtractor={item => item.id} renderItem={data=> <Benefit name={data.item.Name}
                Image = {data.item.photo} info ={data.item.info}> </Benefit>}>
                    
                </FlatList>
                <AddBenefits/>

            </View>

    );
}

export default Benefits


const styles = StyleSheet.create ({ 
    page: {
        alignItems: "center",
    },
    buttonsBenefit: {
        backgroundColor: "#115B99",
        borderRadius: 10,
        textAlign: "center",
        color: "white",
    },
    buttonText: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        margin: 2,
        color: "white",
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
    },
    // button: {
    //     borderRadius: 7,
    //     backgroundColor: "rgba(0, 0, 0, 0)",
    //     width: 75,
    //     height: 25,
    //     borderColor: "white",
    //     borderWidth: 2, 
    //     marginHorizontal: 150,
    //     textAlign: "center",
    //     justifyContent: "center",
    //     color:"white",
    //     margin: 10,
    // },
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

