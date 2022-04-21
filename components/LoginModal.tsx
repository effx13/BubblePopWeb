import Modal from '@mui/material/Modal';
import { useRecoilState } from 'recoil';
import { loginModal } from 'states';
import Login from './Login';

const LoginModal = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useRecoilState(loginModal);

  return (
    <Modal
      open={isLoginModalOpen}
      onClose={() => {
        setLoginModalOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Login />
    </Modal>
  );
};

export default LoginModal;
