import type { NextPage } from 'next';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { injected } from '../components/wallet/connectors';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Link from 'next/link';

const Block = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
    <>
      <Block>
        {active ? (
          <div>
            <p>
              Connected with <b>{account}</b> on chain {chainId}
            </p>
            <Button onClick={disconnect} variant="contained">
              Disconnect
            </Button>
          </div>
        ) : (
          <Button onClick={connect} variant="contained">
            Connect to MetaMask
          </Button>
        )}
        {isUnsupportedChainIdError ? <p>Please switch to valid chain</p> : <p></p>}
      </Block>
    </>
  );
};

export default Home;
