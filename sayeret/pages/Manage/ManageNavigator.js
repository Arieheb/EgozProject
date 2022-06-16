import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ManageInfo from './manage'
import EditAbout from '../About/EditAbout'
import EditHome from '../home/EditHome'
import EditMemorial from '../memorial/EdtiMemorial'

const Stack = createStackNavigator();

const EventsNavigator = () => { 
  return (
    <Stack.Navigator>
        <Stack.Screen name="infoManage" component={ManageInfo} options={{headerShown: false}}  />
        <Stack.Screen name="HomeEdit" component={EditHome} options={{headerShown: false}}  />
        <Stack.Screen name="AboutEdit" component={EditAbout} options={{headerShown: false}} />
        <Stack.Screen name="MemorialEdit" component={EditMemorial} options={{headerShown: false}} />

    </Stack.Navigator>
  )
}

export default EventsNavigator

const styles = StyleSheet.create({})