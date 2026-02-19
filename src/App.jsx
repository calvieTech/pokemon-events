import { useState } from 'react';
import PokemonEvents from './components/PokemonEvents';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PokemonEvents />
    </>
  );
}

export default App;
