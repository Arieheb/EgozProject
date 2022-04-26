import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './pages/Login/Login' 
import Forum from './pages/Forum/Forum';
import SignUpScreen from './pages/Login/SignUp' 

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <SignUpScreen/>
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