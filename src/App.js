

import {Switch,Route} from "mwouter"

import Home from "./components/Home"

import PokemonDetails from "./components/PokemonDetails"
import './App.css';


const App = () => {
  return(
    <>
    <Home/>
    <Switch>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/pokemon/:pokemonName" component={PokemonDetails}/>
    </Switch>
    </>
  )

}
export default App
