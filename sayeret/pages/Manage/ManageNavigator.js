import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import ManageInfo from './Manage'
import EditAbout from '../About/EditAbout'
import EditHome from '../home/EditHome'
import EditMemorial from '../memorial/EdtiMemorial'

const Stack = createStackNavigator();

const EventsNavigator = () => { 
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Manageinfo" component={ManageInfo} />
        <Stack.Screen name="HomeEdit" component={EditHome}/>
        <Stack.Screen name="AboutEdit" component={EditAbout} />
        <Stack.Screen name="MemorialEdit" component={EditMemorial} />
    </Stack.Navigator>
  )
}

export default EventsNavigator

const styles = StyleSheet.create({})