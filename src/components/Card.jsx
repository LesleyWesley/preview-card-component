import React from "react"

function Card(props) {
    const color =props.car.color;
    console.log(color);

  return (
    <div className="card" style={{backgroundColor: color}}>
      <img src={props.car.icon} alt="sedan icon" />
      <h2 className="card--title">{props.car.carType}</h2>
      <p className="card--description">{props.car.description}</p>
      <a href="#" className="card--link" style={{color: color}}>Learn More</a>
    </div>
  )
}

export default Card
