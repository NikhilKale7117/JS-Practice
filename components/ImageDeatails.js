import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const ImageDeatails = (props) => {
    return (
        <View>
            <Image source={props.imageSource} style={{height:150,width:150, borderRadius:20, justifyContent:"center", alignItems:"center", margin:10}} />
            <Text style={{marginLeft:25}}>{props.title}</Text>
        </View>
    )
}

export default ImageDeatails

const styles = StyleSheet.create({})
