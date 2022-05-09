import { View, Text ,TextInput, Animated , StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';



const SignUpAuth = () => {
  return (
    < View style={styles.container}>
    <View style = {styles.top}>
        <Text style= {styles.heading}>שאלון הרשמה</Text>
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
            />
            <TextInput placeholder='Confirm Password:' 
            style={styles.input}
            placeholderTextColor={"#fff"}
            />
            <TouchableOpacity style = {styles.buttons} >
                <Text style = {styles.buttonText} >הירשם</Text>
            </TouchableOpacity>
        </View>
    </View>
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

})
export default SignUpAuth