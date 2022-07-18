import "./App.css"
import Card from "./Card"
import Navbar from "./Navbar"
import items from "./data" 

export default function App() {
  const cards = items.map(function(item) {
    return <Card key={item.id} item={item} />
  })
  return (
    <div className="app">
      <Navbar />
      <section className="card-section">
        {cards}
      </section>
    </div>
  )
}