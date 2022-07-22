import { Col, Spin } from 'antd';
import './App.css';
import Searcher from './components/Searchbar';
import PokemonList from "./components/PokemonList"
import logo from "./statics/logo.svg"
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchPokemonsWithDetails } from './slices/dataSlice';

function App() {
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);

  const loading = useSelector((state) => state.ui.loading);

  const search = useSelector((state) => state.search.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt="Pokedux"/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? 
      (<Col offset={12}>
      <Spin className='spin' spinning={true} size={'large'}/>
      </Col>)
      : (<PokemonList pokemons={pokemons} search={search}/>)}
    </div>
  );
}

export default App;
