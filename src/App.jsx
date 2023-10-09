
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card.jsx"
import data from "./data.js"

console.log(data)

function App() {

  const cars = data.map(car => {
    return (
      <Card
        key={car.carType}
        car={car}
      />
    )
  })

  return (
    <div className="container">
      {cars}
    </div>
  )
}

export default App
