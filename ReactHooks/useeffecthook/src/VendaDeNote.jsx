import React from 'react';
import { BsCart4 } from 'react-icons/bs';

export default function VendaDeNote() {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <div className="flex justify-center">
      {dados && (
        <>
          <div className="border-2 border-gray-400 p-10 flex flex-col items-center mt-10 rounded-md">
            <div className="flex justify-center flex-col items-center ">
              <img
                src={dados.fotos[0].src}
                width="250"
                alt="Notebook"
                className="rounded-md"
              />
              <h1 className="mt-5 font-bold text-xl">{dados.nome}</h1>
              <p className="mt-2 text-base">R${dados.preco}</p>
            </div>
            <button
              onClick={() => setContar(contar + 1)}
              className="border-2 border-green-600 py-2 px-8 mt-4 rounded-md text-green-800 bg-green-50"
            >
              Adicionar ao carrinho
            </button>
          </div>
          <div className="mt-10">
            <div className="border border-gray-300 py-2 px-10 rounded-md ml-10 w-52 flex items-center flex-col">
              <h2 className="text-lg font-medium">Carrinho</h2>
              <div className="flex flex-col items-center">
                <div className="flex items-center my-2">
                  <BsCart4 className="mr-2" /> {contar}
                </div>
                <div className="truncate">Total: R${contar * dados.preco}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
