import axios from 'axios';
import {useRecoilState} from 'recoil';
import {login} from 'states';

const getQueueCount = async () => {
  try {
    const res = await axios.get('/queue/count');
    return res.data.count;
  } catch (e) {
    console.log(e);
  }
};

const getQueueData = async () => {
  try {
    const res = await axios.get('/queue/data');
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

const sendLogin = async (userId: FormDataEntryValue | null, password: FormDataEntryValue | null) => {
  try {
    const res = await axios({
      url: '/auth/login',
      method: 'post',
      data: {
        userId,
        password,
      },
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

const sendSignUp = async (userId: FormDataEntryValue | null, name: FormDataEntryValue | null, nickname: FormDataEntryValue | null, email: FormDataEntryValue | null, password: FormDataEntryValue | null) => {
  try {
    const res = await axios({
      url: '/auth/signup',
      method: 'post',
      data: {
        userId,
        name,
        nickname,
        email,
        password,
      },
      withCredentials: true,
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export {getQueueCount, getQueueData, sendLogin, sendSignUp};
