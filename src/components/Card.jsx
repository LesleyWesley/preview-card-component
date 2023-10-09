import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  background-color: ${ props => props.color}
`;

function Card(props) {
  return (
    <div className="card">
      <img src={props.car.icon} alt="sedan icon" />
      <h2 className="card--title">{props.car.carType}</h2>
      <p className="card--description">{props.car.description}</p>
      <a href="#" className="card--link">Learn More</a>
    </div>
  )
}

export default Card
