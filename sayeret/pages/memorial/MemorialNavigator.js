import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import EventCal from './Memorial'
import AddMemorial from './AddMemorial'

const Stack = createStackNavigator();

const MemorialNavigator = () => { 
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Memorial' component={EventCal}/>
        <Stack.Screen options={{headerShown:false}} name = 'addMemory' component={AddMemorial}/>
    </Stack.Navigator>
  )
}

export default MemorialNavigator

const styles = StyleSheet.create({})