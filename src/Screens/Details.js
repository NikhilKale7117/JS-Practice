import React, {useState} from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View , Dimensions} from 'react-native'
import ImageDeatails from '../../components/ImageDeatails'

const {height,width}= Dimensions.get('window');
const randomRgb =()=>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
  
    return`rgb(${red}, ${green}, ${blue})`;

};
const Details = ({navigation,Props}) => {
    const [colors , setColors] = useState([]);

    return (
        <View style={styles.position}>
        <ScrollView horizontal={true}>
            <View style={{flexDirection:"row",}}>
            <ImageDeatails  title={'Yuvraj'} imageSource={{uri:'https://images.news18.com/ibnlive/uploads/2021/01/1611058905_yuvraj-singh.jpg'}}/>
            <ImageDeatails  title={'Dhoni'} imageSource={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_lZOeL8NejOGMqXcFzCDCT-D1s5Tw1JGZoOCJS-Y2myyUYuB1cmnIZZPNKnqLqiL7lI&usqp=CAU'}}/>
            <ImageDeatails  title={'Sachin'} imageSource={{uri:'https://www.espncricinfo.com/db/PICTURES/CMS/316400/316486.png'}}/>
            <ImageDeatails title={'Rohit'} imageSource={{uri:'https://admin.thecricketer.com/weblab/Sites/96c8b790-b593-bfda-0ba4-ecd3a9fdefc2/resources/images/site/sharmaheadshot-min.jpg'}}/>
            </View> 
        </ScrollView>
        <Button title={"Add Color"} onPress={()=>{
            setColors([...colors,randomRgb()]);
        }}/> 
        <View style={{ height:100,width:100, backgroundColor:randomRgb(), marginVertical:20,marginBottom:150}}/> 
        
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.goBack('')}}>
                <Text style={styles.text}> Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    button:{
        position:"absolute",
        flex:1,
        height:height*0.05,
        width:width*0.9,
        backgroundColor:"orange",
        justifyContent:"center",
        alignSelf:"center",
        borderRadius:20,
        bottom:10
    },
    text:{
        justifyContent:"center",
        textAlign:"center",
        fontSize:20,
        fontWeight:"bold",

    },
    position:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:randomRgb(),
    }
})
