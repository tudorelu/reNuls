import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// import MainTabNavigator from './MainTabNavigator';
 import MainStackNavigator from './MainStackNavigator';
 import WelcomeScreen from '../screens/WelcomeScreen';

const AuthStack = createStackNavigator({
	Welcome: WelcomeScreen
});

AuthStack.navigationOptions = {
  header: null
}

const AuthNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthStack,
  App: MainStackNavigator,
});

AuthNavigator.navigationOptions = {
  header: null
}
const AppContainer = createAppContainer(AuthNavigator);

// Now AppContainer is the main component for React to render

export default AppContainer

