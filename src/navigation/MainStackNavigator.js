import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';

import ReceiveScreen from '../screens/ReceiveScreen';
import CreateWalletScreen from '../screens/CreateWalletScreen';
import SendScreen from '../screens/SendScreen';


const MainStackNavigator = createStackNavigator({
  Home: HomeScreen,
  Send: SendScreen,
  Receive: ReceiveScreen,
  CreateWallet: CreateWalletScreen,
});

MainStackNavigator.navigationOptions = {
  header: null
}

export default MainStackNavigator;