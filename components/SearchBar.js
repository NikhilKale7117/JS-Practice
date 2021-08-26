import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({search , onSearchChange, onSearchSubmit}) => {
    return (
        <View style={styles.placeholder}>
            <View style={{flex:1, alignItems:"center",flexDirection:"row", paddingLeft:10}}>
            <Icon name="search" color="black" size={40}  onPress={()=> {}}/>
            <TextInput placeholder="Search"  style={{color:"black", fontSize:20, paddingLeft:20, flex:1, }}
            value={search}
            onChangeText={onSearchChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onSearchSubmit}

            />
        </View>  
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    placeholder:{
        borderWidth:2,
        borderRadius:25,
        height:50,
        flexDirection:"row",
        margin:20,
        backgroundColor:"#f0eeee",
        
    }
})
