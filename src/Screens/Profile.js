import React ,{useState}from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import ColorCounter from "../../components/ColorCounter";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import EditProfile from './EditProfile';

let userName ="Nikhil Kale";
let email ="nikhil676@gmail.com";
let followers ="471";
let following ="80";

const Profile = (props) => {
    const[red, setRed]= useState(0);
    const[green, setGreen]= useState(0);
    const[blue, setBlue]= useState(0);
    return (
        <View style={{margin:30, }}>
             <View style={{flexDirection:"row",marginRight:80,}}>
           <Image source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHQHqgsWUs3hA/profile-displayphoto-shrink_200_200/0/1608831934153?e=1628121600&v=beta&t=Iegz7TKGYz_i2MXth8TxHzf8uKalDRcmFkwq2od3oc4'}} 
           style={{height:80,width:80, borderRadius:30}}/>
          <View style={styles.box1}>
            <Text style ={styles.text1}>{userName} </Text>
            <Text style ={styles.text2}>{email} </Text>
          </View> 
          <Icon name="account-edit-outline" color="black" size={24} style={{}} onPress={()=> props.navigation.navigate('EditProfile')}/>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", marginTop:20, borderColor:"gray",borderWidth:1,padding:10, borderRadius:10}}>
              <Text style={{fontWeight:"bold",color:"#000",fontSize:16}}>{followers}</Text>
              <Text style ={styles.text2}> followers  </Text>
              <Text style={{fontWeight:"bold", marginLeft:20,color:"#000",fontSize:16}}>{following}</Text>
              <Text style ={styles.text2}> following </Text>
          </View>
          <ColorCounter 
          onIncrease={()=> setRed(red+50)}
          onDecrease={()=> setRed(red-50)}
          color="Red"/>

          <ColorCounter 
          onIncrease={()=> setGreen(green+50)}
          onDecrease={()=> setGreen(green-50)}
          color="Green"/>

          <ColorCounter 
          onIncrease={()=> setBlue(blue+50)}
          onDecrease={()=> setBlue(blue-50)}
          color="Blue"/>
          <View style ={{height:100,width:100, backgroundColor:`rgb(${red},${green},${blue})`}}/>
          
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    text1:{
        fontSize:20,
        fontWeight:"bold",
        fontStyle:"normal"
    },
    text2:{
        fontSize:12,
        color:"gray"        
    },
    box1:{
        
        margin:10,
        flexDirection:"column"
    },
    bottomDrawerSection: {
        flexDirection:"row",
        alignItems:"center",
        borderTopColor: '#f4f4f4',
        borderTopWidth: 2,
        bottom:-300
        
    },
})