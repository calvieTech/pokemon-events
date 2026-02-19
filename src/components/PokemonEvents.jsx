import React, { useState } from 'react';

function PokemonEvents() {
  const [inputValue, setInputValue] = useState('');
  const [eventStatus, setEventStatus] = useState('Pokemon Finder');
  const [pokemon, setPokemon] = useState();
  const [pokemonError, setPokemonError] = useState('');
  const [errorStatus, setErrorStatus] = useState('');

  const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => setPokemon(data))
      .then(() => setPokemonError(''))
      .catch((err) => {
        setPokemonError(`${inputValue} is not a valid Pokemon`);
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMouseOver = () => {
    setEventStatus(
      'Mouse has entered the button, you can click it now!',
    );
  };

  const handleMouseOut = () => {
    setEventStatus(
      'Mouse has left the button, clicking is not possible',
    );
  };

  const handleKeyDown = (event) => {
    setEventStatus(`Key down: ${event.key}`);
  };

  const handleKeyUp = (event) => {
    setEventStatus(`Key up: ${event.key}`);
  };

  const handleFocus = () => {
    setEventStatus('Input field is focused, type a Pokemon name!');
  };

  const handleBlur = () => {
    setEventStatus(
      'Input fifeld lost focus, there will be no searching...',
    );
  };

  const handleLoad = () => {
    setEventStatus('Image loaded successfully');
  };

  const handleError = () => {
    setErrorStatus('Error loading image');
  };

  return (
    <div>
      <h2>Event Handling in React</h2>
      <form action="">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder="Type a Pokemon Name..."
        />
        <button
          type="button"
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Load Pokemon
        </button>
      </form>

      {pokemon && (
        <div>
          <p>{pokemon.name}</p>
          <img
            src={pokemon.sprites.other.home.front_default}
            alt={pokemon.name}
          />
        </div>
      )}

      {pokemonError && (
        <p style={{ color: 'red' }}> {pokemonError}</p>
      )}

      <p>{eventStatus}</p>

      <img
        src="notValidImage.jpg"
        alt="not valid img"
        onLoad={handleLoad}
        onError={handleError}
      />
      {errorStatus && <p style={{ color: 'red' }}>{errorStatus}</p>}
    </div>
  );
}

export default PokemonEvents;
