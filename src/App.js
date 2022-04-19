import logo from './logo.svg';
import './App.css';
import { LogoLinkedin, LogoGithub } from 'react-ionicons'


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
      <footer>
        <p>
            Desarrollado por <b>Andres Montoya</b>
        </p>
        <div class="row">
          <a class="paginas" href="https://www.linkedin.com/in/amontoya224/" target="_blank">
            <LogoLinkedin
              color={'#000000'} 
              title={''}
              height="50px"
              width="40px"
            />
          </a>
          <a class="paginas" href="https://github.com/AMontoya224" target="_blank">
            <LogoGithub />
          </a>
          <a class="paginas" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank">
            <ion-icon name="logo-chrome" size="large"></ion-icon>
          </a>
          <a class="paginas" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank">
            <ion-icon name="logo-facebook" size="large"></ion-icon>
          </a>
          <a class="paginas" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank">
            <ion-icon name="logo-youtube" size="large"></ion-icon>
          </a>
        </div>
      </footer>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default App;
