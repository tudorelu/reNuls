'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

class ConfirmPinScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <Text style={styles.title}>
	      	Confirm the 4 digit code.
	      </Text>

	      <PrimaryButton title="DONE" onPress={() => this.props.navigation.navigate('App')} />

	      <TouchableOpacity onPress={() => this.props.navigation.navigate('SetPin')}>
	      	<Text style={styles.subtitle}> Start Over </Text>
	      </TouchableOpacity>
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
		color: 'white',
	},
	subtitle:{
    ...theme.subtitle,
		color:'#ddd'
	}
});


export default ConfirmPinScreen;