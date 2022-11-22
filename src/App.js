
import { useEffect, useState } from 'react';
import './App.css';
import Cards from './componentes/Cards/Cards';
import Sets from './componentes/Sets/Sets';

function App() {
  let [sets, setSets] = useState(undefined)
  let [set, setSet] = useState(undefined)
  let [cards, setCards] = useState(undefined)
  const APIUrl = 'https://api.magicthegathering.io/v1/sets'
  const getAPiData = () => {
    fetch(APIUrl)
      .then(res => res.json())
      .then(res => {
        setSets(res)
      })
  }

  const printCards = () => {
    const cardsUrl = 'https://api.magicthegathering.io/v1/cards?set='+set
    fetch(cardsUrl)
    .then(res => res.json())
    .then(res => {
      setCards(res)
    })
  }
  useEffect(() => {

  }, [sets])

  useEffect(() => {
    if (set !== undefined) {
      printCards()
      // console.log(set);
      
    }
  }, [set])

  useEffect(() => {
    getAPiData()
  }, [])

  return (
    <div className="App">
      {sets !== undefined ? <Sets data={sets} setSet={setSet} /> : <p>No hay datos para mostrar</p>}
      {cards !== undefined ? <Cards data={cards}/>:<></>}
    </div>
  );
}

export default App;
