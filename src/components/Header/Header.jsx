import { Link } from "react-router-dom"
import logo from '../../assets/images/logo.webp'


const Header = () => {

    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">

                    <a href="/" className="navbar-brand">
                        <img src={logo} alt="Logo AMPA IES Miguel Catalán"/>
                    </a>

                    <a href="/" className="custom-btn btn btn-lg d-lg-none ms-auto me-4">
                        Descarga...
                        <i className="bi-download ms-2"></i>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-5">
                            <li className="nav-item">
                                <Link to="/">Inicio</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="ampa">AMPA</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="ofertas">Ofertas</Link>
                            </li>

                            
                        </ul>

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