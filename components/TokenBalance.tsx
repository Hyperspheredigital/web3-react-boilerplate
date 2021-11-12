import { Contract } from 'ethers';
import { useWalletContext } from '../hooks/useWalletContext';
import ERC20_ABI from '../contracts/ERC20.json';
import { useEffect, useState } from 'react';
import { parseBalance } from '../lib/utilities';
import { CircularProgress } from '@mui/material';

type TokenBalanceProps = {
  tokenAddress: string;
  symbol: string;
};

const TokenBalance = ({ tokenAddress, symbol }: TokenBalanceProps) => {
  const { walletState } = useWalletContext();
  const { address, web3Provider } = walletState;
  const [balance, setBalance] = useState(0);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (!web3Provider) console.log('no web3 provider...');
    if (web3Provider) {
      let contract = new Contract(tokenAddress, ERC20_ABI, web3Provider);
      contract.balanceOf(address).then((balance) => {
        setBalance(parseBalance(balance));
        setLoading(false);
      });
    }
  }, [address, web3Provider]);

  return (
    <div>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <p>
          {symbol} balance: {balance}
        </p>
      )}
    </div>
  );
};

export default TokenBalance;
