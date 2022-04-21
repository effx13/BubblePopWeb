import { atom } from 'recoil';

const drawer = atom({
  key: 'drawer',
  default: false,
});

const login = atom({
  key: 'login',
  default: false,
});

const loginModal = atom({
  key: 'loginModal',
  default: false,
});

export { drawer, login, loginModal };
