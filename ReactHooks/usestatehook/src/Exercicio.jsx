import React, { useState } from 'react';
import Produto from './Produto';
import loader from './assets/img/loader.jpeg';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 border-2 bg-slate-50 active:bg-slate-100"
    >
      {children}
    </button>
  );
};

export default function Exercicio() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  const [soldOutProducts, setSoldOutProducts] = useState({});

  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setTimeout(() => {
      setDados(json);
      setCarregando(false);
    }, '1000');
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="mt-4 flex space-x-2">
        <Button onClick={handleClick}>Tablet</Button>
        <Button onClick={handleClick}>Smartphone</Button>
        <Button onClick={handleClick}>Notebook</Button>
      </div>
      {carregando && (
        <img src={loader} alt="loader" width="50" className="mt-4" />
      )}
      {!carregando && dados && (
        <Produto
          dados={dados}
          soldOutProducts={soldOutProducts}
          setSoldOutProducts={setSoldOutProducts}
        />
      )}
    </div>
  );
}
