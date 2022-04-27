import React, {useState} from 'react';
import {Text,Button, View, StyleSheet} from 'react-native';

const JobsMain = props=>{
    const [JobsList, updateJobsList] = useState([])

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        
        <View>
            <Text>AddJob</Text>
            <Button title='Add a New Job' onPress={goToAddJob}></Button>
        </View> 
    );
}

const styles = StyleSheet.create({

})

export default JobsMain
