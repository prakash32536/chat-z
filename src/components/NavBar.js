import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import "./NavBar.css"

const cookies = new Cookies();

export default function NavBar(props) {

  const logOut = async() =>{
   await signOut(auth);
   cookies.remove("auth-token");
   window.location.reload();
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CHAT-z
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome in {props.mid}
          </Typography>

          <Button color="inherit" onClick={logOut}>{props.left}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
