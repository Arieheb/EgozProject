import React, {useState} from 'react';
import {Text,Button, View, StyleSheet} from 'react-native';

const ForumMain = props=>{
    const [forumList, updateForumList] = useState([])

    function goToOpenAForum (){
        props.navigation.navigate('C');
    }

    return(
        
         <View>
                <Text>OpenForum</Text>
                <Button title='go to a forum' onPress={goToOpenAForum}></Button>
            </View> 
    );
}

const styles = StyleSheet.create({

})

export default ForumMain
