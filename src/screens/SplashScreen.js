'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import theme from '../theme';

class SplashScreen extends Component {

  componentDidMount(){
    
    setTimeout(function() { //Start the timer
      this.props.navigation.navigate('AuthNavigator');
    }.bind(this), 3000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> NULS Splash Screen ... </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...theme.darkScreenRoot,
  },
  title:{
    ...theme.title,
    color:'white'
  }
});


export default SplashScreen;                