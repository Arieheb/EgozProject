import React, { useState, useEffect } from 'react';
import {  Modal, Alert, Image, Pressable,  TextInput, View, link, Platform,ScrollView,Picker, TouchableOpacity, Text, StyleSheet, ImageBackground, ScrollViewComponent } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import *as ImagePicker from 'expo-image-picker';
import Profile from '../../assets/Images/profile.png';
import {auth, db} from '../../firebase';

const Gift = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    return(
        <View>
            <Pressable onPress={() => setModalVisible(true)}>
                <Text>hello</Text>
            </Pressable>
            <Modal animationType= "fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
            
        </Modal>
        </View>
    );
};

export default Gift

const styles = StyleSheet.create({

})