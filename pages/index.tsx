import type { NextPage } from 'next';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { injected } from '../components/wallet/connectors';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { active, account, library, connector, chainId, activate, deactivate, error } =
    useWeb3React();
  const isUnsupportedChainIdError = error instanceof UnsupportedChainIdError;

  injected.on('error', (err) => {
    console.log('on error', err);
  });

  async function connect() {
    try {
      let x = await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div className={styles.main}>
      {active ? (
        <div>
          <p>
            Connected with <b>{account}</b> on chain {chainId}
          </p>
          <button
            onClick={disconnect}
            className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          onClick={connect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Connect to MetaMask
        </button>
      )}
      {isUnsupportedChainIdError ? <p>Please switch to valid chain</p> : <p></p>}
    </div>
  );
};

export default Home;
