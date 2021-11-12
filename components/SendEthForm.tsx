import { useWalletContext } from '../hooks/useWalletContext';
import { Input, Paper, TextField } from '@mui/material';
import styled from 'styled-components';
import { ConstructorFragment } from 'ethers/lib/utils';
import React, { useState } from 'react';
import { utils } from 'ethers';
import { Button, CircularProgress, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Form = styled.form`
  min-width: 500px;
  display: flex;
  flex-direction: column;
`;

export default function SendEthForm({}) {
  const { walletState, connect, disconnect } = useWalletContext();
  const { address, web3Provider } = walletState;
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecipientAddress(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    try {
      const signer = web3Provider.getSigner();
      await signer.sendTransaction({
        to: recipientAddress,
        value: utils.parseEther(String(amount)),
      });
      setOpen(true);
    } catch (err) {
      if (err instanceof Error) {
        alert(err?.message);
      }
    }

    setLoading(false);
    setAmount(0);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder="Recipient address"
            sx={{ mb: 3 }}
            onChange={handleRecipientChange}
          ></TextField>
          <TextField
            variant="outlined"
            placeholder="Amount to send"
            inputProps={{ inputMode: 'numeric' }}
            sx={{ mb: 3 }}
            onChange={handleAmountChange}
          ></TextField>
          <Button variant="outlined" type="submit" disabled={!(recipientAddress && amount)}>
            Send ETH
          </Button>
        </Form>
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Transaction sent"
        action={action}
      />
    </Paper>
  );
}
