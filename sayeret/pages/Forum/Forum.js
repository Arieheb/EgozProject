import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WriteToForum from './forumWrite'; 
import OpenForum from './OpenForum'; 
import ForumMain from './ForumMain';

const Stack = createStackNavigator();

const Forum = props=>{
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="A" component={ForumMain}/>
                <Stack.Screen name="B" component={OpenForum}/>
                <Stack.Screen name="C" component={WriteToForum}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Forum;