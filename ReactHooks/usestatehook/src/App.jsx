import { useState } from 'react';
import ButtonModal from './Components/ButtonModal';
import Callback from './Callback';
import Modal from './Components/Modal';
import Reatividade from './Reatividade';
import StrictMode from './StrictMode';
import Exercicio from './Exercicio';

const App = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <div className="flex flex-col items-center h-full space-y-10 divide-y-2">
        <div>
          <div className="mt-10">
            <ButtonModal setModal={setModal} modal={modal}>
              Abrir Modal
            </ButtonModal>
          </div>
        </div>
        <div>
          <Reatividade />
        </div>
        <div>
          <Callback />
        </div>
        <div>
          <StrictMode />
        </div>
        <div>
          <Exercicio />
        </div>
      </div>
    </>
  );
};

export default App;
