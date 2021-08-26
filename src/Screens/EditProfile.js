import React ,{useState}from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const EditProfile = ({navigation}) => {

    const[name , setName]=useState('');
    const[password , setPassword]= useState('');
 
    return (
        <View style={{margin:15}}>
        <View style={{margin:1, flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
           
            <Icon name="arrow-left-bold" color="black" size={30} style={{ marginRight:55}} onPress={()=> {navigation.goBack('')}}/>
            <Text> Edit Profile</Text>
            </View>
            <Text>Enter Username</Text>
            <TextInput style={styles.placeholder} 
            autoCapitalize='none'
            value={name}
            onChangeText={(newValue)=>setName(newValue)}
            />
            <Text>Enter Password</Text>
            <TextInput style={styles.placeholder} 
            autoCapitalize='none'
            value={password}
            onChangeText={(newPassword)=>setPassword(newPassword)}
            />
            <Text> 
                my username is -  {name} {"\n"}
                my password is - {password}
            </Text>
            {name.length > 8 ? alert('very small username'): null}
            {password.length>10? alert('enter small password'):null}
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    placeholder:{
        borderColor:"black",
        borderWidth:2,
        margin:15,
        borderRadius:20,
        color:"black",
        paddingLeft:20,
        fontSize:15,
        height:50


    }
})
