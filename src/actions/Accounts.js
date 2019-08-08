export const createWallet = wallet => (
  {
    type: 'CREATE_WALLET',
    payload: wallet,
  }
);

export const deleteWallet = address => (
  {
    type: 'DELETE_WALLET',
    payload: address,
  }
);