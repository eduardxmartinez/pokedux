import { Col, Spin } from 'antd';
import './App.css';
import Searcher from './components/Searchbar';
import PokemonList from "./components/PokemonList"
import logo from "./statics/logo.svg"
import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonWithDetails, setLoading } from './actions';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const pokemons = useSelector(state => state.get("pokemons")).toJS();
  const loading = useSelector(state => state.get("loading"));
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonWithDetails(pokemonsRes));
      dispatch(setLoading(false));
    };
    
    fetchPokemons();
  },[])

  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? 
      (<Col offset={12}>
      <Spin className='spin' spinning={true} size={'large'}/>
      </Col>)
      : (<PokemonList pokemons={pokemons}/>)}
    </div>
  );
}

export default App;
