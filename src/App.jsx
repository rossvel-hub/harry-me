
import './App.css';
//import fondo from '../src/assets/hogwarts-two.jpg';
import Header from '../src/components/Header.jsx';
import Cards from '../src/components/Cards.jsx'


function App() {
  return (
    <div className="App">
      {/* <img
        src={fondo}
        className="App-fondo"
        alt="fondo" /> */}
      <Header />
      <Cards/>
    </div>
     
  );
}

export default App;
