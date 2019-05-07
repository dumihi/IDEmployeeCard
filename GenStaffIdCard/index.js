/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import AppStackNavigator from './Components/AppStackNavigator'
import InputInfo from './Components/InputInfo/InputInfo'
import TakePicture from './Components/TakePicture/TakePicture'
import VisitingCard from './Components/VisitingCard'
import VisitingInfo from './Components/InputInfo/VisitingInfo'
import DrawerNavigator from './Components/DrawerNavigator'


AppRegistry.registerComponent(appName, () => DrawerNavigator);
