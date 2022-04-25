import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './pages/Login/Login' 
import WriteToForum from './pages/Forum/forumWrite';

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
     <LoginScreen/>
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