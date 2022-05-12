import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable, TextInput, View, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Blurp from './ModalTemp';
import ProfilePic from '../../assets/Images/profile.png';
import logoGrey from '../../assets/Images/logo_grey.png';




const Memorial = (props) => {
  
  const names = [{
    name: 'אבנר סעדון',
    info: " ניכר בעקשנותו ובדבקותו במטרה. הוא לא השלים עם המוסכמות של החברה ועם השגרה, או עם נטישת עיקרון למען נוחות. הוא השלים עם מציאות החיים והאמין שבכדי להצליח לשנות דברים יש צורך לרכוש עמדות כוח מהן יוכל להשפיע. הוא היה מסור לחייליו וחלק מזמנו עשה בביקורי בית אצל חייליו, בניסיון לפתור בעיות אישיות וכלכליות. כמפקד חיפש אבנר דרכים לחדש, לשכלל, לשפר ולייעל. במסעות היה נוהג לנווט בעצמו, כדי למנוע נפילת קורבנות בגלל טעות בניווט." ,
    proPicSource: 'ProfilePic',
    link: 'url'
  }]  
     return (
       
        <View>
          
            <View name = 'Avner Saadon'>
                <Blurp name = {names[0].name}  info = {names[0].info} image = {names[0].image} link = {names[0].link} />
            </View>
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

  const styles = StyleSheet.create({});
  