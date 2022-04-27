import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import JobsMain from './JobsMain';
import AddJob from './AddJob';

const Stack = createStackNavigator();



const Jobs = () => {

  return (
   
    
      <Stack.Navigator screenOptions={{headerShown:true}}>
          <Stack.Screen name="A" component={JobsMain}/>
          <Stack.Screen name="B" component={AddJob}/>
      </Stack.Navigator>
   
  )
}

export default Jobs

const styles = StyleSheet.create({})