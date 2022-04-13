import react from 'react'
import {View,StyleSheet,Image} from 'react-native'
import Logo from '../images/logo.png'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={Logo} styles={styles.logo} resizeMode="contain"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:30,
    },
    logo:{
        width:'70%',
        height: 100,
    },
})