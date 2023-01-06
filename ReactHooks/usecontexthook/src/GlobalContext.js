import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = useState(0);

  function adicionarUm() {
    setContar((contar) => contar + 1);
  }

  return (
    <GlobalContext.Provider
      value={{ contar, setContar, nome: 'Bernardo', adicionarUm }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
