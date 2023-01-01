import React, { useState } from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border py-2 px-6 border-black rounded-md bg-slate-200 text-gray-700 active:bg-slate-300"
    >
      {children}
    </button>
  );
};

export default function Reatividade() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  const handleClick = () => {
    items.push('Item ' + (items.length + 1));
  };

  const handleClickReativo = () => {
    setItems([...items, 'Item ' + (items.length + 1)]);
  };

  return (
    <div className="mt-10">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex mt-2 list-none border-2 border-black items-center justify-center p-2"
        >
          {item}
        </li>
      ))}
      <div className="flex flex-col space-y-2 mt-4">
        <Button onClick={handleClick}>Adicionar item (sem reatividade)</Button>
        <Button onClick={handleClickReativo}>
          Adicionar item (com reatividade)
        </Button>
      </div>
    </div>
  );
}
