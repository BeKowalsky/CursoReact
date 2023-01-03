import React, { useState } from 'react';

export default function Notificacao() {
  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao('Item adicionado ao Carrinho!');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <div>Items no carrinho: {carrinho}</div>
      <button onClick={handleClick}>Adicionar Carrinho</button>

      <p style={{ marginTop: '15px' }}>{notificacao}</p>
    </div>
  );
}
