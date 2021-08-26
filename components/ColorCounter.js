import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ColorCounter = ({color, onIncrease , onDecrease}) => {
    return (
        <View style={{marginTop:20}}>
            <Text> {color}</Text>
            <Button onPress={()=> onIncrease()} title={`Increase ${color}`}/>
            <Text></Text>
            <Button onPress={()=> onDecrease()} title={`decrease ${color}`}/>
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})
