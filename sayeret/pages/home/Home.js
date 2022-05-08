import React from 'react';
import { View,Text, TouchableOpacity, StyleSheet} from 'react-native';
// import VideoPlayer from 'react-native-video-player';

const Home = props=>{
    return(
        <View>
            <View>
                <Text style={styles.title}>הסיירת הצפונית</Text>
                <Text style={styles.content}>עמותת הסיירת הצפונית הוקמה לאחר מלחמת יום הכיפור, מורכבת מבוגרי היחידה והמשפחות השכולות. מטרות העמותה הן טיפוח היחידה, לוחמיה ובוגריה, והנצחת חללי היחידה. חברי העמותה פועלים בהתנדבות על פי כישוריהם ובזמנם הפרטי. </Text>
                {/* <VideoPlayer
                    video={{ uri: "https://youtu.be/MMTuF941VzA" }}
                    videoWidth={1600}
                    videoHeight={900}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                /> */}
            </View>
            <View>
                <Text style = {styles.title}>יחידת אגוז</Text>
                <Text style={styles.miniTitle}>מסיירת אגוז הישנה ועד היום</Text>
                <Text style={styles.content}>כבר מעל 60 שנה להקמת הסיירת הצפונית- סיירת אגוז. הסיירת עברה גלגולים רבים במהלך השנים, פורקה והוקמה… ושוב פורקה. בשנת 1995 הוקמה יחידת אגוז פעם נוספת… היחידה מתפקדת כחוד החנית של צה”ל עד היום. עברו הרבה שנים,הרבה היתקלויות, והרבה אנשים – אך הרוח נשארה אותה רוח</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate("about")}>
                    <Text>קרא עוד</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 26

    },
    miniTitle: {
        fontWeight: "bold",
        fontSize: 24
    },
    content: {
        fontSize: 20
    }
});

export default Home;