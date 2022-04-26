import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './pages/Login/Login' 
import Forum from './pages/Forum/Forum';
import Home from './pages/home/Home';
import Jobs from './pages/jobs/Jobs';
import About from './pages/About/About';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='login' component={LoginScreen}/>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='jobs' component={Jobs}/>
        <Drawer.Screen name='about' component={About}/>
        <Drawer.Screen name='forum' component={Forum}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});