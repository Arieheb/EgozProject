import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';

import LoginScreen from './pages/Login/Login'; 
import Forum from './pages/Forum/Forum';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import About from './pages/About/About';
import SignUpScreen from './pages/Login/SignUp';
import Profile from './pages/myInfo/myInfo';
import EventCal from './pages/events/events';
import AddEvent from './pages/events/AddEvent';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(user){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUpScreen}/>        
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    
    <NavigationContainer>
     

        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='About' component={About} />
          <Drawer.Screen name='Forum' component={Forum} />
          <Drawer.Screen name='Jobs' component={Jobs} />
          <Drawer.Screen name='Events' component={EventCal} />          
          <Drawer.Screen name='Profile' component={Profile} />
          <Drawer.Screen name='AddEvent' options={{drawerItemStyle:{display:"none"}}} component={AddEvent} />
          </Drawer.Navigator>
          
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})