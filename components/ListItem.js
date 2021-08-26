import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const ListItem = (item) => {
    return (
        <TouchableOpacity style ={styles.listitem}>
           <View style={styles.listitemview}>
              <Text style ={styles.listitemtext}>{item.text}</Text>
           </View>
        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    listitem:{

    },
});
