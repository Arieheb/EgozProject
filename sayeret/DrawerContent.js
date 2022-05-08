import React from 'react'
import { StyleSheet, View} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import {Avatar,Title,Caption, Drawer, TouchableRipple} from 'react-native-paper'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Profile from "./assets/Images/profile.png"
import { signOut } from 'firebase/auth'
import { auth } from './firebase'


const signOutNow = () => {
    signOut(auth).then(() => {
        navigation.replace('login');
    }).catch((error) => {
    });
}


const DrawerContent = props => {
  return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <TouchableRipple style={styles.userInoSection}  onPress={()=>{props.navigation.navigate("profile")}}>
                    <View style={{flexDirection:'row',marginTop:15 }}>
                        <Avatar.Image
                        source={Profile}
                        size={50}/>

                        <View style={{marginLeft:15}}>
                            <Title style={styles.title}>User Name</Title>
                            <Caption style={styles.caption}>More Info</Caption>
                        </View>
                    </View>
                </TouchableRipple>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        label="בית"
                        icon={(color,size)=>
                                <Icon 
                                name="home-outline"
                                color = {color}
                                size={size}/>}
                        onPress={()=>{props.navigation.navigate("home")}}
                    />
                    <DrawerItem
                        label="פורטל משרות"
                        icon={(color,size)=>
                                <Icon 
                                name="briefcase"
                                color = {color}
                                size={size}/>}
                        onPress={()=>{props.navigation.navigate("jobs")}}
                    />
                    <DrawerItem
                        label="אודות"
                        icon={(color,size)=>
                                <Icon 
                                name="book-open-page-variant"
                                color = {color}
                                size={size}/>}
                        onPress={()=>{props.navigation.navigate("about")}}
                    />
                    <DrawerItem
                        label="פורומים"
                        icon={(color,size)=>
                                <Icon 
                                name="android-messages"
                                color = {color}
                                size={size}/>}
                        onPress={()=>{props.navigation.navigate("forums")}}
                    />
                    <DrawerItem
                        label="לוח אירועים"
                        icon={(color,size)=>
                                <Icon 
                                name="calendar-month"
                                color = {color}
                                size={size}/>}
                        onPress={()=>{props.navigation.navigate("calendar")}}
                    />
    
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
                label="Sign Out"
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
    },
    preference:{
        flexDirection:'row',
        justifyContent: "space-between",
        paddingVertical:12,
        paddingHorizontal:16
    }
})