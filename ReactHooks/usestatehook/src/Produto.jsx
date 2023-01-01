import React from 'react';
import { MdShoppingCart } from 'react-icons/md';

export default function Produto({
  dados,
  soldOutProducts,
  setSoldOutProducts,
}) {
  const handleClick = () => {
    const key = dados.nome;
    soldOutProducts[key] = {
      name: dados.nome,
      sold: !!dados.vendido,
      price: dados.preco,
    };
    setSoldOutProducts({ ...soldOutProducts });
  };

  const vendido = soldOutProducts[dados.nome]?.sold === true;

  return (
    <div
      className="mt-5 flex justify-center items-center flex-col border p-5 mb-10 relative"
      id={dados.id}
    >
      {vendido && (
        <div className="absolute top-0 bg-red-800 w-full text-yellow-50 flex justify-center py-2">
          ESGOTADO
        </div>
      )}

      <img src={dados.fotos[0].src} alt={dados.nome} width="200" />
      <h1 className="mt-4 font-bold">{dados.nome}</h1>
      <p className="w-60 text-justify my-4">{dados.descricao}</p>
      <p className="underline">R$ {dados.preco}</p>
      {!vendido && (
        <button
          className="border-2 py-2 px-8 rounded-xl border-green-700 bg-green-50 text-green-800 flex items-center mt-5"
          onClick={handleClick}
        >
          <MdShoppingCart className="mr-2" /> Comprar
        </button>
      )}
    </div>
  );
}
