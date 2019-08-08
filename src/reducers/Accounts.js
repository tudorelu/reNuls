import { combineReducers } from 'redux';

const INITIAL_STATE = {
  accounts:{
    wallets:[]
  }
};

// TODO test these reducers

const accountsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CREATE_WALLET':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      let wallets = state.accounts.wallets.slice(0);

      console.log("OLD STATE: ", state);

      wallets.push(action.payload);

      console.log("NEW STATE: ", { ...state, accounts:{wallets}});

      return { ...state, accounts:{wallets} };

    case 'DELETE_WALLET':
      
      accounts.wallets = accounts.wallets.slice(0).filter((wallet) => {
        return wallet.address !== action.payload
      });
      console.log("NEW STATE: ", { ...state, accounts });

      return { ...state, accounts };

    default:
      return state
  }
};

export default combineReducers({
  accounts: accountsReducer,
});