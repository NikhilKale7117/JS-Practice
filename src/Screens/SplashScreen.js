import React from 'react';
import { Dimensions, StyleSheet, Text, View , Image,TouchableOpacity,StatusBar} from 'react-native';
import logo from '../../components/Images/Logo.png';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#2d5845" />
            <View style ={styles.header}>
            <Animatable.Text style={styles.logoname} animation="zoomIn" >My Mart</Animatable.Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig"> 
            <Text style={{fontSize:25,fontWeight:"bold"}}>Purchase Your Kirana Online </Text>
            <Text style={{fontSize:15, color:"gray"}}>Sign in with account </Text>

            <View style ={styles.buttonposition}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('SignIn')}>
                <Text> Get Started</Text>
            </TouchableOpacity>
            </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen

const {height} = Dimensions.get('screen');
const heignt_logo =height*0.2;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#2d5845"
    },
    header:{
        flex:2,
        justifyContent:"center",
        alignItems:"center",
    },
    footer:{
        flex:1,
        backgroundColor:"#fff",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingVertical:50,
        paddingHorizontal:30,
    },
    logo:{
        height:heignt_logo,
        width:heignt_logo,
    },
    logoname:{
        fontSize:60,
        fontWeight:"bold",
        color:"#fff",
        marginBottom:20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
         textShadowOffset: {width: 5, height: 5},
         textShadowRadius: 10
    },
    button:{
        width:150,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        flexDirection:"row",
        backgroundColor:"#f5a623"
        
    },
    buttonposition:{
        alignItems:"flex-end",
        marginTop:40,
    }

})
