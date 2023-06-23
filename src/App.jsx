import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button";
import formatearCantidad from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

  // Actuliza la cantidad 
  const handleChange = (event) => {
    setCantidad(Number(event.target.value));
  };

  // Decrementa la cantidad
  const handleClickDecremento = () => {
    const valor = cantidad - STEP;

    if (valor < MIN) return;

    setCantidad(valor);
  };


  // Incrementa la cantidad
  const handleClickIncremento = () => {
    const valor = cantidad + STEP;

    if (valor > MAX) return;

    setCantidad(valor);
  };

  return (
    <div className="w-11/12 max-w-lg my-20 mx-auto shadow p-10">
      <Header />

      <div className="flex justify-between my-8">
        <Button
          operador="-"
          fn={handleClickDecremento}
        />

        <Button
          operador="+"
          fn={handleClickIncremento}
        />
      </div>

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        value={cantidad}
        min={MIN}
        max={MAX}
        step={STEP}
      />

      <p className="text-center my-1 text-5xl font-extrabold text-indigo-600"> {formatearCantidad(cantidad)}</p>
    </div>
  )
}

export default App
