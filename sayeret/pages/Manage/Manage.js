import {React, useState,Component} from "react";
import {TextInput, Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { auth,db } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UploadImage from "./uploadPhoto";
import { updateDoc, doc } from 'firebase/firestore';
import { SafeAreaView } from "react-native-safe-area-context";


const ManageInfo = (props) => {
    return (
        <SafeAreaView>
            {/* button to edit home page     */}
            <TouchableOpacity onPress={()=>props.navigation.navigate("EditHome")}>
                <Text>לעריכת עמוד הבית</Text>
            </TouchableOpacity>

            {/* button to edit about page     */}
            <TouchableOpacity onPress={()=>props.navigation.navigate("EditAbout")}>
                <Text>לעריכת עמוד האודות</Text>
            </TouchableOpacity>

            {/* button to edit memorial page     */}
            <TouchableOpacity onPress={()=>props.navigation.navigate("Memorial")}>
                <Text>לעריכת עמוד הנופלים</Text>
            </TouchableOpacity>

            <View>
                <Text> קישור חדש לאתר החנות: </Text>
                <TextInput></TextInput>
            </View>

            <View>
                <Text>קישור חדש לאתר תשלום החברות: </Text>
                <TextInput></TextInput>
            </View>



        </SafeAreaView>
    )
    
}
export default ManageInfo

const styles = StyleSheet.create({})