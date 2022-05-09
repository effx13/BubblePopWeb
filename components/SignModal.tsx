import { Backdrop } from '@mui/material';
import Modal from '@mui/material/Modal';
import { SetterOrUpdater } from 'recoil';

const SignModal = ({
  isModalOpen,
  setModalOpen,
  children,
}: React.PropsWithChildren<{
  isModalOpen: boolean;
  setModalOpen: SetterOrUpdater<boolean>;
}>) => (
  <>
    {isModalOpen ? (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}>
        <>{children}</>
      </Modal>
    ) : null}
  </>
);

export default SignModal;
