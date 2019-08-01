'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

import { connect } from 'react-redux';

class PinScreen extends Component {

  constructor(props){
    super(props);
    this.state = {
      code: ""
    }
  }
  
  pinInput = React.createRef();

  render() {
    return (
      <View style={styles.container}>
	      <Text style={styles.title}>
	      	To Access Your Wallet Please Enter Your Pin Code. (222222)
	      </Text>
	      <Text style={styles.subtitle}> This code will be used to approve important actions </Text>

        <SmoothPinCodeInput
          ref={this.pinInput}
          value={this.state.code}
          cellStyle={{
            borderBottomWidth: 2,
            borderColor: '#ccc',
          }}
          cellStyleFocused={{
            borderColor: '#fff',
          }}
          codeLength={6}
          onTextChange={code => this.setState({ code })}
          onFulfill={pinCode => this._checkCode(pinCode)}
          //onBackspace={this._focusePrevInput}
          />
	      
        {/*<PrimaryButton title="DONE" onPress={() => this.props.navigation.navigate('App')} />*/}

      </View>
    );
  }
  _checkCode = (pinCode) => {
    if(this.props.auth.pin == pinCode){
      this.props.navigation.navigate('App');
    } else {
      this.pinInput.current.shake()
        .then(() => this.setState({ code: '' }));
    }
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

const mapStateToProps = (state) => {
  const { auth } = state.auth
  return { auth }
};

export default connect(mapStateToProps)(PinScreen);