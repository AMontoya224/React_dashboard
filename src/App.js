import logo from './logo.svg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import scholar from './images/scholar.png';
import concytec from './images/concytec.png';
import cv from './images/cv.jpg';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
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
        <div className="row">
          <a className="pagina" href="https://www.linkedin.com/in/amontoya224/" target="_blank">
            <img className='pagina-logo' src={linkedin} alt='logo linkedin'/>
          </a>
          <a className="pagina" href="https://github.com/AMontoya224" target="_blank">
            <img className='pagina-logo' src={github} alt='logo github'/>
          </a>
          <a className="pagina" href="https://scholar.google.com/citations?user=LI023coAAAAJ&hl=es" target="_blank">
            <img className='pagina-logo' src={scholar} alt='logo scholar'/>
          </a>
          <a className="pagina" src='./images/AMontoya_CV.pdf' target="_blank">
            <img className='pagina-logo' src={cv} alt='logo cv'/>
          </a>
          <a className="pagina" href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=140140" target="_blank">
            <img className='pagina-logo' src={concytec} alt='logo concytec'/>
          </a>
          <a className="pagina" href="https://web.facebook.com/juan.andres.montoya.angulo" target="_blank">
            <img className='pagina-logo' src={facebook} alt='logo facebook'/>
          </a>
          <a className="pagina" href="https://www.youtube.com/channel/UC94EeNbFYtW6vIUds8qR94A" target="_blank">
            <img className='pagina-logo' src={youtube} alt='logo youtube'/>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
