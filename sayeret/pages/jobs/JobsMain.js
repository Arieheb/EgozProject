import React, {useState} from 'react';
import {Text,Button, View, StyleSheet,FlatList} from 'react-native';
import JobCard from './JobCard';

const JobsMain = props=>{
    const [jobsList, updateJobsList] = useState([
        {id:0,title:"חוטב עצים",location:"ירוחם",description:"jhdgfshj hsdf dshjfvsda ksdbskj kjdfbskjb kfjbdfkj sdjf kjsd lgl ldsk lksslkds fjbjfds ldsfnl sdlk"},
        {id:1,title:"סרסור",location:"אופקים",description:"jhdgfshj hsdf dshjfvsda ksdbskj kjdfbskjb kfjbdfkj sdjf kjsd lgl ldsk lksslkds fjbjfds ldsfnl sdlk"},
        {id:2,title:"צ׳קה צ׳קה",location:"נתיבות",description:"jhdgfshj hsdf dshjfvsda ksdbskj kjdfbskjb kfjbdfkj sdjf kjsd lgl ldsk lksslkds fjbjfds ldsfnl sdlk"},
        {id:3,title:"מנהל אורחן",location:"בית שאן",description:"jhdgfshj hsdf dshjfvsda ksdbskj kjdfbskjb kfjbdfkj sdjf kjsd lgl ldsk lksslkds fjbjfds ldsfnl sdlk"}
    ]);

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        <View style={styles.container}>
                <FlatList   
                    style={{width:"100%"}}
                    contentContainerStyle={{alignItems:"center"}}
                    data={jobsList}
                    renderItem={({item}) => {
                        return <JobCard title={item.title} location={item.location} description={item.description}/>
                    }}
                />  
                <View style={{minHeight:80}}>
             <Button title='הוסף משרה חדשה' onPress={goToAddJob}></Button>
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center"
},
titleText:{
    fontSize:22,

}
})

export default JobsMain
