import { atom } from 'recoil';

const drawer = atom({
  key: 'drawer',
  default: false,
});

const login = atom({
  key: 'login',
  default: false,
});

const modalOpen = atom({
  key: 'modalOpen',
  default: false,
});

const modalState = atom({
  key: 'modalState',
  default: 'Login',
});

export { drawer, login, modalOpen, modalState };
