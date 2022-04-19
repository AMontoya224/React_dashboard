import logo from './logo.svg';
import linkedin from './images/linkedin.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
      <h1>
        Aqui estara mi Portafolio!!
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
          <a class="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank">
            <img className='pagina-logo' src='https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png' alt='logo linkedin'/>
          </a>
          <a class="pagina" href="https://github.com/AMontoya224" target="_blank">
            <img className='pagina-logo' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='logo github'/>
          </a>
          <a class="pagina" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank">
            <img className='pagina-logo' src='http://lancis.ecologia.unam.mx/assets/morena%20files/GOOGLE%20SCHOLAR%20LOGO.png' alt='logo scholar'/>
          </a>
          <a href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank">
            <img className='pagina-logo' src={linkedin} alt='logo facebook'/>
          </a>
          <a class="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank">
            <img className='pagina-logo' src='https://www.pngmart.com/files/20/Youtube-Logo-PNG-HD.png' alt='logo youtube'/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
