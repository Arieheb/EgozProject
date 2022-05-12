
import {  Modal, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Blurp from './ModalTemp';
import ProfilePic from '../../assets/Images/profile.png';
import logoGrey from '../../assets/Images/logo_grey.png';
import { FlatList } from 'react-native-gesture-handler';




const Memorial = (props) => { 
    

  const names = [
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
    
    const Item = ({item}) => {
        return 
        <View style = {styles.item}>{item.icon}</View>
    }
    
     return (
       
        <View style = {styles.container}>
            
                    <ScrollView>
                        <View name = 'Avner Saadon'>
                            <Blurp name = {names[0].name}  info = {names[0].info} image = {names[0].image} link = {names[0].link} semitary = {names[0].semitary} part = {names[0].part} row = {names[0].row} graveNumber = {names[0].graveNumber} />
                        </View>
                        <View name = 'Avner Saadon'>
                            <Blurp name = {names[1].name}  info = {names[1].info} image = {names[1].image} link = {names[1].link} semitary = {names[1].semitary} part = {names[1].part} row = {names[1].row} graveNumber = {names[1].graveNumber}/>
                        </View>
                        <View name = 'Avner Saadon'>
                            <Blurp name = {names[2].name}  info = {names[2].info} image = {names[2].image} link = {names[2].link} semitary = {names[2].semitary} part = {names[2].part} row = {names[2].row} graveNumber = {names[2].graveNumber}/>
                        </View>
                        <View name = 'Avner Saadon'>
                            <Blurp name = {names[0].name}  info = {names[0].info} image = {names[0].image} link = {names[0].link} semitary = {names[0].semitary} part = {names[0].part} row = {names[0].row} graveNumber = {names[0].graveNumber}/>
                        </View>
                    </ScrollView>
                
{/*             
            <View name = 'Avraham hameiri'>
                <Blurp/>
            </View>

            <View name = 'Eduard '>
                <Blurp/>
            </View>
            
            <View name = 'Offir planter'>
                <Blurp/>
            </View>

            <View name = 'ofek klugman'>
                <Blurp/>
            </View>

            <View name = 'Eliyahu mitlman'>
                <Blurp/>
            </View>

            <View name = 'Alexsander shwartsman'>
                <Blurp/>
            </View>

            <View name = 'Amnon bar ner'>
                <Blurp/>
            </View> */}
        </View>
    );
  };
  
  export default Memorial 

  const styles = StyleSheet.create({
    container: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        flexDirection: 'row'
      },
    item: {
        flex: 1,
        maxWidth: "50%", // 100% devided by the number of rows you want
        alignItems: "center", 
        // my visual styles; not important for the grid
        padding: 10,
        backgroundColor: "rgba(249, 180, 45, 0.25)",
        borderWidth: 1.5,
        borderColor: "#fff",
        height: 300
      }


  });
  