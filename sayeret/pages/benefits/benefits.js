import React, { useState, useEffect } from 'react';
import HyperLink from 'react-native-hyperlink';
import { Modal, Image, View, TouchableOpacity, Text, StyleSheet, Alert} from 'react-native';
import { collection, query, onSnapshot, deleteDoc, doc, where, getDocs } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import AddBenefits from './addBenefit';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { storage } from '../../firebase';
import {ref, getDownloadURL, deleteObject} from 'firebase/storage';
import gift from "../../assets/Images/gift.png";

const Benefit = props => {
    const [visible, setVisible] = useState(false);
    const [imageUrl, setImageUrl] = useState(); 
    const Delete =(id, pic)=>{
    Alert.alert(
        "למחוק?",
        "האם אתה בטוח שאתה רוצה למחוק את ההטבה הזו?",
        [
          {
            text: "בטל",
            onPress: () => {return},
          },
          {
            text: "מחק",
            onPress: async () => {
                deleteObject(ref(storage,"Benefits/"+pic));
                await deleteDoc(doc(db, "Benefits", id));
            },
        },
    ],
    );
   
}  
   
    useEffect(()=> {
        if(props.image)
            getDownloadURL( ref(storage,"Benefits/"+props.image)).then ((url)=> {
            setImageUrl (url);
        })
        .catch ((e)=> {});},[])
    return(

       <View>
           {/* admin could delete */}
           {props.admin?<TouchableOpacity onLongPress={()=>Delete(props.id,props.image)}>
           <View name='benefit' style = {styles.benefit} >
                <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={imageUrl?{uri:imageUrl}:gift} style = {styles.benefitsPic}></Image>
                </View> 
                <View name= 'information' style = {styles.infoFrame}>
                    <Text style = {styles.infoText}> {props.name}</Text>
                    <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>{setVisible(true)}}>
                    <Text style= {styles.buttonText} >קרא עוד</Text>
                    </TouchableOpacity>
                </View>
            </View>
           </TouchableOpacity>:
            //not admin view
            <View name='benefit' style = {styles.benefit} >
                <View name = 'picPlace' style = {styles.picFrame}>
                    <Image source={imageUrl?{uri:imageUrl}:gift} style = {styles.benefitsPic}></Image>
                </View> 
                <View name= 'information' style = {styles.infoFrame}>
                    <Text style = {styles.infoText}> {props.name}</Text>
                    {!props.guest?
                    <TouchableOpacity style = {styles.buttonsBenefit} onPress={()=>{setVisible(true)}}>
                    <Text style= {styles.buttonText} >קרא עוד</Text>
                    </TouchableOpacity>
                    :null}
                </View>
            </View>}
            <Modal visible={visible} transparent={true} >

                <View style = {{backgroundColor: "rgba(0,0,0,0.5)", height: '100%'}}>
                    <View style={styles.modal} >
                        <ScrollView style = {{maxHeight:400, minHeight:20}}>
                            <HyperLink linkDefault={true}>
                                <Text style = {styles.infoText}>{props.info}</Text>
                            </HyperLink>
                        </ScrollView>
                        <View style={{height: 60, marginTop: '1%', }}>
                            <TouchableOpacity style={{margin: '1%'}} onPress={()=>setVisible(false)}>
                        <Icon name="arrow-right-thick" size={55}/>
                    </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
         </View>
    );
}
const Benefits = props => {
         const[benefitInfo, setBenefitInfo] =useState([]);
         const[isAdmin, setAdmin] = useState();
         const [guest, setGuest] = useState();
         useEffect (()=>{
            const collectionBenefits = collection(db, 'Benefits');
            const que = query (collectionBenefits);
            
            if(props.route.params != undefined){
                setAdmin(props.route.params.user.isAdmin)
                setGuest(props.route.params.user.guest)
            }
            else{
                const q =query(collection(db,'users'),where('user_id','==', auth.currentUser.uid));
                getDocs(q).then(result=>{
                    result.forEach(doc=>{
                        setAdmin(doc.data().isAdmin);
                        setGuest(doc.data().guest);
                })}
                )
            }

            const unsubscribe = onSnapshot (que, QuerySnapshot => {
                setBenefitInfo(
                    QuerySnapshot.docs.map (doc => ({
                        id: doc.id,
                        Name: doc.data().name,
                        photo: doc.data().pic,
                        info: doc.data().info
                    }))
                );
            });
            return () =>{unsubscribe();};
         },[]);
         return (
         
            <View style = {styles.page}>
                {/* <Text style = {styles.title}>הטבות</Text> */}

                <FlatList data={benefitInfo} keyExtractor={item => item.id} renderItem={data=>
                <Benefit name={data.item.Name} id={data.item.id}
                image = {data.item.photo} info ={data.item.info} admin={isAdmin} guest={guest}> </Benefit>}>
                    
                </FlatList>
                {isAdmin?<AddBenefits/>:null}

            </View>

    );
}

export default Benefits


const styles = StyleSheet.create ({ 
    page: {
        alignItems: "center",
    },
    
    buttonsBenefit: {
        backgroundColor:"white",
        fontSize:14,
        borderWidth: 1,
        padding: 5,
        position: 'absolute',
        marginTop: 140,
        marginLeft: 35,
        borderRadius: 10,
        width: 100,
        height: 40,
        alignContent:'flex-end'
    },
    buttonText: {
        color: "black",
        textAlign: 'center',
        fontWeight:"bold",
        paddingTop: 5
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
        borderColor: "black",
        borderWidth: 1,
    },
    picFrame: {
        width: '50%',
        alignItems: "center",
        padding: 5,
        borderColor: "black",
        borderWidth: 0,
        borderRadius: 25,
    },
    infoFrame: {
        width: '50%',
        fontSize: 35,
        height: '100%',
    },
    infoText: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: 'left'
    },
    benefitsPic: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
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
    modal: {
        backgroundColor: "white",
        borderRadius: 25,
        marginTop: '35%',
        marginHorizontal: '2.5%',
        padding: '5%',
        maxHeight: '65%',
        minHeight:'30%',
        width: '95%',
        flexDirection: "column",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
        shadowOffset: {
          width: 2,
          height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
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

