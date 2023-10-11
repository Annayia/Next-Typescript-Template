'use client';
import React from 'react';
import { useUserContext } from '@/utils/contexts/UserContext';
import { useRouter } from 'next/navigation';
import { AppBar, Button, Container, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const NavBar = () => {
  const { userDataLoggedIn, setUserDataLoggedIn } = useUserContext();
  const router = useRouter();

  return userDataLoggedIn ? (
    <>
      <AppBar>
        <Container>
          <IconButton onClick={() => router.push('/')}>
            <HomeIcon />
          </IconButton>
          <Button color="inherit" onClick={() => router.push('/profilesList')}>
            Profiles List
          </Button>
          <Button color="inherit" onClick={() => router.push('/profile')}>
            Profile
          </Button>{' '}
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem('access_token');
              setUserDataLoggedIn(undefined);
              router.push('/');
            }}
          >
            Logout
          </Button>
        </Container>
      </AppBar>
    </>
  ) : (
    <></>
  );
};

export default NavBar;
