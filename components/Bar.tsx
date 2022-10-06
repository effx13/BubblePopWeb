import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import {Login, SideBar, SignModal, SignUp, ForgotPassword} from 'components';
import {useRecoilState} from 'recoil';
import {drawer, login, modalOpen, modalState} from 'states';
import './Bar.module.css';

const Bar = () => {
  const [isDrawer, setDrawer] = useRecoilState(drawer);
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpen);
  const [getModalState, setModalState] = useRecoilState(modalState);
  const [isLogin, setLogin] = useRecoilState(login);
  return (
    <Box sx={{flexGrow: 1}}>
      <SignModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        {
          {
            Login: <Login/>,
            SignUp: <SignUp/>,
            ForgotPassword: <ForgotPassword/>,
          }[getModalState]
        }
      </SignModal>
      <SideBar/>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
            onClick={() => {
              setDrawer(true);
            }}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            BubblePop
          </Typography>
          {isLogin ? (
            <Button color="inherit" onClick={() => {
              setLogin(false);
            }}>Logout</Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                setModalOpen(true);
                setModalState('Login');
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
