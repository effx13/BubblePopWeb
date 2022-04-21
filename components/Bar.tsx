import { AccountCircleRounded } from '@mui/icons-material';
import FactCheckRoundedIcon from '@mui/icons-material/FactCheckRounded';
import HistoryRoundedIcon from '@mui/icons-material/HistoryRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuIcon from '@mui/icons-material/Menu';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useRecoilState } from 'recoil';
import { drawer, login, loginModal } from 'states';
import './Bar.module.css';
import LoginModal from './LoginModal';

const Bar = () => {
  const router = useRouter();
  const [isDrawer, setDrawer] = useRecoilState(drawer);
  const [isLogin] = useRecoilState(login);
  const [isLoginModalOpen, setLoginModalOpen] = useRecoilState(loginModal);
  const changeTab = (tab: string) => {
    router.push(tab);
    setDrawer(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LoginModal />
      <SwipeableDrawer
        anchor="left"
        open={isDrawer}
        onClose={() => {
          setDrawer(false);
        }}
        onOpen={() => {
          setDrawer(true);
        }}>
        <List>
          <ListItemButton onClick={() => changeTab('/')}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="홈" />
          </ListItemButton>
          <ListItemButton onClick={() => changeTab('/profile')}>
            <ListItemIcon>
              <AccountCircleRounded />
            </ListItemIcon>
            <ListItemText primary="프로필" />
          </ListItemButton>
          <ListItemButton onClick={() => changeTab('/queue')}>
            <ListItemIcon>
              <FactCheckRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="대기열" />
          </ListItemButton>
          <ListItemButton onClick={() => changeTab('/history')}>
            <ListItemIcon>
              <HistoryRoundedIcon />
            </ListItemIcon>
            <ListItemText primary="플레이 기록" />
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setDrawer(true);
            }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BubblePop
          </Typography>
          {isLogin ? (
            <Button color="inherit">Logged in</Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                setLoginModalOpen(true);
              }}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Bar;
