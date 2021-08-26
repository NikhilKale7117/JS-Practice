import React from 'react'
import { View, Text ,Button,Image, style} from 'react-native'

function Home (props) {
    
    return (
        <View>
            <View style={{flexDirection:"row", justifyContent:'space-between', margin:20, }}>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://cms.qz.com/wp-content/uploads/2019/07/Mothers-Choice.jpg?quality=75&strip=all&w=900&h=900&crop=1'}} style={{height:150,width:150, shadowColor:"black",shadowRadius:10, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Grocery and Staples </Text>
            </View>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://m.media-amazon.com/images/I/81FfpLMWNfL._SL1500_.jpg'}} style={{height:150,width:150, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Snacks </Text>
            </View>
            </View >
            <View style={{flexDirection:"row", justifyContent:'space-between', margin:20}}>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://neareshop.s3.ap-south-1.amazonaws.com/2020/03/Untitled-design.jpg'}} style={{height:150,width:150, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Bakery and Dairy  </Text>
            </View>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9_MHSHr7qjCYcgVfqMoFIVxjmWcufFdFwV4noFf05p4mpFLELaz7LSiAaIgZw3TtcvQ&usqp=CAU'}} style={{height:150,width:150, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Beverage </Text>
            </View>
            </View>
            <View style={{flexDirection:"row", justifyContent:'space-between', margin:20}}>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://lh3.googleusercontent.com/proxy/lM-IDRk4T9fRVrFfsiBdgdc7Me6kQpqPpXZ_jfT0uCUtGDQXMX1MWHcAnvZZr4NzjdT1w-AcJu8vQFAvTeqvO4iWvmGF-DnWapjRm2vZUtepQQtCqRL0VDVuZPPWjcUJ4kwkQQ31Ew'}} style={{height:150,width:150, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Household Care  </Text>
            </View>
            <View style={{borderColor:"black",borderWidth:2, borderRadius:10, padding:10}}>
            <Image source={{uri: 'https://www.itcportal.com/about-itc/shareholder-value/annual-reports/itc-annual-report-2012/images/brand-busket.jpg'}} style={{height:150,width:150, borderColor:"black",borderWidth:1, borderRadius:10 , marginBottom:10}}/>
            <Text> Packaged Food </Text>
            </View>
            </View>





            {/* <Button title=" Bookmark" onPress={()=>{props.navigation.navigate("Bookmark")}}/> */}
        </View>
    )
}
export default Home