import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Picker,
  Platform,
	TouchableOpacity,
  } from 'react-native';

import GenericScreen from '../components/GenericScreen'
import PrimaryButton from '../components/PrimaryButton'
import InputField from '../components/InputField'
import LabeledText from '../components/LabeledText'

import { Dropdown } from 'react-native-material-dropdown';
import { Icon } from 'react-native-elements'
import theme from '../theme';

class CreateWalletScreen extends Component {
	
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
	  let wallet =  {
	  	address:'NsduyNoZzMEA9X3TtKLkoskBunBqP2Ny',
	  	privateKey:'3a74ac23b5b0d5c34b04dcc1011d1a97c95da6bc34c1481e787ff4ef1e7b77b4',
	  	publicKey:'02c9fb157293fdc67816ba5e38a014c7c641434b65eb2d024e9b5ae57091d73d74',
	  	password:''
	  }//Account.create();
	  console.log("WALLET IS");
	  console.log(wallet);
	  this.state = {
	  	walletType: 'new-wallet',
	  	address:'NsduyNoZzMEA9X3TtKLkoskBunBqP2Ny',
	  	privateKey:'3a74ac23b5b0d5c34b04dcc1011d1a97c95da6bc34c1481e787ff4ef1e7b77b4',
	  	publicKey:'02c9fb157293fdc67816ba5e38a014c7c641434b65eb2d024e9b5ae57091d73d74',
	  	password:'',
	  	wallet: wallet,
	  };
	}

	_createWallet = () => {
		//this.setState({wallet:Account.create()});
	}
/*
	_createEncryptedWallet = (password) => {
		this.setState({wallet:NULS.account.create(password)});
	}*/

	_renderContent = () => {
		contents = []
		switch(this.state.walletType) {
		  case 'new-wallet':
		    contents.push(<LabeledText key={0} label="Address">{this.state.address}</LabeledText>);
		    contents.push(<LabeledText key={1} label="Private Key">{this.state.privateKey}</LabeledText>);
		    contents.push(<LabeledText key={2} label="Public Key">{this.state.publicKey}</LabeledText>);
		    contents.push(<InputField key={3} label="Password" secureTextEntry onChangeText={(value)=>{this.setState({password:value})}}>{this.state.password}</InputField>);
		    contents.push(<PrimaryButton key={4} title="Create New Wallet" onPress={() => this._createWallet()}/>);
		    break;
		  case 'private-key':
				contents.push(<InputField key={0} label="Private Key"/>);
		    contents.push(<PrimaryButton key={4} title="Create Wallet" onPress={() => console.log("Create Wallet")}/>);
		    break;
		  case 'encrypted-key':
				contents.push(<InputField key={0} label="Encryted Key"/>);
				contents.push(<InputField key={1} label="Passphrase" carretHidden/>);
		    contents.push(<PrimaryButton key={4} title="Create Wallet" onPress={() => console.log("Create Wallet")}/>);
		    break;
		  default:
		   	break;
		}
	  
	  return contents;
	}

  render() {

    return (
    	<GenericScreen title="Add New Wallet" avatar="plus">
	    	<View style={styles.pickerContainer}>
		      <Picker
		      	mode="dropdown"
					  selectedValue={this.state.walletType}
					  style={styles.picker}
					  //itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
					  onValueChange={(itemValue, itemIndex) => this.setState({walletType: itemValue})}>
					  <Picker.Item label="Create New Wallet" value="new-wallet" />
					  <Picker.Item label="Import Private Key" value="private-key" />
					  <Picker.Item label="Import Encrypted Key" value="encrypted-key" />
					</Picker>
					{<Icon type="entypo" name="select-arrows" color={"white"} size={13} style={styles.icon}/>}
				</View>
				{this._renderContent()}
      </GenericScreen>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    ...theme.picker,
  	flexDirection: 'row',
		marginBottom: 20,
		width: theme.defaultContainerWidth,
  },
	picker :{
		...theme.picker,
	},
	pickerIcon:{
		left:100
	}
});


export default CreateWalletScreen;