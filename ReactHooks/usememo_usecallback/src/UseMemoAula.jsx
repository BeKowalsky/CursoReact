import React, { useState } from 'react';

function operacaoLenta() {
  let c;

  for (let i = 0; i < 100000000; i++) {
    c = i + ((i / 10) * 1) / 4 - 13428 + (1843434 * 5) / 1 + 345;
  }

  return c;
}

export default function UseMemoAula() {
  const [contar, setContar] = useState(0);

  const t1 = performance.now();
  React.useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return (
    <div>
      <p>{contar}</p>
      <button onClick={() => setContar(contar + 1)}>Contar</button>
    </div>
  );
}
