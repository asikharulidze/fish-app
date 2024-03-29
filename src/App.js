import './App.css';
import FishWrapper from './components/Wrapper/FishWrapper';
import fishes from './components/Wrapper/fishes';
import NavBar from './components/NavBar/NavBar';
import NavBarItem from './components/NavBar/NavBarItem/NavBarItem';

function App() {
  
  return (
    <div className="App">
      <NavBar>
        <NavBarItem title="Home"/>
        <NavBarItem title="About"/>
        <NavBarItem title="Fishes" to="/Fishes"  activeClassName="active"/>
      </NavBar>
      <FishWrapper fishes={fishes}></FishWrapper>
    </div>
  );
}

export default App;
