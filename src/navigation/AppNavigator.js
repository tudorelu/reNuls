import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import MainStackNavigator from './MainStackNavigator';
import AuthNavigator from './AuthNavigator';

import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const AuthStack = createStackNavigator({
  Splash: SplashScreen,
	AuthNavigator: AuthNavigator
});

AuthStack.navigationOptions = {
  header: null
}

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStack,
  App: MainStackNavigator,
});

AppNavigator.navigationOptions = {
  header: null
}
const AppContainer = createAppContainer(AppNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer

