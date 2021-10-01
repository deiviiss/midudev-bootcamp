import './App.css';
import Mensaje from './Messaje.js'
import Description from './Description.js'

function App() {
  return (
    <div className="App">
      <Mensaje color='yellow' message='Estamos trabajando' />
      <Mensaje color='green' message='En curso' />
      <Mensaje color='red' message='De React' />
      <Description />
    </div>
  );
}

export default App;
