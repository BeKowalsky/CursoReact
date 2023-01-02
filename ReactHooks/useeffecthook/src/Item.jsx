import React from 'react';

export default function Item({ product }) {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (product !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [product]);
  if (dados === null) return null;
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
}
