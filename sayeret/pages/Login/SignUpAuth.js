import { View, Text ,TextInput, Picker , StyleSheet,TouchableOpacity,StatusBar} from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { ScrollView } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';

const data = [
    {
      title: 'הירשם',
      text: 'Description.\nSay something cool',
      //image: require('../../assets/1.jpg'),
      bg: '#59b2ab',
      key:1,
    },
    {
      title: 'שאלון הרשמה',
      text: 'Other cool stuff',
      //image: require('../../assets/2.jpg'),
      bg: '#febe29',
      key:2,
      
    },
    
  ];
 
const SignUpAuth = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const renderItem = ({item}) => {
      if(item.key ==1)
      return (
    
        < View style={styles.container}>
            <View style = {styles.top}>
                <Text style= {styles.heading}>{item.title}</Text>
            </View>
            <View style = {styles.bottom}>
                <View style = {styles.inputView}>
                    <TextInput placeholder='Email:'
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    
                    />
                    <TextInput placeholder='Password:' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                    secureTextEntry
                    />
                    <TextInput placeholder='Confirm Password:' 
                    style={styles.input}
                    placeholderTextColor={"#fff"}
                   
                    secureTextEntry
                    />
                    <TouchableOpacity style = {styles.buttons} >
                        <Text style = {styles.buttonText} >הירשם</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
        
        );
      else
      return (
        < View style={styles.container}>
            <View style = {styles.top}>
                <Text style= {styles.heading}></Text>
            </View>
            <ScrollView style = {styles.bottom}>
                <View style = {styles.inputView}>
                <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                  }}
                  rowTextForSelection={(item, index) => {
                    return item
                  }}
                />
                </View>
            </ScrollView>
        </View> 
        
        );
    };
    
   const keyExtractor = (item) => item.title;

   return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        //nextRender={nextRender}
        data={data}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        flexDirection:'column',
 
     },
     top:{
        width:'100%',
        height:'30%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'flex-end',
        paddingBottom:30,
        paddingLeft:30,
     },
     bottom:{
         width:'100%',
         height:'70%',
         backgroundColor:'#31386C',  
         borderTopLeftRadius:25,
         borderTopRightRadius:25,
         
     },
     heading:{
         color:'black',
         fontSize:40,
         fontWeight:'bold',
         marginLeft:20,
         marginTop:20,
     },
     inputView:{
         width:'100%',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         marginTop:35,
     },
     input: {
        width:'90%',
        borderWidth:1,
        borderColor:'#fff',
        height:52,
        borderRadius:8,
        paddingRight:15,
        margin:10,
        padding:10,
        color:"white",
     },
     buttons:{  
        alignItems:'center',
        width:'90%',
        color:'blue',
        height:55,
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:20,
        display:'flex',
        justifyContent:'center',
     },
     buttonText:{
         fontWeight:'bold',
         fontSize:19,
     },
     picker:{
       
     }
  });

export default SignUpAuth