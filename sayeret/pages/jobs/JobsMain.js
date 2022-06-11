import React, {useState , useEffect} from 'react';
import {Text,Button, View, StyleSheet,FlatList, TouchableOpacity} from 'react-native';
import { Linking } from 'react-native';
import JobCard from './JobCard';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Icons from "react-native-vector-icons/FontAwesome5";
import { collection, query, orderBy, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';





const JobsMain = props=>{
    const [jobsList, updateJobsList] = useState([]);
    useEffect (()=>{
        const collectionJobs = collection(db, 'jobs');
        const que = query (collectionJobs);
        
        const unsubscribe = onSnapshot (que, QuerySnapshot => {
            updateJobsList(
                QuerySnapshot.docs.map (doc => ({
                    id: doc.id,
                    contactName: doc.data().name,
                    description: doc.data().description,
                    contactEmail: doc.data().email,
                    title: doc.data().title,
                    location: doc.data().location,
                    contactPhone: doc.data().phone,

                }))
            );
        });
        return () => unsubscribe();
     },[]);

    function goToAddJob (){
        props.navigation.navigate('B');
    }

    return(
        <View style={styles.container}>
            <View style={styles.jobGroups}>
                <Text style={styles.jobGroupsTitle}>קבוצות ה-WhatsApp שלנו:</Text>
                <View style={styles.jobGroupsLinks}>
                <TouchableOpacity style = {styles.jobGroupsLink} onPress={()=>Linking.openURL("https://chat.whatsapp.com/Jyd1Rw8XaHcIaJ2I8j5OCL")}>
                       <Text>היי-טק</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.jobGroupsLink} onPress={()=>Linking.openURL("https://chat.whatsapp.com/I6oOrQn0BfT3mGFaUig2Oc")}>
                      <Text>כללי</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
                <FlatList   
                    style={{width:"100%",}}
                    contentContainerStyle={{alignItems:"center"}}
                    data={jobsList}
                    renderItem={({item}) => {
                        return <JobCard id={item.id} title={item.title} location={item.location} contactName={item.contactName} contactPhone={item.contactPhone} contactEmail={item.contactEmail} description={item.description}/>
                    }}
                />  
                <View style={{height: '10%', justifyContent:'center'}}>
                        <TouchableOpacity style = {styles.plusButton} onPress={()=>goToAddJob()}>
                            <Icon name ="plus"  color="white"  size={45}/>   
                        </TouchableOpacity> 
                </View>
        </View> 
    );
}

const styles = StyleSheet.create({
jobGroups:{
    width:"98%",
    minWidth:"98%",
    height:50,
    padding:5,
    marginVertical:10,
    borderWidth:1,
    borderRadius:4,
    backgroundColor:"white",
    borderColor:"gray",
    alignContent:"center",
    borderRadius: 20,
    shadowOffset: {
        width: 2,
        height: 2
      },
      shadowOpacity: 0.5,
      shadowRadius: 5,
      alignItems: 'center',
      flexDirection:'row',
},
jobGroupsTitle:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:18,
    paddingBottom:3,
    alignItems: 'center',
    flexDirection:'row',
},
jobGroupsLinks:{
   
    flexDirection:'row',
    justifyContent: 'space-evenly',
    flex:1,
},
jobGroupsLink:{
    color:"#35DB4E",
    backgroundColor:"white",
    fontWeight:"bold",
    fontSize:14,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent:"center",
},
    container:{
    flex:1,
    alignItems:"center",
},
titleText:{
    fontSize:22,
},
plusButton: {
    borderRadius: 100,
    width: 60,
    height: 60,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    marginTop: '10%',
    marginBottom: '10%',
    borderColor: "white",
    borderWidth: 0.5,
    alignItems:'center',
    justifyContent:'center',
},
})

export default JobsMain
