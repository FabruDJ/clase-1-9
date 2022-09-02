import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState({})
  const [isDecimeters, setIsDecimeters] = useState(true)
  const [isHectograms, setIsHectograms] = useState(true)
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 600) + 1
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
    .then(res => setPokemons(res.data))
  }, [])
  
  const changeUnits = () => {
    setIsDecimeters(!isDecimeters)
    setIsHectograms(!isHectograms)
  }

  const changePokemon = () => {
    const random = Math.floor(Math.random() * 600) + 1
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
    .then(res => setPokemons(res.data))
  }

  console.log(pokemons)

  return (
    <div className="App">
      <div className="pokemon-card">
        <h1 className='pokemon-name'>{pokemons.name}</h1>
        <img src={pokemons.sprites?.other['official-artwork'].front_default} className='pokemon-img' alt="pokemon-image" />
        <p><b>Weight</b>: {isHectograms ? pokemons.weight : pokemons.weight/10} {isHectograms ? 'hectograms' : 'kilograms'}</p>
        <p><b>Height</b>: {isDecimeters ? pokemons.height : pokemons.height/10} {isDecimeters ? 'decimeters' : 'meters'}</p>
        <p><b>Type</b>: {pokemons.types?.[0].type.name}</p>
        <button onClick={changeUnits} className='change-btn'>Change Units</button>
        <button onClick={changePokemon} className='change-pokemon-btn'>Change Pokemon</button>
        </div>
    </div>
  )
}

export default App
