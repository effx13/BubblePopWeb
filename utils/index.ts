import axios from 'axios';
import { useRecoilState } from 'recoil';
import { login } from 'states';

const getQueueCount = async () => {
  try {
    const res = await axios.get('/queue/count');
    return res.data.count;
  } catch (e) {
    console.log(e);
  }
};

const sendLogin = async (userid: string, pw: string, remember: boolean) => {
  try {
    const res = await axios({
      url: '/login',
      method: 'post',
      data: {
        userid,
        pw,
        remember,
      },
      withCredentials: true,
    });
    return res;
  } catch (e) {
    if (e.response.data.status === 'Error') {
      switch (e.response.data.error) {
        case 'Invalid ID or PW':
          console.log('아이디 또는 비밀번호가 다릅니다.');
          break;
        default:
          console.log('알수 없는 오류가 발생하였습니다.');
          break;
      }
    }
  }
};

export { getQueueCount, sendLogin };
