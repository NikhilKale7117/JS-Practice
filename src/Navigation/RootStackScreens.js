import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "../Screens/SplashScreen";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Details from '../Screens/Details';

const RootStack =createStackNavigator();

const RootStackScreen =({navigation}) =>(
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name='SpashScreen' component={SplashScreen}/>
        <RootStack.Screen name='SignIn' component={SignIn}/>
        <RootStack.Screen name='SignUp' component={SignUp}/>
       


    </RootStack.Navigator>
);

export default RootStackScreen;