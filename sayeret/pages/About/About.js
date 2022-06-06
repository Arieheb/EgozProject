import { StyleSheet, Text, View,ScrollView, Image,ImageBackground,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import Unit from '../../assets/Images/egoz_pic.png';

const About = () => {
  const [show1,setShow1] = useState(false);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);
  const [show4,setShow4] = useState(false);
  const [show5,setShow5] = useState(false);

  return (
    <ScrollView style = {styles.container}>
        <TouchableOpacity onPress={()=>{if(show1)setShow1(false);else setShow1(true)}}>
          <ImageBackground style={styles.image} source= {Unit} resizeMode='cover'>
            <Text style = {styles.title}> על היחידה </Text>
          </ImageBackground>
        
        </TouchableOpacity>
         
      {show1?
        <View>
            <Text style = {styles.content}>יחידת אגוז הוקמה בשנת 1995 ונקראה על שמה של סיירת “אגוז” המיתולוגית.
                 היחידה הוקמה על מנת להביא למהפך ביכולות צה”ל מול ארגון הטרור “חיזבאללה”-
                 ולהכריע את האויב בכל מפגש. עד היום “אגוז” מתמחה בלוחמת גרילה – 
                ומביאה את יכולותיה הייחודיות על מנת להכריע כל אויב בכל מקום.
                 תמצית הרוח של אגוז באה לידי ביטוי בסיסמת היחידה:
                 “ארדוף אויביי ואשיגם ולא אשוב עד כלותם”.
               “אגוז” מתמחה בלחימה בטווחים קרובים, בשטח סבוך, בשדאות, הסוואה וכן בלוחמה זעירה 
               – לחימת טווח קצר שבה איכותו ומקצועיותו של הלוחם מהוות את המרכיב העיקרי להצלחתה. 
               היחידה פועלת בכל זמן, בכל זירה ובכל גזרה ותמיד מנצחת!
               </Text>
        </View>:null}

        <View>
          <TouchableOpacity onPress={()=>{if(show2)setShow2(false);else setShow2(true)}}>
          <ImageBackground style={styles.image} source={require('../../assets/Images/amuta_egoz.png')} resizeMode='cover' >
            <Text style = {styles.title}>על העמותה</Text>
          </ImageBackground>
          
          </TouchableOpacity>
         
        </View>

        {show2?

        <View>
          <Text style = {styles.content}>
                  עמותת הסיירת הצפונית הוקמה לאחר מלחמת יום הכיפור, מורכבת מבוגרי היחידה והמשפחות השכולות
                 , מטרתה היינו טיפוח היחידה, לוחמיה ובוגריה, והנצחת חללי היחידה.
                 העמותה רשומה במרשם העמותות ועומדת בקריטריונים למנהל תקין
                 , פועלת תחת פיקוח ועדת ביקורת ועל ידי רואה חשבון ועורך דין, מוכרת לצורכי מס על פי סעיף 
                 46. חברי העמותה פועלים בהתנדבות על פי כישוריהם ובזמנם הפרטי. 
                 יעדי העמותה: ליווי היחידה הסדירה ולוחמיה
                 ,דאגה למשתחררים מהיחידה, הנצחת חללי היחידה ושימור קשר בין בוגרי היחידה והיחידה.
          </Text>
        </View>:null}

        <View>
          <TouchableOpacity onPress={()=>{if(show3)setShow3(false);else setShow3(true)}}>
          <ImageBackground style={styles.image} source={require('../../assets/Images/new_egoz_pic.png')} resizeMode='cover'>
            <Text style = {styles.title}>1956 - הקמת סיירת אגוז</Text>
          </ImageBackground>
         
          </TouchableOpacity>
          
        </View>

        {show3?

        <View>
          <Text style = {styles.content}>סיירת אגוז הוקמה לראשונה בשנת 
            1956, כסיירת הפיקודית של פיקוד הצפון בהוראת יצחק רבין ז”ל
            , היחידה נסגרה ב1957 והוקמה מחדש 1963 עד לסגירתה לאחר מלחמת יום הכיפורים.</Text>
        </View>:null}

        <View>
          <TouchableOpacity onPress={()=>{if(show4)setShow4(false);else setShow4(true)}}>
          <ImageBackground style={styles.image} source={require('../../assets/Images/walking_egoz.png')} resizeMode='cover'>
          <Text style = {styles.title}>1995 - הקמת יחידת אגוז</Text>
          </ImageBackground>
          
          </TouchableOpacity>
         
        </View>

        {show4?

        <View >
          <Text style = {styles.content}>“אגוז” הוקמה בינואר 1995 על מנת לנצח בכל מפגש מול חיזבאללה
            , תוך זמן קצר לוחמי היחידה החלו לקצור הצלחות
            . הכרעה בכל היתקלות ושינוי מאזן הכוחות בדרום לבנון
            . “ארדוף אויבי ואשיגם ולא אשוב עד כלותם…”</Text>
        </View>:null}


        <View>
          <TouchableOpacity onPress={()=>{if(show5)setShow5(false);else setShow5(true)}}>
          <ImageBackground style={styles.image} source={require('../../assets/Images/commando_egoz.png')} resizeMode='cover' >
            <Text style = {styles.title}>2015 - הצטרפות לחטיבת הקומנדו</Text>
          </ImageBackground>

          </TouchableOpacity>
       
        </View>

        {show5?

        <View>
          <Text style = {styles.content}>חטיבת עֹוז (חטיבה 89), הידועה יותר בכינוי חטיבת הקומנדו
            , היא חטיבת חיל רגלים למבצעים מיוחדים של זרוע היבשה בצה”ל
            . החטיבה מאגדת תחתיה שלוש יחידות קומנדו - אגוז, מגלן ודובדבן.</Text>
        </View>:null}
 
    </ScrollView>
  );
};


const styles = StyleSheet.create({
 container:{
   flex:1, 
  },
  title:{
    width:'100%',
    textAlign:'left',
    justifyContent:'center',
    fontSize:26,
    fontWeight:'bold',
    paddingVertical:60,
    marginHorizontal:50,
    textShadowRadius:10,
    textShadowOffset: {width:0, height:0},
    textShadowColor:"black",
    textDecorationColor:"white",
    color:"white",
    

    

  },
  content:{
    fontSize:20,
    paddingRight:10,
    paddingLeft:10,
    direction: "rtl",
  },
  image:{
    
  },

})
export default About