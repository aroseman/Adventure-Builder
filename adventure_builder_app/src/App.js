import logo from './logo.svg';
import './App.css';
import Navbutton from './components/navbutton';
import PlotForm from './components/plotform';

function App() {
  return (
    <div className="App">
      <header><h1>Adventure Builder</h1></header>
      <div class="navigation">
        <div class="nav">
          <ul>
            <Navbutton buttonText="Adventures"/>
            <Navbutton buttonText="Plots"/>
            <Navbutton buttonText="Dungeons"/>
            <Navbutton buttonText="Tables"/>
          </ul>
          </div>
        </div>
        <div class="viewport">
            <PlotForm></PlotForm>
          </div>
    </div> 
  );
}

export default App;
