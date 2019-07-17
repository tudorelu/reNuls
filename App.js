
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow

 NOTE TO SELF:

 YOU SUCCESFULLY MANAGED TO RUN crypto module on IOS!

 NEXT, TRY AND ADD, ONE BY ONE THE PAGES IN THE NULS MOBILE WALLET
 
 */
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import crypto from 'crypto'

import WelcomeScreen from './src/screens/WelcomeScreen';

// use crypto
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  constructor(props){
    super(props);

    console.log(crypto.randomBytes(32).toString('hex'));
  
  }

  componentWillMount(){
    // here is where we can download data and load things
    this._handleFinishLoading();
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <View style={styles.container}>
          <Text> App is loading my friend, just be patient. </Text>
        </View>
        /*
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
        */
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/*<Text> Shit Loaded </Text>*/}
          {/*<WelcomeScreen />*/}
          {<AppNavigator />}
        </View>
      );
    }
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import AppNavigator from './src/navigation/AppNavigator';
// //import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

// import crypto from 'crypto'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};

// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome advisor! {crypto.randomBytes(32).toString('hex')}</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
