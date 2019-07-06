//Authored by: Tudor Barbulescu (tudor.barbu7@gmail.com) ROMANIA + AUSTRALIA

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text, 
  TouchableOpacity
} from 'react-native';


import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'

import { Icon } from 'react-native-elements'

import theme from '../theme';

class SendScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      headerLeft: 
        <TouchableOpacity onPress={ () => navigation.goBack() }>
          <Icon
            name='arrow-left'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerRight: 
        <TouchableOpacity onPress={ () => navigation.navigate('Share') }>
          <Icon
            name='share-2'
            type='feather'
            color='#FFF'
            containerStyle={{marginRight:14, marginLeft:14}}
            size={24}
          />
        </TouchableOpacity>,
      headerStyle: {
        backgroundColor: theme.palette.primary.light,
        paddingTop:0,
        marginTop: 0,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
      },
    };
  };
  
	constructor(props) {
	  super(props); 
		this.state = {address:'', amount:'', note:''};
	}

  render() {
    return (
    	<GenericScreen title="Send Funds" avatar="upload">
      
    		<InputField
    			label="Address Receiver"
    			onChangeText={(address) => this.setState({address})}
      		value={this.state.address}
    		/>
    		<InputField
    			label="Amount"
    			onChangeText={(amount) => this.setState({amount})}
      		value={this.state.amount}
    		/>
    		<InputField
    			label="Note"
    			multiline
    			placeholder="Enter Here"
    			placeholderTextColor="rgba(255,255,255,0.3)"
    			numberOfLines={4}
    			onChangeText={(note) => this.setState({note})}
      		value={this.state.note}
    		/>

  			<PrimaryButton title="Send" onPress={() => console.log("Send Pressed")} />

    	</GenericScreen>
    );
  }
}

const styles = StyleSheet.create({

  button: {
  	...theme.primaryButton,
  },
  buttonText: {
  	...theme.buttonText,
  },
});


export default SendScreen;