import {StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import {deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';

const JobCard = ({id,title, location, contactName, contactPhone, contactEmail, description, user, admin}) => {
 
  const del = async(id)=>{
    Alert.alert(
        "למחוק?",
        "האם אתה בטוח שאתה רוצה למחוק את עבודה הזה",
        [
          {
            text: "בטל",
            onPress: () => {return},
          },
          {
            text: "מחק",
            onPress: async () => {
                await deleteDoc(doc(db, "jobs", id));
            },
        },
    ],
    );
  }
  
 
 
  return (
    <TouchableOpacity activeOpacity={0.9} onLongPress={(user == auth.currentUser.uid || admin)?()=>del(id):null}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{flexDirection:"row", width:"100%", justifyContent:"flex-start"}}>
          <Icon style={styles.icon} name="ios-location-outline"/>
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.description}>
          <Text style={{textAlign:"center"}}>{description}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text>{contactName} - {contactPhone}</Text>
          <Text>{contactEmail}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default JobCard

const styles = StyleSheet.create({
  cardContainer:{
    width:"98%",
    minWidth:"98%",
    height:200,
    padding:5,
    marginVertical:5,
    borderWidth:1,
    borderRadius:20,
    backgroundColor:"white",
    borderColor:"gray",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  title:{
    alignSelf:"flex-start",
    fontSize:18,
    fontWeight:"bold",
    marginVertical:3
  },

  location:{
    alignSelf:"flex-end",
    fontSize:16,
    marginVertical:3,
    marginHorizontal:6
  },

  icon:{
    fontSize:18
  },

  description:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },

  contactInfo:{
    height:"20%",
    alignContent:"flex-end",
    alignSelf:"flex-end",
  }
})