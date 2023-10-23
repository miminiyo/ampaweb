import { Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";
import Favicon from "react-favicon";


import CookieConsent from "react-cookie-consent";



import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap-icons.css'
import './assets/css/magnific-popup.css'
import './assets/css/tooplate-tween-agency.css'
import './assets/css/custom.scss'

import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
//import './assets/js/custom.js'
//import './assets/js/click-scroll.js'
//import './assets/js/jquery.backstretch.min'
// import './assets/js/jquery.magnific-popup.min.js'
// import './assets/js/magnific-popup-options.js'

import SmoothScroll from './components/Helpers/Smoothscroll';

import icoFav from '../src/assets/images/favicon/favicon-32x32.png'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';


import Breadcrumb from './components/Elements/Breadcrumb';
import Home from "./components/Pages/Home/Home"
import Static from './components/Pages/Static/Static'
import Offerts from './components/Pages/Offerts/Offerts';
import Junta from './components/Pages/Junta/Junta';
import Newsall from './components/Pages/News/NewsAll';
import Newsdetail from './components/Pages/Newsdetail/Newsdetail';



const App = () => {

  return (
    <div> 
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Aceptar"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "14px" }}
        expires={150}>
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
      <Favicon url={icoFav} />
      <Helmet>
          <meta charSet="utf-8" />
          <title>AMPA IES Miguel Catalán</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Header/>
      {/* <Breadcrumb/> */}
        <main>
          <SmoothScroll>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="ampa" element={ <Static /> } />
              <Route path="Ofertas" element={ <Offerts /> } />
              <Route path="Junta" element={ <Junta /> } />
              <Route path="Noticias" element={ <Newsall /> } />
              <Route path="detalle/:id" element={ <Newsdetail /> } />
            </Routes>
          </SmoothScroll>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
