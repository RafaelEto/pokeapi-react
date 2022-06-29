import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Header from './components/Header'
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Header />
      <PokemonList />
    </div>
  );
}

export default App;
