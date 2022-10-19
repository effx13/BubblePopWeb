import axios from 'axios';
import {useRecoilState} from 'recoil';
import {login} from 'states';

const getQueueCount = async (): Promise<any> => {
  const res = await axios.get('/queue/count');
  return res.data.count;
};

const getQueueData = async (): Promise<any> => {
  const res = await axios.get('/queue/data');
  return res.data;
};

const createQueue = async (name: string | null, reservationTime: Date | null): Promise<any> => {
  const res = await axios({
    url: '/queue/create',
    method: 'post',
    data: {
      name,
      reservationTime,
    },
    withCredentials: true,
  });
  return res;
};

const sendLogin = async (userId: FormDataEntryValue | null, password: FormDataEntryValue | null): Promise<any> => {
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
  } catch (err) {
    return "Error";
  }
};

const sendSignUp = async (userId: FormDataEntryValue | null,
  name: FormDataEntryValue | null,
  nickname: FormDataEntryValue | null,
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null): Promise<any> => {
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
};

export {createQueue, getQueueCount, getQueueData, sendLogin, sendSignUp};
