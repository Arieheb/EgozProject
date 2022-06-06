import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import React, {useState, useEffect} from 'react';
import {I18nManager, StyleSheet, Text, View } from 'react-native';
import CodePush from 'react-native-code-push';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase';
import {WebView} from 'react-native-webview';


import DrawerContent from './DrawerContent';

import LoginScreen from './pages/Login/Login'; 
import Forum from './pages/Forum/Forum';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import About from './pages/About/About';
import SignUp from './pages/Login/SignUp';
import Profile from './pages/myInfo/myInfo';
import EventsNavigator from './pages/events/EventsNavigator';
import Contact from './pages/contact/Contact';
import Memorial from './pages/memorial/memorial';
import Benefits from './pages/benefits/benefits';
import Store from './pages/store/Store';
import Admin from './pages/Admin/Admin';
// import membership from './pages/memberPay/Membership'
import { TouchableOpacity } from 'react-native-gesture-handler';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function App() {

  //forcing the app to be right to left
  if(!I18nManager.isRTL){
      I18nManager.forceRTL(true);
      CodePush.restartApp();
  }
  LogBox.ignoreLogs(['Setting a timer']);

  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
  }
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(!user){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerMode:'none'}} name='login' component={LoginScreen}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  return (
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>} screenOptions={{drawerPosition:'right'}}>
          <Drawer.Screen name='home' component={Home} options={{headerRight: () => (
                  <TouchableOpacity style={styles.memberBtn} onPress = {()=> props.navigation.navigate("PayMember")}
                     //need to input link to membership 
                     //https://shop117095.istores.co.il/%D7%97%D7%91%D7%A8-%D7%A2%D7%9E%D7%95%D7%AA%D7%94-%D7%97%D7%91%D7%A8%D7%95%D7%AA-%D7%A9%D7%A0%D7%AA%D7%99%D7%AA/                   
                  >
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='jobs' component={Jobs} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='about' component={About} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='forums' component={Forum} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='profile' component={Profile} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='calendar' component={EventsNavigator} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='Benefits' component={Benefits} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='Contact' component={Contact} options={{headerRight: () => (
                  <TouchableOpacity 
                    style={styles.memberBtn} 
                    onPress = {()=> {
                     //need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }}/>
          <Drawer.Screen name='Memorial' component={Memorial} options={{headerRight: () => (
                  
                  
                  
                  <TouchableOpacity style={styles.memberBtn} onPress = {()=> {//need to input link to membership                    
                  }}>
                      <Text style={styles.text}>תשלום חברות</Text>
                  </TouchableOpacity>
                ),
              }
              }/>
          <Drawer.Screen name='store' component={Store} />
          {/* <Drawer.Screen name='membership' component={membership} /> */}




          <Drawer.Screen name='admin' component={Admin} />
          <Drawer.Screen options={{headerMode:'none'}} name='login' component={LoginScreen} />
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
  memberBtn:{
    borderWidth:2,
    borderRadius:20,
    backgroundColor:"white",
    borderColor:"gray",
    shadowOffset: {
      width: 2,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    
      
  },
  text:{
    justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 10,
      fontSize: 18,
  },
})