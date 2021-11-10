import { Button, IconButton, Snackbar } from '@mui/material';
import Container from '@mui/material/Container';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Homepage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <Container maxWidth="sm">
      <h1>Test Page</h1>
      <p>lorem*15</p>
      <Button variant="outlined">
        <Link href="/">Back to home</Link>
      </Button>
      <div>
        <Button onClick={handleClick}>Open simple snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </div>
    </Container>
  );
};

export default Homepage;
