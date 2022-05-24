
import {Modal, FlatList, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import Blurp from './ModalTemp';
import ProfilePic from '../../assets/Images/profile.png';
import logoGrey from '../../assets/Images/logo_grey.png';

const Memorial = (props) => { 

  const data = [
    {
        name: 'אבנר סעדון', 
        info: " ניכר בעקשנותו ובדבקותו במטרה. הוא לא השלים עם המוסכמות של החברה ועם השגרה, או עם נטישת עיקרון למען נוחות. הוא השלים עם מציאות החיים והאמין שבכדי להצליח לשנות דברים יש צורך לרכוש עמדות כוח מהן יוכל להשפיע. הוא היה מסור לחייליו וחלק מזמנו עשה בביקורי בית אצל חייליו, בניסיון לפתור בעיות אישיות וכלכליות. כמפקד חיפש אבנר דרכים לחדש, לשכלל, לשפר ולייעל. במסעות היה נוהג לנווט בעצמו, כדי למנוע נפילת קורבנות בגלל טעות בניווט." ,
        proPicSource: 'ProfilePic',
        link: 'url',
        semitary: 'קרית גת',
        part: '1',
        row: '2',
        graveNumber: '1'
    },
    {
        name: 'אברהם המאירי' , 
        info: 'עלה הקומנדקר, אשר בו נסע, על מוקש וכך מצא את מותו בשעת מילוי תפקידו. הובא למנוחת עולמים בבית הקברות ביבניאל. מעניין לציין את רוח ההתנדבות שפעמה בו – והעובדה הבאה תוכיח: יומיים לפני נפלו הופיע בבנק הדם שביבניאל וביקש לתרום דם לפני שיחזור ליחידתו. הרופא המקומי, אשר היטיב להכיר את אברהם ואת תפקידו ביחידה הקרבית, יעץ לו להימנע מכך באמרו:',
        proPicSource: 'ProfilePic',
        link: 'url',
        semitary: 'יבנאל- בית וגן (חלקה צבאית)',
        part: '1',
        row: '1',
        graveNumber: '4'
    },
    {
        name: 'אדוארד קורול',
        info: 'אדי בלט תמיד בין כולם, לא רק בשל גובהו הרב 1.98) מטר) אלא גם בגלל הרוגע הפנימי יוצא הדופן, שנראה לעין במצבים קשים במיוחד. הוא תמיד נהג להציב לעצמו אתגרים ויעדים שנראו בהתחלה כבלתי ניתנים להשגה, אך בכל פעם הצליח להשיגם ולהוכיח שזה אפשרי. כוח הרצון מאוד איפיין את אדי, ובלט בכל מעשיו.',
        proPicSource: 'ProfilePic',
        link: 'url',
        semitary: 'אשדוד (צבאי)',
        part: '3',
        row: '3',
        graveNumber: '9'

    },
    

    ]
    
     return (
       <View>
        <FlatList data = {data}
            keyExtractor = {item => item.name}
            renderItem = {(data) => <Blurp name = {data.item.name}  info = {data.item.info}  link = {data.item.link} semitary = {data.item.semitary} part = {data.item.part} row = {data.item.row} graveNumber = {data.item.graveNumber}  ></Blurp>}
            numColumns = {3}

>
         </FlatList>
         </View>
    );
  };
  
  export default Memorial 

  const styles = StyleSheet.create({
    container: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        
        
      },
    item: {
        flex: 1,
        maxWidth: "30%", // 100% devided by the number of rows you want
        alignItems: "center", 
        
        // my visual styles; not important for the grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff",
        height: 300
      }


  });
  