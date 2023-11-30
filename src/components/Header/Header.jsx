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
          <Nav.Link as={NavLink} end to="/" eventKey="/" onClick={(event) => handleSubmit(event)}>
            Inicio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="charlas" eventKey="/charlas" onClick={(event) => handleSubmit(event)}>
            Charlas
          </Nav.Link>
        </Nav.Item>
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

                  <Link to="/" className="navbar-brand">
                      <img src={logo} alt="Logo AMPA IES Miguel Catalán"/>
                      <span>
                        <strong>AMPA</strong>
                          IES Miguel Catalán
                      </span>
                  </Link>

                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                      <div className="navbar-container">
                          <PillsExample/>
                          <Link to="https://iesmcatalan.com/" className="custom-btn btn btn-lg" target="_blank" rel="noreferrer">
                              IES Miguel Catalán
                          </Link>
                      </div>
                  </div>
              </div>
          </nav>
      </header>
    )
}

export default Header