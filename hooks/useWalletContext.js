import React from 'react';

const WalletContext = React.createContext();

export function useWalletContext() {
  return React.useContext(WalletContext);
}

export default WalletContext;
