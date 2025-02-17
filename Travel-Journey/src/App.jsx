import Header from "./components/Header"
import Country from "./components/Country"
import './index.css'
import data from "../data/data";

function App() {
  const places = data.map((place) =>{
     return (
      <Country 
        key = {place.id}
        place = {place}
      />)
  })
  return (
    <>
      <Header />
      <section>
        {places}
      </section>
    </>
  )
}

export default App
