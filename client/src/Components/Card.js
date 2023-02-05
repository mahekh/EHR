import React from 'react'
import "../styles/Card.css";

function Card(props) {
  return (
    <>
    <div className='wrapper'>
    <div className='card'>
        <div className='card-body'>
            <img className='card-image' src={props.img} />
            <h2 className='card-title'>{props.title}</h2>
            <p className='card-description'>{props.description}</p>
        </div>

        <button className='card-btn'>{props.cardbtn}</button>
    </div>
    </div>

    </>
  )
}

export default Card