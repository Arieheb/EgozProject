import { StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import JobsMain from './JobsMain';
import AddJob from './AddJob';

const Stack = createStackNavigator();


const Jobs = () => {

  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="A" component={JobsMain} options={{title:"משרות"}}/>
          <Stack.Screen name="B" component={AddJob} options={{title:"הוספת משרה חדשה"}}/>
      </Stack.Navigator>
   
  )
}

export default Jobs

const styles = StyleSheet.create({})