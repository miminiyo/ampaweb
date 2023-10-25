import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import $ from 'jquery';

import logo from '../../assets/images/logo.webp'

import Constants from "../../constants/Constants"


// NAVBAR

const handleSubmit = (event) => {
    //event.prevenDefault()
    if(window.innerWidth<991){   
        $(".navbar-collapse").removeClass('show');
        $(".navbar-toggler").removeClass('collapsed').attr('aria-expanded', false);
    }
  }

  const PillsExample = () => {
    return (
      <Nav variant="pills">
        <Nav.Item>
          <Nav.Link as={NavLink} end to="/" eventKey="/">
            Inicio
          </Nav.Link>
        </Nav.Item>
        <div className="nav-item"><a href={Constants.urlDom + "/wp-content/uploads/2023/10/estatutos_ampa_MCatalan.pdf"} target="_blank" rel="noreferrer" onClick={handleSubmit} className="nav-link">Estatutos</a></div>
        <Nav.Item>
          <Nav.Link as={NavLink} to="ofertas" eventKey="/ofertas" onClick={(event) => handleSubmit(event)}>
            Ofertas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/junta" eventKey="/junta" onClick={(event) => handleSubmit(event)}>
            Junta
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/noticias" eventKey="/noticias" onClick={(event) => handleSubmit(event)} className="nav-link-new">
            Noticias
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }




const Header = () => {

   

    const [text, setText] = useState([])
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/posts/66")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setText(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

    //const estatutos = text.x_metadata.PDF

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="Logo AMPA IES Miguel Catalán"/>
                        <span>
                          <strong>AMPA</strong>
                           IES Miguel Catalán
                        </span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-container">
                            {/* <ul className="navbar-nav ms-lg-5">
                                <li className="nav-item">
                                    <Link to="/" onClick={collapseMenu}>Inicio</Link>
                                </li>

                                <li className="nav-item">
                                    <a href={Constants.urlDom + "/wp-content/uploads/2023/10/estatutos_ampa_MCatalan.pdf"} target="_blank" rel="noreferrer" onClick={collapseMenu}>Estatutos</a>
                                </li>

                                <li className="nav-item">
                                    <Link to="ofertas" onClick={collapseMenu}>Ofertas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="junta" onClick={collapseMenu}>Junta</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="noticias" onClick={collapseMenu}>Noticias</Link>
                                </li>

                                
                            </ul> */}
                            <PillsExample/>
                            <a href="https://iesmcatalan.com/" className="custom-btn btn btn-lg" target="_blank" rel="noreferrer">
                                IES Miguel Catalán
                            </a>
                        </div>
                         {/* <div className="ms-auto d-none d-lg-block">
                            <a href="/" className="custom-btn btn btn-lg">
                                Descarga...
                                <i className="bi-download ms-2"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header