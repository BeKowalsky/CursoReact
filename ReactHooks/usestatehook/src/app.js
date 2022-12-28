import { useState } from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  // const [ativo, setAtivo] = useState(true);
  // const [dados, setDados] = useState({ nome: 'Bernardo', idade: '21' });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Ciência da Computação' });
  // }

  const [modal, setModal] = useState(false);

  return (
    <div className="flex flex-col items-center h-full">
      {/* <p>
        {dados.nome}, {dados.idade}, {dados.faculdade}
      </p>
      <button disabled={!ativo} onClick={handleClick}>
        {ativo ? 'Botão Ativo' : 'Botão Inativo'}
      </button> */}
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
