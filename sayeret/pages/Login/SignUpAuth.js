import { View, Text ,TextInput,StyleSheet,TouchableOpacity,Alert,Keyboard, KeyboardAvoidingView} from 'react-native'
import {React,useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import { auth } from '../../firebase';
import DropDownPicker from 'react-native-dropdown-picker';

 
const SignUpAuth = props => {
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);

  return (
    <View style={styles.container} behavior="padding">
      <View style = {styles.top}>
        <Text style= {styles.heading}> שאלון אימות</Text>
        <Text></Text>
        <Text>נתונים אלו יישלחו למנהל המערכת לצורך אימות פרטי המשתמש</Text>
      </View>

      <View style = {styles.bottom}>
        <View style = {styles.inputView}>
          <Text style={styles.text}>האם שירתת ביחידה?</Text>
          <View style ={styles.choiceView}>   
            <TouchableOpacity 
            onPress={()=>{setShow1(true);setShow2(false)}}
            style={styles.choiceButton}
            >
              <Text style={styles.choiceText}>כן</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{setShow2(true); setShow1(false)}}
            style={styles.choiceButton}
            >
              <Text style={styles.choiceText}>לא</Text>
            </TouchableOpacity>  
          </View>  
          {show1?
            <View styel= {styles.show}>
              <Text style={styles.text}>באיזה שנה?</Text>
              <TextInput  
                style={styles.showInput}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />
              <Text style={styles.text}>באיזה מחזור?</Text>
              <TextInput  
                style={styles.showInput}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />
              <Text style={styles.text}>באיזה צוות?</Text>
              <TextInput  
                style={styles.showInput}
                placeholder='...'
                placeholderTextColor={"#fff"}
              />  
            </View>:null}
            {show2?
              <View>
                <Text style={styles.text}>מדוע אתה מעוניין להצטרף?</Text>
                <TextInput  
                  style={styles.showInput}
                  placeholder='...'
                  placeholderTextColor={"#fff"}
                /> 
            </View>:null}
            <TouchableOpacity style = {styles.buttons}>
              <Text style = {styles.buttonText} >סיום</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
};
    
  

const styles = StyleSheet.create({
  container:{
    width:'100%',
    flex:1,
    flexDirection:'column',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
 },
 top:{
    width:'100%',
    height:'25%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingBottom:20,
    alignItems:'center',
    backgroundColor:'#fff'
 },
 heading:{
  color:'black',
  fontSize:40,
  fontWeight:'bold',
  paddingTop:15,
},
 bottom:{
     width:'100%',
     height:'75%',
     backgroundColor:'#373737fe',   
     borderTopLeftRadius:25,
     borderTopRightRadius:25,
 },
 choiceView:{
    flexDirection:'row',
    
 },
 choiceButton:{
    margin:30,
 },
 choiceText:{
    color:'#fff',
    fontSize:20,
    fontWeight:'800',
 },
 inputView:{
     width:'100%',
     display:'flex',
     flexDirection:'column',
     alignItems:'center',
     marginTop:35,
 },
 text:{
    textAlign:'left', 
    color:'#fff',
    fontWeight:'bold',
    fontSize:15,
 },
 show:{
    width:700,
    justifyContent:'center',
    alignItems:'center',
    
  
 },
 showInput:{
    display:'flex',
    borderWidth:1,
    borderColor:'#fff',
    height:48,
    borderRadius:8,
    width:350,
    padding:10,
    margin:10,
    textAlign:'right',
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
     
});

export default SignUpAuth