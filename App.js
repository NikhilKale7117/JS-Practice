import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNav from './src/Navigation/MainNav';
import Profile from "./src/Screens/Profile";
import DrawerContent from "./src/Screens/DrawerContent";
import RootStackScreen from './src/Navigation/RootStackScreens';
import { View, ActivityIndicator, Text, style} from 'react-native';
import {AuthContext} from './components/context';
import Details from './src/Screens/Details';
import EditProfile from './src/Screens/EditProfile';


const Drawer = createDrawerNavigator();


const App = () => {

  // const [isLoading , setIsLoading]= React.useState(true);
  // const [userToken , setUserToken]=React.useState(null);

  const initialLoginState ={
    isLoading:true,
    userName:null,
    userToken:null,
  };

  const loginReducer =(prevState , action)=>{
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return{
          ...prevState,
          userToken:action.token,
          isLoading:false,
        };
        case 'LOGIN':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,
        };
        case 'LOGOUT':
        return{
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false,
        };
        case 'REGISTER':
        return{
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer,initialLoginState);


  const authContext = React.useMemo(()=>({
    signIn:(userName, password)=>{
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
      userToken=null;
      if(userName =='nikhil'&& password =='nikhil120'){
        userToken='abcde';
    }
    dispatch({type:'LOGIN' , id: userName, token:userToken})
  },
    signOut:()=>{
      // setUserToken( null );
      // setIsLoading(false);
      dispatch({type:'LOGOUT' })
    },
    signUp:()=>{
      setUserToken('fgkj');
      setIsLoading(false)
    },
  }),[]);

useEffect(() => {
  setTimeout (() => {
    // setIsLoading(false);
    dispatch({type:'REGISTER' , token:'123nk'})
  },1000);
}, []);

  if ( loginState.isLoading ){
    return(
      <View style={{flex:1,justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" color='black'/>
        </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer >
      {loginState.userToken !== null ? (
        <Drawer.Navigator drawerContent={props=> < DrawerContent{...props}/>} >
        <Drawer.Screen name="HomeDrawer" component={MainNav}/>
        <Drawer.Screen name='Details' component={Details}/>
        <Drawer.Screen name='EditProfile' component={EditProfile}/>

      </Drawer.Navigator> 
      )
      :
      <RootStackScreen/>
      }
      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App


