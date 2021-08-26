
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home";
import Bookmark from "../Screens/Bookmark";
import Profile from "../Screens/Profile";
import Blogs from '../Screens/Hotels';
import Details from '../Screens/Details';
import SplashScreen from '../Screens/SplashScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const BlogStack= createStackNavigator();
const BookmarkStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Stack = createStackNavigator();


const SplashStack = createStackNavigator();

const MainNav =()=> (

<Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: 'green',
      tabBarColor:"black"
    }}
    
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Kirana',
        tabBarColor:"blue",
        tabBarIcon: ({ color, size }) => (
          <Icons name="home-outline" color={color} size={size} />
        ),
      }}
      
    />
    <Tab.Screen
      name="Blog"
      component={BlogStackScreen}
      options={{
        tabBarLabel: 'Blogs',
        tabBarColor:"blue",
        tabBarIcon: ({ color, size }) => (
          <Icons name="home-outline" color={color} size={size} />
        ),
      }}
      
    />
    <Tab.Screen
      name="Bookmark"
      component={BookmarkStackScreen}
      options={{
        tabBarLabel: 'Shooping Bag',
        tabBarColor:"yellow",
        tabBarIcon: ({ color, size }) => (
          <Icons name="shopping-outline" color={color} size={size} />
        ),
        tabBarBadge: 0,
        tabBarBadgeStyle: { backgroundColor: 'white', color:"black",marginLeft:5 }
      }}
      
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor:"black",
        tabBarIcon: ({ color, size }) => (
          <Icons name="account-outline" color={color} size={size} />
        ),
        
      }}
    />
    
    
  </Tab.Navigator>
  
  );

  export default MainNav;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
         headerStyle:{backgroundColor:"#4B7A62", },
         headerTintColor:"white",
         headerTitleStyle:{fontSize:20,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}
       }}>
         <HomeStack.Screen name="Home" component={Home} options={{
           headerLeft:()=>(
             <Icon name="bars" size={30} color="white" style={{marginLeft:15}} onPress={()=>{navigation.openDrawer()}}/>
           )
         }}/>
       </HomeStack.Navigator> 
 );
 const BlogStackScreen = ({navigation}) => (
  <BlogStack.Navigator screenOptions={{
       headerStyle:{backgroundColor:"#4B7A62", },
       headerTintColor:"white",
       headerTitleStyle:{fontSize:20,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}
     }}>
       <BlogStack.Screen name="Blogs" component={Blogs} options={{
         headerLeft:()=>(
           <Icon name="bars" size={30} color="white" style={{marginLeft:15}} onPress={()=>{navigation.openDrawer()}}/>
         )
       }}/>
     </BlogStack.Navigator> 
);
 
 const BookmarkStackScreen = ({navigation}) => (
   <BookmarkStack.Navigator screenOptions={{
        headerStyle:{backgroundColor:"#3F6288", },
        headerTintColor:"white",
        headerTitleStyle:{fontSize:20,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}  
      }}>
        <BookmarkStack.Screen name=" My Shooping Bag" component={Bookmark} options={{
           headerLeft:()=>(
             <Icon name="bars" size={30} color="white" style={{marginLeft:15}} onPress={()=>{navigation.openDrawer()}}/>
           )
         }}/>
      </BookmarkStack.Navigator> 
 );
 const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator screenOptions={{
       headerStyle:{backgroundColor:"#6A5198", },
       headerTintColor:"white",
       headerTitleStyle:{fontSize:20,fontWeight:"bold",justifyContent:"center",alignSelf:"center"}  
     }}>
       <ProfileStack.Screen name=" My Profile" component={Profile} options={{
          headerLeft:()=>(
            <Icon name="bars" size={30} color="white" style={{marginLeft:15}} onPress={()=>{navigation.openDrawer()}}/>
          )
        }}/>
     </ProfileStack.Navigator> 
);
