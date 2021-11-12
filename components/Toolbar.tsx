import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useWalletContext } from '../hooks/useWalletContext';

export default function AppToolbar({}) {
  const { walletState, connect, disconnect } = useWalletContext();
  const { address } = walletState;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Wharf Finance
          </Typography>
          {address ? (
            <Button color="inherit" onClick={disconnect}>
              Disconnect Wallet
            </Button>
          ) : (
            <Button color="primary" onClick={connect} variant="contained">
              Connect Wallet
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
