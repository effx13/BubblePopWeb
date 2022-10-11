import {Box, Typography, Avatar, Button, TextField, ThemeProvider} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import {useRecoilState} from 'recoil';
import {login, modalOpen, modalState} from 'states';
import {createQueue} from 'utils';
import React from "react";
import {AccessTime} from "@mui/icons-material";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import {koKR} from "@mui/material/locale";


const AddQueue = () => {
  const [isModalOpen, setModalOpen] = useRecoilState(modalOpen);
  const [date, setDate] = React.useState(moment());
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const res = await createQueue(
      data.get('name') as string,
      date.toISOString(),
    );
    if (res !== undefined) {
      setModalOpen(false);
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
        <AccessTime/>
      </Avatar>
      <Typography component="h1" variant="h5">
        예약하기
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="예약자 이름"
          type="text"
          id="text"
          placeholder="홍길동"
          autoComplete="name"
        />
        <ThemeProvider theme={koKR}>
          <LocalizationProvider dateAdapter={AdapterMoment} adapterLonewValuecale='ko-KR'>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} sx={{width: '100%'}} />}
              label="예약 시간"
              value={date}
              onChange={(newValue) => {
                setDate(moment(newValue));
              }}
            />
          </LocalizationProvider>
        </ThemeProvider>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{mt: 3, mb: 2, height: '48px'}}>

          예약하기
        </Button>
      </Box>
    </Box>
  );
};

export default AddQueue;
