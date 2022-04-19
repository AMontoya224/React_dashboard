import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <h1>
        Aqui habra un Dashboard!!
      </h1>
      <span class="material-icons-round">engineering</span>
        <div className='row'>
          <p>
            Aplicacion desarrollada en React
          </p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>
  );
}

export default App;
