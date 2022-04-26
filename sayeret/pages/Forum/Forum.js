import { createStackNavigator } from '@react-navigation/stack';

import WriteToForum from './forumWrite'; 
import OpenForum from './OpenForum'; 
import ForumMain from './ForumMain';
import { Header } from 'react-native-elements';

const Stack = createStackNavigator();

const Forum = props=>{
    
    return(
            <Stack.Navigator>
                <Stack.Screen name="A" component={ForumMain}/>
                <Stack.Screen name="B" component={OpenForum}/>
                <Stack.Screen name="C" component={WriteToForum}/>
            </Stack.Navigator>
    );
}

export default Forum;