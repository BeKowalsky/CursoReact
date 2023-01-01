import React from 'react';

export default function StrictMode() {
  const [contar, setContar] = React.useState(1);
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      return contar + 1;
    });
    setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }

  return (
    <div className="mt-4">
      {items.map((item) => (
        <li key={item} className="list-none border px-4 py-2 border-black">
          {item}
        </li>
      ))}
      <button
        onClick={handleClick}
        className="px-6 py-2 border border-black rounded-md mt-2"
      >
        {contar}
      </button>
    </div>
  );
}
