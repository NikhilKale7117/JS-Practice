import React ,{useState} from 'react'
import { StyleSheet, Text, View , FlatList, Button, TouchableOpacity, Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');
const Bookmark = ({navigation}) => {
    const friends=[
        {name:'Nikhil', age:28},
        {name:'Akash', age:26},
        {name:'Veer', age:27},
        {name:'Tushar', age:26},
        {name:'shushant', age:24},
    ]
    const [count, setCount]= useState(0);
    return(
        <View style={{flex:1, justifyContent:"center"}}>
            <FlatList 
            keyExtractor={friends=> friends.name}
            data={friends}
            renderItem={({item})=>{
                return(
                <Text>{item.name}- Age {item.age}</Text>
                );
            }}/>
            <View style={{flexDirection:"row",alignItems:"stretch" , marginBottom:100, margin:10}}>
            <Button title="Increase" onPress={()=>{
                setCount(count+1);
            }}/>
            <Button title="Decrease" onPress={()=>{
                setCount(count-1);
            }}/>
            <Text>current count ={count}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {setTimeout(function(){navigation.navigate('Details')},2000);}}>
                  <Text style={styles.text}> Go to Details</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Bookmark

const styles = StyleSheet.create({
    textstyle:{
        paddingVertical:30,
        fontSize:20,
        paddingHorizontal:10,
        borderColor:"red",
        borderWidth:2,
    },
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
})
