import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Web3Modal from 'web3modal';
import { useCustomContext } from '../../context';

export default function ButtonAppBar({}) {
  const { walletState, connect, disconnect } = useCustomContext();
  const { address } = walletState;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {address}
          </Typography>
          {address ? (
            <Button color="inherit" onClick={disconnect}>
              Disconnect Wallet
            </Button>
          ) : (
            <Button color="inherit" onClick={connect}>
              Connect Wallet
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
