import React, { useState } from 'react';

export default function Callback() {
  const [ativo, setAtivo] = useState(true);

  function handleClick() {
    setAtivo((anterior) => !anterior);
  }

  return (
    <button
      onClick={handleClick}
      className="py-2 px-10 border border-black mt-10 rounded-md bg-slate-50 active:bg-slate-100"
    >
      {ativo ? 'Está Ativo' : 'Está Inativo'}
    </button>
  );
}
