import React from 'react'
import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Memorial from './memorial'
import AddMemorial from './AddMemorial'

const Stack = createStackNavigator();

const MemorialNavigator = () => { 
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Memorials' component={Memorial}/>
        <Stack.Screen options={{headerShown:false}} name = 'addMemory' component={AddMemorial}/>
    </Stack.Navigator>
  )
}

export default MemorialNavigator

const styles = StyleSheet.create({})