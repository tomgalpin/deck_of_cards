import React from 'react';

function Card(props) {
  return(
    <li className="card">
      <img src={props.image} alt={props.code} />
    </li>
  )
}

export default Card;