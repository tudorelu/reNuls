
import AuthReducer from './Auth';
import AccountsReducer from './Accounts';
import { combineReducers } from 'redux';

export default combineReducers({
	auth:AuthReducer,
	accounts:AccountsReducer
})