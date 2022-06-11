import React, { useEffect, useState } from 'react'
import { Platform, StyleSheet, View} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {Avatar,Title,Caption, Drawer, TouchableRipple} from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Profile from "./assets/Images/profile.png"
import { signOut } from 'firebase/auth'
import { auth, db, storage } from './firebase'
import { query, collection, where, getDocs } from 'firebase/firestore'
import { getDownloadURL, ref } from 'firebase/storage'

const signOutNow = () => {
    signOut(auth).then(() => {
        navigation.replace('login');
    }).catch((error) => {
    });
}

const Card = props=>{
   return <DrawerItem
                label= {props.title}
                icon={(color,size)=>
                        <Icon 
                        name={props.iconName}
                        color = {color}
                        size={size}/>}
                onPress={()=>{props.navigation.navigate(props.nav,{'user':props.user})}}
             />
}

const DrawerContent = props => {
    const [user,setUser] = useState({});
    const [uri, setImage] = useState();
    useEffect(async ()=>{
        const id = auth.currentUser.uid;
        const q = query(collection(db,"users"),where("user_id","==",id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc=>{
            const userFields = doc._document.data.value.mapValue.fields 
                getDownloadURL( ref(storage, "profile/"+userFields.pic.stringValue)).then((url)=> {
                    setImage(url);
                })
                .catch ((e)=>{});
            setUser({
                id: doc.id,
                Address: userFields.Address.stringValue,
                FirstName: userFields.FirstName.stringValue,
                LastName: userFields.LastName.stringValue,
                city: userFields.city.stringValue,
                email: userFields.email.stringValue,
                user_id: userFields.user_id.stringValue,
                pic: userFields.pic.stringValue,
                password: userFields.password.stringValue,
                guest: userFields.guest.booleanValue,
                isAdmin: userFields.isAdmin.booleanValue,
                isMember: userFields.isMember.booleanValue,
                imageurl:uri,
                phone: userFields.phone.stringValue,
                                
                
            })

        })
    },[])
    
  return (
    
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <TouchableRipple style={styles.userInoSection}  onPress={()=>{props.navigation.navigate("profile",{user:user})}}>
                    <View style={{flexDirection:'row',marginTop:15}}>
                        <Avatar.Image
                        source={uri?{uri:uri}:Profile}
                        size={50}/>

                        <View style={{marginLeft:15}}>
                            <Title style={styles.title}>{user.FirstName + " "}{user.LastName} </Title>
                            <Caption style={styles.caption}>פרטים נוספים</Caption>
                        </View>
                    </View>
                
                
                </TouchableRipple>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <Card title="בית**********************" iconName="home-outline" nav="home" navigation={props.navigation} user={user}/>
                    <Card title="אודות********************" iconName="book-open-page-variant" nav="about" navigation={props.navigation} user={user}/>
                    <Card title="פורומים******************" iconName="android-messages" nav="forums" navigation={props.navigation} user={user}/>
                    <Card title="פורטל משרות*************" iconName="briefcase" nav="jobs" navigation={props.navigation} user={user}/>
                    <Card title="לוח אירועים***************" iconName="calendar-month" nav="calendar" navigation={props.navigation} user={user}/>
                    <Card title="זיכרון והנצחה*************" iconName="candle" nav="Memorial" navigation={props.navigation} user={user}/>
                    <Card title="הטבות*******************" iconName="gift" nav="Benefits" navigation={props.navigation} user={user}/>
                    <Card title="חנות*********************" iconName="shopping" nav="store" navigation={props.navigation} user={user}/>
                    <Card title="צור קשר******************" iconName="email-outline" nav="Contact" navigation={props.navigation} user={user}/>
                   {user.isAdmin?
                    <Card title="דף מנהל" iconName="cog" nav="admin" navigation={props.navigation} user={user}/>:null}
                    {/* <Card title="תשלום חברות" iconName="email-outline" nav="membership" navigation={props.navigation} user={user} /> */}
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>

        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={(color,size)=>
                        <Icon 
                        name="exit-to-app"
                        color = {color}
                        size={size}/>}
                label="התנתק"
                onPress={signOutNow}
            />
        </Drawer.Section>
    
    </View>
  )
}

export default DrawerContent

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInoSection:{
        paddingLeft:20, 
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:"center",
    },
    section:{
        flexDirection:"row",
        alignItems:"center",
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
        
    },
    bottomDrawerSection:{
        marginBottom:15,
        borderTopColor:"#f4f4f4",
        borderTopWidth:1,
        // direction:Platform.OS=='ios'?'rtl':'ltr',
    },
    preference:{
        flexDirection:'row',
        justifyContent: "space-between",
        paddingVertical:12,
        paddingHorizontal:16
    }
})