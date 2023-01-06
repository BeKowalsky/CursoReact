import React from 'react';

export const ExercicioContext = React.createContext();

export const ExercicioStorage = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limparDados() {
    setProduto(null);
  }
  return (
    <ExercicioContext.Provider value={{ produto, setProduto, limparDados }}>
      {children}
    </ExercicioContext.Provider>
  );
};
