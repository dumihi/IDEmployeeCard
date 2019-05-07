import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './Home/Home'
import InputInfo from './InputInfo/InputInfo'
import VisitingInfo from './InputInfo/VisitingInfo'
import VisitingCard from './VisitingCard'
import TakePicture from './TakePicture/TakePicture'
import MenuDrawer from './Menu/MenuDrawer';
import Splash from './Splash'

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation} />)
	}
}
const DrawerStack = createStackNavigator({
    VisitingInfo: { 
        screen: VisitingInfo 
    },
    VisitingCard: {
        screen: VisitingCard
    }
  })

  const DrawerStackTakePicture = createStackNavigator({
    InputInfo: { 
        screen: InputInfo 
    },
    TakePicture: {
        screen: TakePicture
    }
  })
  
const DrawerNavigator =  createDrawerNavigator(
	{
     
		Home: {
			screen: Home
		},
        TakePicture: {
            screen: TakePicture
        },       
        DrawerStackTakePicture: {
            screen: DrawerStackTakePicture
        },
        DrawerStack: {
            screen: DrawerStack
        },
      
	},
	DrawerConfig
);
export default createAppContainer(DrawerNavigator)