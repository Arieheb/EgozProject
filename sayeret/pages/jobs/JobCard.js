import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"

const JobCard = ({title, location, contactName, contactPhone, contactEmail, description}) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{flexDirection:"row",width:"100%",justifyContent:"flex-end"}}>
        <Text style={styles.location}>
        {location}
        </Text>
        <Icon style={styles.icon} name="ios-location-outline"/>
      </View>
      <View style={styles.description}>
        <Text style={{textAlign:"center"}}>{description}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text>{contactName} - {contactPhone}</Text>
        <Text>{contactEmail}</Text>
      </View>
    </View>
  )
}

export default JobCard

const styles = StyleSheet.create({
  cardContainer:{
    width:"98%",
    height:200,
    padding:5,
    marginVertical:10,
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"white",
    borderColor:"gray"
  },

  title:{
    alignSelf:"flex-end",
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
    height:"20%"
  }

})