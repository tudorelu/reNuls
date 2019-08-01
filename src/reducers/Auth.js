import { combineReducers } from 'redux';

const INITIAL_STATE = {
  something:{
    Andale: 2
  },
  auth:{
    pin: "222222",
  }
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_PIN':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      let { authCopy } = { ...state.auth};

      console.log("OLD STATE: ", state);

      let auth = {...authCopy}

      auth.pin = action.payload;

      console.log("NEW STATE: ", { ...state, auth });
      return { ...state, auth };

    default:
      return state
  }
};

export default combineReducers({
  auth: authReducer,
});