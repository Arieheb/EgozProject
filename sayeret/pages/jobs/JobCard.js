import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const JobCard = (props) => {
  return (
    <View>
      <Text>JobCard</Text>
      <View style={styles.image}>
          
      </View>
      <View style={styles.details}>
          <View style={styles.title}>

          </View>
          <View style={styles.location}>

          </View>
      </View>
    </View>
  )
}

export default JobCard

const styles = StyleSheet.create({
    image:{
        width: "30%"
    },

    details:{
        width: "70%"
    },

    title:{
        height: "50%"
    },

    location:{
        height: "50%"
    }
})