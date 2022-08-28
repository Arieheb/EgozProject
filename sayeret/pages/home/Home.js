import React, { useEffect, useState } from 'react';
import {Image, View,Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground, Linking} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icons from "react-native-vector-icons/FontAwesome5";
import map from "../../assets/Images/dark-topography.jpg";
import masa from "../../assets/Images/unit-hero.jpg";
import inst from "../../assets/Images/Instagram_logo.png";
import fb from "../../assets/Images/Facebook_logo.png";
import contact from "../../assets/Images/contact-us.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {db} from '../../firebase';
import { collection, query, onSnapshot, where} from 'firebase/firestore';


const NumberCard = props=>{
    return(
        <View style={{alignItems: "center"}}>
            <Text style={styles.title}>{props.num}</Text>
            <Text style={styles.content}>{props.title}</Text>
        </View>
    )
}

const UpCard = props=>{
    return(
        <View style = {styles.topButton}>
        <View style={{alignItems: "center"}}>
            <View style = {styles.icon}>
                {props.icon === 'hand-holding-heart'?
                <Icons name ={props.icon} color="white" size={25}/>:
                <Icon name ={props.icon} color="white" size={props.size?props.size:25}/>}
            </View>
            <Text style={{...styles.Text,color:"white"}}>{props.Text}</Text>
        </View>
        </View>
    )
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

const Home = props=>{
    const [numbers, setNumbers] = useState([]);
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [vid, setVid] = useState("")

    useEffect(async ()=>{
        const q = query(collection(db, 'edits'));
        onSnapshot(q, result=>
        result.docs.forEach(doc=>{
            if(doc.id=="numbers"){
                let member = doc.data().members;
                let projects = doc.data().projects;
                let seniors = doc.data().seniors;
                let years = doc.data().years;
                setNumbers([years,member,projects,seniors]);
            }
            if(doc.id == "facebook"){
                setFacebook(doc.data().link)
            }
            if(doc.id == "instagram"){
                setInstagram(doc.data().link)
            }
            if(doc.id == "video"){
                setVid(youtube_parser(doc.data().link))
            }
            
        }))
    },[])

    return(
    <ScrollView overScrollMode='never'>
        <View style = {styles.container}>
            <ImageBackground style = {styles.map} source={map} resizeMode = "cover">
                <View style = {styles.tint}>
                        <View style = {styles.topButtonView}>
                            <TouchableOpacity  onPress={()=>props.navigation.navigate("Benefits")}>
                                    <UpCard icon="gift" Text = "הטבות" />
                                </TouchableOpacity>
                            <TouchableOpacity onPress={()=>props.navigation.navigate("jobs")}>
                                    <UpCard icon="briefcase" Text="משרות"/>
                                </TouchableOpacity>
                            <TouchableOpacity onPress={()=>props.navigation.navigate("calendar")}>
                                    <UpCard icon="calendar-month" Text = "אירועים" />
                                </TouchableOpacity>
                </View>
                <Text style={styles.title}>הסיירת הצפונית</Text>
                <Text style={styles.content}>עמותת הסיירת הצפונית הוקמה לאחר מלחמת יום הכיפור, מורכבת מבוגרי היחידה והמשפחות השכולות. מטרות העמותה הן טיפוח היחידה, לוחמיה ובוגריה, והנצחת חללי היחידה. חברי העמותה פועלים בהתנדבות על פי כישוריהם ובזמנם הפרטי. </Text>
                </View>
                <YoutubePlayer 
                    height={230}
                    videoId ={vid}
                    style = {styles.video}
                /> 
            </ImageBackground>
            <View style={styles.stat}>
                <View>
              <NumberCard num = {numbers[0]} title = "שנות פעילות" />
              <NumberCard num = {numbers[1]} title = "חברים בעמותה"/>
                </View>
                <View>
                    <NumberCard num ={numbers[2]} title = "פרויקטים פעילים"/>
                    <NumberCard num = {numbers[3]} title = "בוגרי יחידה"/>
              </View>
            </View>
            <ImageBackground source={masa} style = {{...styles.view}}>
                <View style={{...styles.tint,width:'100%'}}>
                    <Text style = {styles.title}>יחידת אגוז</Text>
                    <Text style={styles.miniTitle}>מסיירת אגוז הישנה ועד היום</Text>
                    <Text style={styles.content}>כבר מעל 60 שנה להקמת הסיירת הצפונית- סיירת אגוז. הסיירת עברה גלגולים רבים במהלך השנים, פורקה והוקמה… ושוב פורקה. בשנת 1995 הוקמה יחידת אגוז פעם נוספת… היחידה מתפקדת כחוד החנית של צה”ל עד היום. עברו הרבה שנים,הרבה היתקלויות, והרבה אנשים – אך הרוח נשארה אותה רוח</Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("about")}>
                        <Text style = {styles.button}>קרא עוד</Text>
                    </TouchableOpacity>
                      <View style = {{backgroundColor:"rgba(0,0,0,0.2)",  width:'100%'}}>
                        <View style = {{...styles.bottamBar, width: '100%'}}>
                            <TouchableOpacity style={{...styles.bottomButton ,background: "#BD081C" ,borderRadius: 50, height: 78, backgroundColor: "black"}}  onPress={()=>props.navigation.navigate("Contact")}>
                                <Image source={contact} style={{ width: '90%', height: '90%',borderRadius:100, marginTop:'5%'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.bottomButton ,borderRadius: 50, height: 78, justifyContent: "center", alignItems: "center",paddingBottom: '0.5%'}} onPress={()=>Linking.openURL(facebook)}>
                                <Image source = {fb} style = {{ width: '90%', height: '96%',borderRadius:100,marginTop:'2%'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{...styles.bottomButton ,background: "#BD081C" ,borderRadius: 50, height: 78, backgroundColor: "black"}} onPress={()=>Linking.openURL(instagram)}>
                                <Image source = {inst}  style={{ width: '90%', height: '90%',marginTop:'5%',borderRadius:100}}/>
                            </TouchableOpacity>
                        </View> 
                    </View>
                </View>
            </ImageBackground> 
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '98%',
    },
    video: {
        paddingBottom: 0,
        marginBottom: 0,
        borderWidth: 0,
    },
    bottamBar: {
        flexDirection: "row",
        height: 60,
        margin: 0,
        padding: 0,
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        height: 100,
        width:'100%',
    },
    map: {
        width: '100%',
    },
    title: {
        fontWeight: "bold",
        fontSize: 40, 
        textAlign: 'center',
        marginVertical: 10,
        color:"white",
    },
    miniTitle: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: 'center',
        color:"white",
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '3%',
        color:'white',
        marginRight: 10,
        marginLeft: 10,
        paddingBottom: 10
    },
    stat: {
        flexDirection: "row",
        backgroundColor: "#525252",
        justifyContent: "space-around",
        marginTop:-10,
        paddingTop: 10,
        padding: 15
    },
    icon: {
        borderRadius: 50,
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: 50,
        height: 50,
        alignItems:"center",
        justifyContent:"center",
        margin: 0,
        padding: 0
    },
    button: {
        borderRadius: 7,
        backgroundColor: "rgba(0, 0, 0, 0)",
        width: 75,
        height: 25,
        borderColor: "white",
        borderWidth: 2, 
        // marginHorizontal: 150,
        textAlign: "center",
        alignSelf:'center',
        color:"white",
        marginBottom: '5%',
    },
    topButton: {
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 8,
        borderColor: "white",
        borderWidth: 0.5,
    },
    bottomButton: {
        borderRadius: 100,
        width: 80,
        height: 80,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        flexDirection: "row",
        textAlign: "center",
        justifyContent: "center",
        textAlign: "center",
        marginHorizontal: 20,
        marginTop: 8,
        color:"white",
        borderWidth: 0.5,
        borderColor: "white",
    },
    topButtonView: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.50)",
        height: 100,
        paddingTop: 3,
        paddingBottom: 12
   
    },
    view: {
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
    },
    tint:{
        backgroundColor:"rgba(0,0,0,0.4)",
        // paddingBottom:50,
    },

});

export default Home;