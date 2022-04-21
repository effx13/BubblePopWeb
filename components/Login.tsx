import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { login, loginModal } from 'states';
import { sendLogin } from 'utils';

const Login = () => {
  const [isLogin, setLogin] = useRecoilState(login);
  const [isLoginModalOpen, setLoginModalOpen] = useRecoilState(loginModal);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendLogin(
      data.get('id'),
      data.get('password'),
      !!data.get('remember'),
    ).then((res) => {
      if (res.data.status === 'Success') {
        setLogin(true);
        setLoginModalOpen(false);
      }
    });
  };
  return (
    <Box
      sx={{
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="id"
          label="아이디"
          name="id"
          autoComplete="username"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={
            <Checkbox value="remember" name="remember" color="primary" />
          }
          label="로그인 상태 유지하기"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              비밀번호를 잊었습니까?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {'회원가입'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;
