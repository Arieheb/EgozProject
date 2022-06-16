import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ManageInfo from './manage'
import EditAbout from '../About/EditAbout'
import EditHome from '../home/EditHome'
import EditMemorial from '../memorial/'

const Stack = createStackNavigator();

const EventsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='editMemorial' component={EditMemorial}/>
        <Stack.Screen options={{headerShown: false}} name='editAbout' component={EditAbout}/>
        <Stack.Screen options={{headerShown: false}} name='editHome' component={EditHome}/>
        <Stack.Screen options={{headerShown: false}} name='manageInfo' component={ManageInfo}/>

    </Stack.Navigator>
  )
}

export default EventsNavigator

const styles = StyleSheet.create({})