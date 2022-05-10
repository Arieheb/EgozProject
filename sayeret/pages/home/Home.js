import React from 'react';
import { View,Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from "react-native-vector-icons/FontAwesome5"

const NumberCard = props=>{
    return(
        <View style={{alignItems: "center"}}>
            <Text style={styles.title}>{props.num}</Text>
            <Text style={styles.content}>{props.title}</Text>
        </View>
    )
}

const GoalCard = props=>{
    return(
        <View style={{alignItems: "center"}}>
            <View style = {styles.icon}>

            </View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.content}>{props.description}</Text>
        </View>
    )
}

const Home = props=>{
    return(
        <ScrollView>
            <View style = {styles.container}>
            <View>
                <Text style={styles.title}>הסיירת הצפונית</Text>
                <Text style={styles.content}>עמותת הסיירת הצפונית הוקמה לאחר מלחמת יום הכיפור, מורכבת מבוגרי היחידה והמשפחות השכולות. מטרות העמותה הן טיפוח היחידה, לוחמיה ובוגריה, והנצחת חללי היחידה. חברי העמותה פועלים בהתנדבות על פי כישוריהם ובזמנם הפרטי. </Text>
                <YoutubePlayer 
                    height={300}
                    videoId ={  "MMTuF941VzA" }
                /> 
            </View>
            <View>
                <Text style = {styles.title}>יחידת אגוז</Text>
                <Text style={styles.miniTitle}>מסיירת אגוז הישנה ועד היום</Text>
                <Text style={styles.content}>כבר מעל 60 שנה להקמת הסיירת הצפונית- סיירת אגוז. הסיירת עברה גלגולים רבים במהלך השנים, פורקה והוקמה… ושוב פורקה. בשנת 1995 הוקמה יחידת אגוז פעם נוספת… היחידה מתפקדת כחוד החנית של צה”ל עד היום. עברו הרבה שנים,הרבה היתקלויות, והרבה אנשים – אך הרוח נשארה אותה רוח</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("about")}>
                    <Text>קרא עוד</Text>
                </TouchableOpacity>
            </View>
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
            <View>
                <Text style = {styles.title}>המטרות שלנו</Text>
                <GoalCard title = "הנצחת חיילי היחידה" description = "תחזוק אתר ההנצחה בקלעת נמרוד, קיום יום משפחות שנתי עם היחידה, ספר מורשת ותמיכת המשפחות השכולות."/>
                <GoalCard title = "שימור הקשר בין בוגרי היחידה" description = "בעזרת מפגשי הבוגרים ורשת הנטוורקינג של בוגרי היחידה תסייע לך במציאת עבודה, שותפויות עסקיות ויזמות חברתית."/>
                <GoalCard title = "דאגה למשתחררים ופצועים מהיחידה" description = "אנו מסייעים לפרויקטי המשתחררים ומקיימים סדנת “שחרור נעים” לשחרור חלק וסיוע בהשמה לעבודה."/>
                <GoalCard title = "ליווי היחידה ולוחמיה הסדירים" description = "ליווי במהלך המסלול ומתן שי למסיימי מסלול. שימור המורשת – מור”קים ודאגה לחיילים עם בעיות כלכליות."/>
            </View>
            <View>
                <Text style = {styles.title} >אירועים</Text>
            </View>
            <View>
                <Text style = {styles.title}>יזכור</Text>
            </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '98%',
        padding: 5,
    },
    
    
    title: {
        fontWeight: "bold",
        fontSize: 26, 
        textAlign: 'center',
        

    },
    miniTitle: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: 'center'
    },
    content: {
        fontSize: 20,
        textAlign: 'right'
    },
    stat: {
        flexDirection: "row",
        backgroundColor: "darkgray",
        justifyContent: "space-around"
    },
    icon: {
        borderRadius: 50,
        backgroundColor: "blue",
        width: 100,
        height: 100,
    }
});

export default Home;