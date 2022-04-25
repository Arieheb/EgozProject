import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import Forum from './pages/Forum/Forum' 
import WriteToForum from './pages/Forum/forumWrite';

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Forum></Forum>
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