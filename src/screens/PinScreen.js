'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import theme from '../theme';

import PrimaryButton from '../components/PrimaryButton';

class PinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <Text style={styles.title}>
	      	To Enter Your Wallet, Enter Your 4 Digit Pin Code.
	      </Text>
	      <Text style={styles.subtitle}> This code will be used to sign important actions </Text>

	      <PrimaryButton title="DONE" onPress={() => this.props.navigation.navigate('App')} />

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
  },
  subtitle:{
    ...theme.subtitle,
    color:'#ddd'
  }
});


export default PinScreen;