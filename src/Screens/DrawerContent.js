import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView , DrawerItem } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../components/context';

let userName ="Nikhil Kale";
let email ="nikhil676@gmail.com";
let followers ="471";
let following ="80";

const DrawerContent = (props) => {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={{flexDirection:'column', margin:20, marginRight:15,}}>
            <View style={{flexDirection:"row",marginRight:80,}}>
           <Image source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHQHqgsWUs3hA/profile-displayphoto-shrink_200_200/0/1608831934153?e=1628121600&v=beta&t=Iegz7TKGYz_i2MXth8TxHzf8uKalDRcmFkwq2od3oc4'}} 
           style={{height:80,width:80, borderRadius:30}}/>
          <View style={styles.box1}>
            <Text style ={styles.text1}>{userName} </Text>
            <Text style ={styles.text2}>{email} </Text>
          </View> 
          </View>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center", marginTop:20, borderColor:"gray",borderWidth:1,padding:10, borderRadius:10}}>
              <Text style={{fontWeight:"bold",color:"#000",fontSize:16}}>{followers}</Text>
              <Text style ={styles.text2}> followers  </Text>
              <Text style={{fontWeight:"bold", marginLeft:20,color:"#000",fontSize:16}}>{following}</Text>
              <Text style ={styles.text2}> following </Text>
          </View>
          <View style={{marginTop:10}}>

             <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}>
             <View style={{flexDirection:"row", alignItems:"center",marginTop:20}}>
                  <Icon name="home-outline" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Home</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>props.navigation.navigate("Profile")}>
             <View style={{flexDirection:"row", alignItems:"center",marginTop:20}}>
                  <Icon name="account-outline" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Profile</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity onPress={()=>props.navigation.navigate("Bookmark")}>
             <View style={{flexDirection:"row", alignItems:"center",marginTop:20}}>
                  <Icon name="shopping-outline" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Shooping Bag</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity>
             <View style={{flexDirection:"row", alignItems:"center",marginTop:20}}>
                  <Icon name="cog-outline" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Setting</Text>
             </View>
             </TouchableOpacity>

             <TouchableOpacity>
             <View style={{flexDirection:"row", alignItems:"center",marginTop:20}}>
                  <Icon name="account-check-outline" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Support</Text>
             </View>
             </TouchableOpacity>
             
          </View>
          <TouchableOpacity style={styles.bottomDrawerSection} onPress={()=>{signOut()}}>
          
                  <Icon name="exit-to-app" color="#000" size={26} style={{marginRight:15}} />
                  <Text> Sign Out</Text>
          
          </TouchableOpacity>

        </View>
    )
}


export default DrawerContent
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