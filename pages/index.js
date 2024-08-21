import React, { useState } from "react";

function Home() {
  const [texto, setText] = useState("");
  const changeText = () => {
    setText("Um beijo pra vc 😘. Te amo!");
  };
  return (
    <div>
      <h1>Bom dia, Princesa.Clique no botão❤️</h1>
      <button onClick={changeText}>Clique aqui!</button>
      <h2>{texto}</h2>
    </div>
  );
}

export default Home;
