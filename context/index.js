import React from 'react';

const WalletContext = React.createContext();

export function useCustomContext() {
  return React.useContext(WalletContext);
}

export default WalletContext;
