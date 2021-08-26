import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:60,
        backgroundColor:"black"
    },

    text:{
        color:"orange",
        fontSize:25,
        fontWeight:"bold",
        marginTop:10,
        textAlign:"center",
    }
});
