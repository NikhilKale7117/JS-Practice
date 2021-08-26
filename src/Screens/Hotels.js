import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';

const Hotels = () => {
    const [search , setSearch]= useState('');
    return (
        <View>
            <SearchBar 
            
            search={search} 
            onSearchChange={(newSearch)=>setSearch(newSearch)}
            onSearchSubmit={()=>console.log('Search was submitted')}
          
            />
            
            <Text>{search}</Text>
        </View>
    )
}

export default Hotels

const styles = StyleSheet.create({})
