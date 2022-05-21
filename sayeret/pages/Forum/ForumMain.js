import React, {useState} from 'react';
import {Platform,Text,Button, View, StyleSheet, FlatList,Modal,SafeAreaView} from 'react-native';
import { TouchableRipple,Avatar, shadow } from 'react-native-paper';
import Profile from "../../assets/Images/profile.png"
import WriteToForum from './forumWrite';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


const data = [
    {   id:"id1",
        name: "משתמש 1 ",
        image:Profile,
        lastMessage: "הודעה אחרונה",
        lastSent:"אתמול"
    },
    {   id:"id2",
        name:"num 2",
        image:Profile,
        lastMessage:"last message",
        lastSent:"yesterday"
    },
]



const ForumItem = props=>{
   const user = props.user
    const [visible,setVisible] = useState(false);
    return(
        <View>
            {/* the item */}
            <TouchableRipple onPress={()=>{setVisible(true)}}>
                <View style={styles.container}>
                    <Avatar.Image source={Profile}/>
                    <View style={styles.mid}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.message} numberOfLines={1}>{user.lastMessage}</Text>
                    </View>
                    <Text style={styles.last}>{user.lastSent}</Text>
                </View>
            </TouchableRipple>
            
            {/* the chat room */}
            <Modal visible={visible} style={{height:"80",opacity:1}}>
                <SafeAreaView style={styles.header}>   
                    <TouchableRipple onPress={()=>{setVisible(false)}}>
                        <Icon
                            name='arrow-right-thick'
                            size={30} 
                        />
                    </TouchableRipple>
                    <Avatar.Image 
                        source={user.image}
                        size={40}
                        style={{marginLeft:20,marginRight:10}}
                    />
                    <Text style={styles.name}>{user.name}</Text>
                </SafeAreaView>
                <WriteToForum/>
            </Modal>
        </View>    
    );
}




const ForumMain = props=>{
    const [forumList, updateForumList] = useState([])

    function goToOpenAForum (){
        props.navigation.navigate('C');
    }

    return(
        
        <View>
            <Text>OpenForum</Text>
            <Button title='add forum' onPress={goToOpenAForum}></Button>
            <FlatList data={data}
                keyExtractor = {item=>item.id}
                renderItem={(data)=><ForumItem  user={data.item} navigation={props.navigation}/>}
            />
            
        </View> 
    );
};

const styles = StyleSheet.create({
    name:{
        fontWeight:'bold',
        fontSize:20,
        alignSelf: "flex-start",
    },
    message:{
        alignSelf: "flex-start",
    },
    last:{
        alignItems:'flex-start',
    },
    mid:{
        width:"50%",
        marginLeft:20,
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:8,
        marginHorizontal:20
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:15,
        backgroundColor:"#00aadd",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        paddingTop: Platform.OS === 'ios'? 30:15,
        
    }

})

export default ForumMain
