import { Button } from '@mui/material';
import { ellipseAddress } from '../lib/utilities';
import styled from 'styled-components';
import { useCustomContext } from '../context';

const Block = styled.div`
  min-height: 80vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Home = (): JSX.Element => {
  const { walletState, setWalletState, connect, disconnect, chainData } = useCustomContext();
  const { web3Provider, address } = walletState;

  return (
    <Block>
      <header>
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
      </header>

      <main>
        {web3Provider ? (
          <Button className="button" type="button" onClick={disconnect}>
            Disconnect
          </Button>
        ) : (
          <Button className="button" type="button" onClick={connect}>
            Connect
          </Button>
        )}
      </main>
    </Block>
  );
};

export default Home;
