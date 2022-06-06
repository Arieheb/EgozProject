import { View, Text ,TextInput, StyleSheet,TouchableOpacity,StatusBar,Image,Dimensions,Keyboard, KeyboardAvoidingView} from 'react-native'
import {React,useState} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { ScrollView } from 'react-native-gesture-handler';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import SignUpAuth from './SignUpAuth';
const{width,height:wHeight} = Dimensions.get("window");
import { addDoc, collection } from 'firebase/firestore'; 
import Logo from '../../assets/Images/signUpLogo.png';
const data = [
    {
      title: 'הירשם',
      text: 'Description.\nSay something cool',
      //image: require('../../assets/1.jpg'),
      bg: '#59b2ab',
      key:1,
    },
    {
      title: 'פרטים אישיים',
      text: 'Other cool stuff',
      //image: ,
      bg: '#373737fe',
      key:2,
      
    },
    {
      title: 'שאלון הרשמה',
      text: 'Other cool stuff',
      //image: ,
      bg: '#373737fe',
      key:3,
      
    },
    
  ];
 
const SignUp = props => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [firstName, setFirstName] =useState("")
  const [LastName, setLastName] =useState("")
  const [address, setAddress] =useState("")
  const [city, setCity] =useState("") 
  
  const validate = () => {
      if(email=="" || password==""){
        alert("אחד מהנתונים חסרים")
        return
      }
      if(password!=confirmPassword){
        alert("הסיסמאות אינן זהות")
        return
      }
  }
  const renderItem = ({item}) => {
    const handleSignUp = () =>
      {   
        auth
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         updateProfile(userCredential.user,{
            displayName: firstName+' '+LastName,
          })
            addDoc(collection(db,"users"),{
              Address:address,
              city:city,
              FirstName:firstName,
              LastName:LastName,
              email:auth.currentUser.email,
              isAdmin:false,
              isMember:false,
              guest:true,
              user_id:auth.currentUser.uid,
              pic:"",
              password:password,
            })
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
        }
    //----------------------------------------first page ----------------------------
    if(item.key == 1)
    return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="padding"> 
        <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}> 
          <View style = {styles.top}>
            <Image style = {styles.logo} source={Logo} 
            styles={styles.logo}/>
          </View>
          <View style = {styles.bottom}>
            <View style = {styles.inputView}>
              <TextInput placeholder='אימייל:'
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={email}
                onChangeText={text=>setEmail(text)}
              />
              <TextInput placeholder='סיסמא:' 
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={password}
                onChangeText={text=>setPassword(text)}
                secureTextEntry
              />
              <TextInput placeholder='אימות סיסמא:' 
                style={styles.input}
                placeholderTextColor={"#fff"}
                value={confirmPassword}
                onChangeText={text=>setConfirmPassword(text)}
                secureTextEntry
              />
              <TouchableOpacity 
              style = {styles.buttons} 
              onPress = {validate}>
                <Text style = {styles.buttonText} >המשך</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>  
    </ScrollView>
    );
      //-------------------------------- second page ----------------------------------------------------------------
      else if(item.key == 2)
      return ( 
        <ScrollView>
          <KeyboardAvoidingView style={styles.container} behavior="padding"> 
            <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}>
              <View style = {styles.top}>
                <Text style= {styles.heading}>פרטים אישיים</Text>
              </View>

              <View style = {styles.bottom}>
                <View style = {styles.inputView}>
                 <TextInput placeholder='שם פרטי:'
                  style={styles.input}
                  placeholderTextColor={"#fff"}
                  value={firstName}
                  onChangeText={text=>setFirstName(text)}
                  />
                  <TextInput placeholder='שם משפחה:' 
                  style={styles.input}
                  placeholderTextColor={"#fff"}
                  value={LastName}
                  onChangeText={text=>setLastName(text)}
                  />
                <TextInput placeholder='כתובת:' 
                  style={styles.input}
                  placeholderTextColor={"#fff"}
                  value={address}
                  onChangeText={text=>setAddress(text)}
                />
                  <TextInput placeholder='עיר:' 
                  style={styles.input}
                  placeholderTextColor={"#fff"}
                  value={city}
                  onChangeText={text=>setCity(text)}
                />
                
                <TouchableOpacity style = {styles.buttons} onPress = {handleSignUp}>
                  <Text style = {styles.buttonText} >המשך</Text>
                </TouchableOpacity>
            </View>
            </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
        );
        //----------------------------------------------third page ----------------------------------
      else
      return (
        <SignUpAuth></SignUpAuth>
        );
    };
    
   const keyExtractor = (item) => item.title;

   return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        showNextButton={false}
        showDoneButton={false}
        showPrevButton={true}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        onDone={validate}
      />
    </View>
  );
};



const styles = StyleSheet.create({
    container:{
        height:wHeight,
        paddingTop:40,
        flexDirection:'column',
        backgroundColor:'white',
     },
     top:{
        width:'100%',
        height:'25%',
        display:'flex',
        alignItems:'center',
        backgroundColor:'#fff',
     },
     logo:{
         flex:1,
         resizeMode:'contain',
         width:'70%',
     },
   
     bottom:{
         width:'100%',
         height:'75%',
         backgroundColor:'#373737fe',  
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
        textAlign: 'right',
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

export default SignUp