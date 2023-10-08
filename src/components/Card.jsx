import React from "react"

function Card() {
  return (
    <div className="card">
      <img src="icon-sedans.svg" alt="sedan icon" />
      <h2 className="card--title">Sedans</h2>
      <p className="card--description">Choose a sedan for its affordability and excellent fuel economy.  Ideal for cruising in the city or on your next road trip.</p>
      <a href="#" className="card--link">Learn More</a>
    </div>
  )
}

export default Card
