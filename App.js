import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
//import { AppLoading, Asset, Font, Icon } from 'expo';
import crypto from 'crypto'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
 
import AppNavigator from './src/navigation/AppNavigator';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AppReducer from './src/reducers/Reducer';

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, AppReducer)

let store = createStore(persistedReducer)
let persistor = persistStore(store)

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
    return (
      <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {<AppNavigator />}
          </View>
        </PersistGate>
      </Provider>
    );
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
