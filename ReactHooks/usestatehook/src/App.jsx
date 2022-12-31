import { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col items-center h-full">
      <Modal modal={modal} setModal={setModal} />
      <div className="mt-10">
        <ButtonModal setModal={setModal} modal={modal}>
          Abrir Modal
        </ButtonModal>
      </div>
    </div>
  );
};

export default App;
