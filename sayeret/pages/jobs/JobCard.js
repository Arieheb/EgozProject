import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobCard = ({title,location,description}) => {
  return (
    <View style={styles.cardContainer}>
      <View >
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{location}</Text>
      </View>
      <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
        <Text style={{textAlign:"center"}}>
          {description}
        </Text>
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
    borderColor:"gray",
  },
  text:{
    alignSelf:"flex-end",
    fontSize:18,
    marginVertical:3
  }
})