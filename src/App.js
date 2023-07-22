import { Routes, Route } from 'react-router-dom'

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css'
import './assets/css/magnific-popup.css'
import './assets/css/tooplate-tween-agency.css'
import './assets/css/custom.scss'

import './assets/js/jquery.min.js'
import './assets/js/popper.js'
import './assets/js/bootstrap.min'
//import './assets/js/click-scroll.js'
//import './assets/js/jquery.backstretch.min.js'
// import './assets/js/jquery.magnific-popup.min.js'
// import './assets/js/magnific-popup-options.js'
import './assets/js/custom.js'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

import Home from "./components/Pages/Home/Home"
import Static from './components/Pages/Static/Static'

const App = () => {

  return (
    <div>
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="ampa" element={ <Static /> } />
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
