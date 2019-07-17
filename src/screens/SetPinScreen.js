import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

import theme from '../theme';

class SetPinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <Text style={styles.title}>
	      	To Enable Your Wallet, Enter a 4 digit code.
	      </Text>
	      <Text style={styles.subtitle}> This code will be used to sign important actions </Text>

	      <PrimaryButton title="NEXT" onPress={() => this.props.navigation.navigate('ConfirmPin')} />

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


export default SetPinScreen;