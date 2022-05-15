import { createStackNavigator } from '@react-navigation/stack';

import WriteToForum from './forumWrite'; 
import OpenForum from './OpenForum'; 
import ForumMain from './ForumMain';

const Stack = createStackNavigator();

const Forum = props=>{
    
    return(
            <Stack.Navigator >
                <Stack.Screen options={{headerShown:false}} name="A" component={ForumMain}/>
                <Stack.Screen name="B" component={WriteToForum}/>
                <Stack.Screen name="C" component={OpenForum}/>
            </Stack.Navigator>
    );
};

export default Forum;