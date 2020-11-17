import logo from './logo.svg';
import './App.css';
import Navbutton from './components/navbutton';
function App() {
  return (
    <div className="App">
      <header><h1>Adventure Builder</h1></header>
      <div class="nav">
        <ul>
          <Navbutton />
          <Navbutton />
          <Navbutton />
          <Navbutton />
        </ul>
      </div>
    </div>
  );
}

export default App;
