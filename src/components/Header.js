'use strict';

import React, { Component } from 'react';

//import { Constants } from 'expo';

import {
  StyleSheet,
  View,
  Platform,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>


      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		paddingTop:  20, //Constants.statusBarHeight,
	}
});


export default Header;