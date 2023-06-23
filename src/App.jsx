import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button";
import formatearCantidad from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);

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

      <h2
        className="mt-6 text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-600">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500 outline-none"
        value={meses}
        onChange={e => setMeses(e.target.value)}
      >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-6 bg-gray-50">
        <h2
          className="my-6 text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-600">de Pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses </p>
        <p className="text-xl text-gray-500 text-center font-bold"> Total a pagar </p>
        <p className="text-xl text-gray-500 text-center font-bold"> Mensuales </p>
      </div>
    </div>
  )
}

export default App
