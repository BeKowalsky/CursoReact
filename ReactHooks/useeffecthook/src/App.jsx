import React, { useState } from 'react';
import Exercicio from './Exercicio';
import Produto from './Produto';
import VendaDeNote from './VendaDeNote';

function App() {
  // const [contar, setContar] = React.useState(0);

  // React.useEffect(() => {
  //   console.log('Ocorre ao renderizar e ao atualizar');
  // }, []);

  // React.useEffect(() => {
  //   document.title = 'Total: ' + contar;
  // }, [contar]);

  //const [ativo, setAtivo] = useState(false);

  return (
    <div>
      <VendaDeNote />
      {/* {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button> */}
      {/* <Exercicio /> */}
    </div>
  );
}

export default App;
