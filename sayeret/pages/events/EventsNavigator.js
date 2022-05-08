import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EventCal from './events'
import AddEvent from './AddEvent'

const Stack = createStackNavigator();

const EventsNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='events' component={EventCal}/>
        <Stack.Screen name='addEvent' component={AddEvent}/>
    </Stack.Navigator>
  )
}

export default EventsNavigator

const styles = StyleSheet.create({})