import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

import Home from './pages/home/Home'
import Forum from './pages/Forum/Forum' 

// const Drawer = createDrawerNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName='Home'>
    //     <Drawer.Screen name='Home' component={Home}/>
    //     <Drawer.Screen name='OpenForum' component={OpenForum}/>
    //   </Drawer.Navigator>
    // </NavigationContainer>
      <Forum></Forum>
    // <View style={styles.container}><Text>work on somthing else</Text></View>
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