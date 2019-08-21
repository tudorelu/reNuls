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
      let wallets = [];

      if(state.accounts.wallets !== null && state.accounts.wallets !== undefined)
        wallets = state.accounts.wallets.slice(0);

      console.log("OLD STATE: ", state);

      wallets.push(action.payload);

      console.log("NEW STATE: ", { ...state, accounts:{wallets}});

      return { ...state, accounts:{wallets} };

    case 'DELETE_WALLET':

      console.log("OLD STATE: ", { ...state });

      let newWallets = [];

      if(state.accounts.wallets !== null && state.accounts.wallets !== undefined)
        newWallets = state.accounts.wallets.slice(0).filter((wallet) => {
          return wallet.address !== action.payload
        }).slice(0);

      console.log("NEW STATE: ", { ...state,  accounts:{newWallets} });

      return { ...state,  accounts:{newWallets}  };

    default:
      return state
  }
};

export default combineReducers({
  accounts: accountsReducer,
});