import React from 'react'
import './card-status.css'

const CardStatus = (props) => {
  return (
    <div className="card-status">
        <div className="card-status__icon">
            <i className={props.icon}></i>
        </div>
        <div className="card-status__info">
            <h4 className="count">{props.count}</h4>
            <span className="title">{props.title}</span>
        </div>
    </div>
  )
}

export default CardStatus