import React, { useState } from 'react';
import Item from './Item';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

export default function Exercicio() {
  const [product, setProduct] = useState(null);
  const [cleanLocalStorage, setCleanLocalStorage] = useState(false);

  React.useEffect(() => {
    const productLocal = window.localStorage.getItem('product');
    if (productLocal !== null) setProduct(productLocal);
  }, []);

  React.useEffect(() => {
    if (product !== null) window.localStorage.setItem('product', product);
    if (cleanLocalStorage) window.localStorage.removeItem('product');
  }, [product, cleanLocalStorage]);

  function handleClick({ target }) {
    setProduct(target.innerText.toLowerCase());
  }

  function clearLocalStorage() {
    setCleanLocalStorage(!cleanLocalStorage);
    setProduct(null);
  }

  return (
    <div>
      <h1 className="capitalize">Preferência: {product}</h1>
      <button onClick={handleClick} className="mr-5">
        Notebook
      </button>
      <button onClick={handleClick} className="mr-5">
        Smartphone
      </button>
      <button onClick={clearLocalStorage}>Limpar LocalStorage</button>
      <Item product={product} />
    </div>
  );
}
