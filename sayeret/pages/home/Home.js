import React from 'react';
import {Image, View,Text, TouchableOpacity, StyleSheet, ScrollView, Button, ImageBackground, Linking} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
// import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/FontAwesome5";
import map from "../../assets/Images/dark-topography.jpg";
import masa from "../../assets/Images/unit-hero.jpg";
import event from "../../assets/Images/eventsImage.jpeg";
import memorial from "../../assets/Images/izkor.jpg";
import inst from "../../assets/Images/Instagram_logo.png";
import fb from "../../assets/Images/Facebook_logo.png";
import contact from "../../assets/Images/contact-us.png";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { SocialIcon } from 'react-native-elements';
import { auth,db } from '../../firebase';
import { collection,updateDoc, doc, onSnapshot, query ,orderBy } from 'firebase/firestore';



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


const Home = props=>{
    
    return(
        <ScrollView>
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
                    videoId ={"MMTuF941VzA"}
                    style = {styles.video}
                /> 
            </ImageBackground>
            <View style={styles.stat}>
                <View>
              <NumberCard num = "45" title = "שנות פעילות"/>
              <NumberCard num = "2,172" title = "חברים בעמותה"/>
                </View>
                <View>
                    <NumberCard num = "16" title = "פרויקטים פעילים"/>
                    <NumberCard num = "9,342" title = "בוגרי יחידה"/>
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
                        <TouchableOpacity style={{...styles.bottomButton ,borderRadius: 50, height: 78, justifyContent: "center", alignItems: "center",paddingBottom: '0.5%'}} onPress={()=>Linking.openURL("https://www.facebook.com/groups/egoz.unit/")}>
                            <Image source = {fb} style = {{ width: '90%', height: '96%',borderRadius:100,marginTop:'2%'}}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.bottomButton ,background: "#BD081C" ,borderRadius: 50, height: 78, backgroundColor: "black"}} onPress={()=>Linking.openURL("https://www.instagram.com/egoz_unit/?igshid=qa32q76zyck2")}>
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
  {/* <View style = {styles.view}>
                <Text style = {{...styles.title,color:"black"}}>המטרות שלנו</Text>
                <GoalCard icon="id-card" title = "הנצחת חיילי היחידה" description = "תחזוק אתר ההנצחה בקלעת נמרוד, קיום יום משפחות שנתי עם היחידה, ספר מורשת ותמיכת המשפחות השכולות."/>
                <GoalCard icon="comments" title = "שימור הקשר בין בוגרי היחידה" description = "בעזרת מפגשי הבוגרים ורשת הנטוורקינג של בוגרי היחידה תסייע לך במציאת עבודה, שותפויות עסקיות ויזמות חברתית."/>
                <GoalCard icon="hand-holding-heart" title = "דאגה למשתחררים ופצועים מהיחידה" description = "אנו מסייעים לפרויקטי המשתחררים ומקיימים סדנת “שחרור נעים” לשחרור חלק וסיוע בהשמה לעבודה."/>
                <GoalCard icon = "handshake-o" title = "ליווי היחידה ולוחמיה הסדירים" description = "ליווי במהלך המסלול ומתן שי למסיימי מסלול. שימור המורשת – מור”קים ודאגה לחיילים עם בעיות כלכליות."/>
            </View> */}
            
            {/* <ImageBackground source={event} style = {styles.view}>
                <View style={styles.tint}>
                <Text style = {styles.title} >אירועים</Text>
                <Text style={styles.content}>ליחידת אגוז מורשת מפוארת וחלק חשוב בהובלת הלחימה של צה”ל מאז הוקמה. כל השנים היינו עסוקים בלהילחם ולנצח- היום אנו עוסקים גם בתיעוד המורשת שלנו. במסגרת זה אנו מקימים את האתר אינטרנט, כותבים ספר מורשת, מחדשים את אתר ההנצחה בקלעת נמרוד וחדר ההנצחה בנווה אטי”ב ומחדשים את ארכיון היחידה.  </Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("calendar")}>
                    <Text style = {styles.button}>קרא עוד</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground> */}

            


            {/* <ImageBackground style = {styles.map} source={map} resizeMode = "cover">
           
            </ImageBackground> */}
            {/* <ImageBackground source={memorial} style = {styles.view}>
                <View style={styles.tint}>
                <Text style = {styles.title}>יזכור</Text>
                <Text style = {styles.miniTitle}>הנצחת נופלי היחידה</Text>
                <Text style={styles.content}>עמותת הסיירת הצפונית פועלת ותמשיך לפעול למען הנצחת נופלי היחידה. זוהי אחת ממטרות הדגל של העמותה. העמותה תפעל לחיזוק הקשר בין המשפחות השכולות, הבוגרים והיחידה הסדירה.</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Memorial")}>
                    <Text style = {styles.button}>נופלים</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground> */}