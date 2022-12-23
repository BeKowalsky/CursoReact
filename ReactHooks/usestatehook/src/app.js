import { useState } from 'react';

const App = () => {
  const [ativo, setAtivo] = useState(true);

  return (
    <button
      disabled={!ativo}
      onClick={() => setAtivo((previousDefault) => !previousDefault)}
    >
      {ativo ? 'Botão Ativo' : 'Botão Inativo'}
    </button>
  );
};

export default App;
