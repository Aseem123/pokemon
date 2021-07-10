import React, { useEffect, useState } from 'react'
import Comp from './Component'
import './pokemon.css'
// https://pokeapi.co/api/v2/pokemon/1

function SearchAndFetch() {
  const [initial, updateInitial] = useState('')
  const [userInput, setUserInput] = useState(1)
  const click = () => {
    setUserInput(() => initial)
  }
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    function api() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then((res) => res.json())
        .then((data) => {
          setApiData([data])
          console.log(data)
        })
    }
    api()
  }, [userInput])
  return (
    <>
      <div className="main-div">
        <div className="search">
          <input
            type="text"
            placeholder="Search favourite number"
            value={initial}
            onChange={(e) => updateInitial(e.target.value)}
          />
          <button>
            <i onClick={click} className="fas fa-search"></i>
          </button>
        </div>
        {apiData.map((curElem, index) => {
          return (
            <Comp
              key={index}
              name={curElem.name}
              image={curElem.sprites.front_default}
              weight={curElem.weight}
              height={curElem.height}
              move={curElem.moves.length}
            />
          )
        })}
      </div>
    </>
  )
}

export default SearchAndFetch
