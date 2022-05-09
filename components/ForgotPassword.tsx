import { Box } from '@mui/material';

const ForgotPassword = () => (
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
    비밀번호 찾기
  </Box>
);

export default ForgotPassword;
