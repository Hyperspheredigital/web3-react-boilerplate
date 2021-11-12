import { Alert, Button } from '@mui/material';
import { ellipseAddress } from '../lib/utilities';
import styled from 'styled-components';
import { useWalletContext } from '../hooks/useWalletContext';
import Toolbar from '../components/Toolbar';
import SendEthForm from '../components/SendEthForm';

const Block = styled.div`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(152, 53, 241, 1) 0%,
    rgba(109, 0, 255, 1) 100%
  );
  color: rgba(255, 255, 255, 0.8);
`;

export const Home = (): JSX.Element => {
  const { walletState, setWalletState, connect, disconnect, chainData } = useWalletContext();
  const { web3Provider, address } = walletState;

  return (
    <>
      <Toolbar></Toolbar>
      <Block>
        <div color="secondary">
          {address && (
            <ul>
              <li>
                <span className="mb-1">Network: </span>
                <span>{chainData?.name}</span>
              </li>
              <li>
                <span className="mb-1">Address: </span>
                <span>{ellipseAddress(address)}</span>
              </li>
            </ul>
          )}
        </div>

        {web3Provider && chainData?.chain_id != process.env.CHAIN_ID && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Wrong chain... please switch to Ethereum Rinkeby Network
          </Alert>
        )}

        <div>
          {web3Provider ? (
            <Button
              className="button"
              type="button"
              onClick={disconnect}
              variant="outlined"
              color="secondary"
            >
              Disconnect
            </Button>
          ) : (
            <Button
              className="button"
              type="button"
              onClick={connect}
              variant="outlined"
              color="secondary"
            >
              Connect
            </Button>
          )}
        </div>
        <br />
        {web3Provider && <SendEthForm />}
      </Block>
    </>
  );
};

export default Home;
