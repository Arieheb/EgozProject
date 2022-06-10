import { View, Text ,TextInput, StyleSheet,TouchableOpacity,StatusBar,Image,Dimensions,Keyboard, KeyboardAvoidingView,Alert, Platform} from 'react-native'
import {React,useState,useRef,useEffect} from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import SignUpAuth from './SignUpAuth';
import { addDoc, collection } from 'firebase/firestore'; 
// import Logo from '../../assets/Images/signUpLogo.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../../assets/Images/login_logo.png';

const{width,height:wHeight} = Dimensions.get("window");

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
  const [phone, setPhone] = useState ("")
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [year ,setYear] = useState("")
  const [generation ,setGeneration] = useState("")
  const [team ,setTeam] = useState("")
  const [why ,setWhy] = useState("")


  
  const validate = () => {
      if(email=="" || password=="" ||confirmPassword == ""){
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
        if(key==1){
          if(!email.length|| !password.length || !confirmPassword.length){
            return Alert.alert("אחד מהנתונים חסרים")
          }
          if(password!=confirmPassword){
            return Alert.alert("הסיסמאות אינן זהות")
          }
        }
        if(key==2){
          if(!firstName.length||!LastName.length||!address.length ||!city.length ||!phone.length){
            return Alert.alert("אחד מהנתונים חסרים")
          }
          if(password!=confirmPassword){
            return Alert.alert("הסיסמאות אינן זהות")
          }
        }
        if (show1) {
            if(!year.length){
              return Alert.alert("יש להזין את שם האירוע")
            }
            if(!generation.length){
              return Alert.alert("יש להזין את מיקום המאירוע")
            }
            if(!team.length){
              return Alert.alert("יש להזין את תיאור האירוע")
            }           
        }
        else {
          if(!why.length){
            return Alert.alert("יש להזין את שם האירוע")
          }
        }
      
        auth
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         updateProfile(userCredential.user,{
            displayName: firstName+' '+LastName,
            photoURL: firstName+email+LastName,
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
              phone: phone,
              questionaire: {
                generation: generation,
                team: team,
                year: year,
                why: why,
                inUnit: show1
              }
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
    
      <KeyboardAvoidingView style={styles.container} behavior="padding"> 
        <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}> 
          <View style = {styles.top}>
            <Image style = {styles.logo} source={Logo} />
            <Text style = {styles.heading}>מייל וסיסמא</Text> 
          </View>
          <KeyboardAwareScrollView style = {styles.bottom}>
          
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
              onPress={() => {goToSlide(2,true)}}
                  
              >
                <Text style = {styles.buttonText} >המשך</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </TouchableOpacity>
      </KeyboardAvoidingView>  
    
    );
      //-------------------------------- second page ----------------------------------------------------------------
      else if(item.key == 2)
      return ( 
          <KeyboardAvoidingView style={styles.container} behavior="padding"> 
            <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}>
              <View style = {styles.top}>
              <Image style = {styles.logo} source={Logo} />
                <Text style= {styles.heading}>פרטים אישיים</Text>
              </View>

              <KeyboardAwareScrollView style = {styles.bottom}>
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
                <TextInput placeholder='מספר טלפון:' 
                  style={styles.input}
                  placeholderTextColor={"#fff"}
                  value={phone}
                  onChangeText={text=>setPhone(text)}
                />
                
                <TouchableOpacity style = {styles.buttons} onPress={() => 
                  {goToSlide(2,true)}} >
                  <Text style = {styles.buttonText} >המשך</Text>
                </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        
        );
        //----------------------------------------------third page ----------------------------------
      else
      return (
          
          <KeyboardAvoidingView style={styles.container} behavior="padding"> 
            <TouchableOpacity onPress={Keyboard.dismiss} activeOpacity={1}>
              <View style = {styles.top}>
                <Text style= {styles.heading}> שאלון אימות</Text>
                <Text></Text>
                <Text>נתונים אלו יישלחו למנהל המערכת לצורך אימות נתוניך</Text>
              </View>

            <KeyboardAwareScrollView style = {styles.bottom}>
              <View style = {styles.inputView}>
                <Text style={styles.text}>האם שירתת ביחידה?</Text>
                <View style ={styles.choiceView}>   
                <TouchableOpacity 
                onPress={()=>{setShow1(true);setShow2(false)}}
                style={styles.choiceButton}>
                  <Text style={styles.choiceText}>כן</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=>{setShow2(true); setShow1(false)}}
                style={styles.choiceButton}>
                  <Text style={styles.choiceText}>לא</Text>
                </TouchableOpacity>  
              </View>  
            {show1?
        
            <View styel= {styles.show}>
              <Text style={styles.text}>באיזה שנה?</Text>
              <TextInput  
                style={styles.showInput}
                placeholderTextColor={"#fff"}
                value={year}
                onChangeText={text=>setYear(text)}
              />
              <Text style={styles.text}>באיזה מחזור?</Text>
              <TextInput  
                style={styles.showInput}
                placeholderTextColor={"#fff"}
                value={generation}
                onChangeText={text=>setGeneration(text)}
              />
              <Text style={styles.text}>באיזה צוות?</Text>
              <TextInput  
                style={styles.showInput}
                placeholderTextColor={"#fff"}
                value={team}
                onChangeText={text=>setTeam(text)}
              />  
            </View>:null}
          {show2?
            <View>
              <Text style={styles.text}>מדוע אתה מעוניין להצטרף?</Text>
              <TextInput  
                style={styles.showInput}
                placeholderTextColor={"#fff"}
                value={why}
              onChangeText={text=>setWhy(text)}
              /> 
          </View>:null}
          <TouchableOpacity style = {styles.buttons} onPress = {handleSignUp}>
            <Text style = {styles.buttonText}>סיום</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
        width:'100%',
        height:'100%',
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
     },
     top:{
        width:'100%',
        height:'20%',
        display:'flex',
        alignItems:'flex-start',
        justifyContent:'center',
        paddingBottom:20,
        alignItems:'center',
        backgroundColor:'#fff'
     },
     logo:{
         flex:1,
         resizeMode:'contain',
         width:'70%',
         height: "100%"
     },
    
    heading:{
      color:'black',
      fontSize:30,
      fontWeight:'400',
      paddingTop:15,
    },
   
     bottom:{
         width:'100%',
         height:'100%',
         backgroundColor:'#373737fe',  
         borderTopLeftRadius:25,
         borderTopRightRadius:25,
        
     },
    

     inputView:{
         width:'100%',
         
        //  display:'flex',
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
        textAlign:Platform.OS==='ios'?'right':'left',
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
     
     choiceView:{
      flexDirection:'row',
   },

   choiceButton:{
    margin:20,
    borderWidth:1.5,
    borderRadius:6,
    width:50,
    height:25,
    borderColor:'#fff',
    borderTopWidth:3,
    borderLeftWidth:3,
 },
 choiceText:{
  color:'#fff',
  fontSize:20,
  fontWeight:'800',
  textAlign:'center',
},
 
    
text:{
  textAlign:'center', 
  color:'#fff',
  fontWeight:'bold',
  fontSize:16,
  
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
      
   
  });

export default SignUp
