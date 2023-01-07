import React from 'react';
import { useFetch, useLocalStorage } from './hooks';

function App() {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFetch();

  const handleClick = ({ target }) => {
    setProduto(target.innerText);
  };

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );

      console.log(response, json);
    }

    fetchData();
  }, [request]);

  return (
    <div className="App">
      <h1>{produto}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data?.map((produto, index) => (
          <li key={index}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
