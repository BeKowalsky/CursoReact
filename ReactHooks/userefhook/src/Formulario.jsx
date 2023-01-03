import React, { useState } from 'react';

export default function Formulario() {
  const [comentarios, setComentarios] = useState([]);
  const [input, setInput] = useState('');
  const inputElement = React.useRef();

  const handleClick = () => {
    setComentarios([...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  };

  return (
    <div className="App">
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        ref={inputElement}
      />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
}
