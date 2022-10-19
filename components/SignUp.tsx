import {Alert, Box, Typography} from '@mui/material';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React from "react";
import {useRecoilState} from "recoil";
import {sendSignUp} from "../utils";
import {modalOpen, modalState} from "../states";

const SignUp = () => {
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpen);
  const [getModalState, setModalState] = useRecoilState(modalState);
  const [isSignUpError, setSignUpError] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await sendSignUp(
      data.get('id'),
      data.get('name'),
      data.get('nickname'),
      data.get('email'),
      data.get('password'),
    );
    if (res !== undefined && res.data === true) {
      setSignUpError(false);
      setModalOpen(true);
      setModalState('Login');
    } else {
      setSignUpError(true);
    }
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
      <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
        <LockOutlinedIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
        {
          isSignUpError ? (
            <Alert severity="error">알수없는 에러가 발생했습니다.</Alert>
          ) : null
        }
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
          id="name"
          label="이름"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="nickname"
          label="닉네임"
          name="nickname"
          autoComplete="nickname"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
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
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호 확인"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{mt: 3, mb: 2, height: '48px'}}>
          회원가입
        </Button>
      </Box>
    </Box>
  );
};

export default SignUp;
