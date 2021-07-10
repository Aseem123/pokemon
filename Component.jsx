import React from 'react'

function Comp(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="image">
          <img src={props.image} alt="pokemon image" />
        </div>
        <div className="other-info">
          <h3>
            Name: <span>{props.name}</span>
          </h3>
          <p>
            Weight: <span>{props.weight} kg</span>
          </p>
          <p>
            Height: <span>{props.height} inc</span>
          </p>
          <p>
            Total moves: <span>{props.move}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Comp
