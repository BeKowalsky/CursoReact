import React from 'react';

export default function Produto() {
  React.useEffect(() => {
    function handleScroll(event) {
      console.log(event);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ height: '200vh' }}>
      <p>Meu produto</p>
    </div>
  );
}
