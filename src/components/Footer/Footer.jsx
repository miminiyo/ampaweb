import { Link } from "react-router-dom"
import Constants from "../../constants/Constants"

const Footer = () => {

    return(
        <footer className="site-footer" id="footer">
        <div className="container">
            <div className="row">

                <div className="col-lg-4 col-12 mx-auto my-lg-0 my-4">
                    <h5 className="text-white mb-3">Documentación</h5>
                    <ul className="footer-menu">
                        <li className="footer-menu-item"><Link to={Constants.urlDom + "/wp-content/uploads/2023/10/estatutos_ampa_MCatalan.pdf"} className="footer-menu-link" target="_blank">Estatutos</Link></li>
                        {/* <li className="footer-menu-item"><Link to={Constants.urlDom + "/wp-content/uploads/2023/10/estatutos_ampa_MCatalan.pdf"} className="footer-menu-link">Cuentas 2023</Link></li> */}
                    </ul>
                </div>

                <div className="col-lg-4 col-12 mx-auto my-lg-0 my-4">
                    <h5 className="text-white mb-3">El AMPA</h5>
                    <ul className="footer-menu">
                        <li className="footer-menu-item"><Link to="charlas" className="footer-menu-link">Charlas</Link></li>
                        <li className="footer-menu-item"><Link to="ofertas" className="footer-menu-link">Ofertas</Link></li>
                        <li className="footer-menu-item"><Link to="junta" className="footer-menu-link">Junta</Link></li>
                        <li className="footer-menu-item"><Link to="noticias" className="footer-menu-link">Noticias</Link></li>
                    </ul>
                </div>

                <div className="col-lg-4 col-12">
                    <h5 className="text-white mb-3">Contacto</h5>
                    <p className="text-white mb-1">Paseo Isabel la Católica, 3, 50009, Zaragoza</p>
                    <Link to="mailto:info@ampamiguelcatalan.com" target="_blank" className="footer-link">info@ampamiguelcatalan.com</Link>
                </div>

                <div className="site-footer-bottom mt-5">
                    <div className="row pt-4">
                        <div className="col-lg-6 col-12">
                            <p className="copyright-text tooplate-link">Copyright © 2023 :: AMPA IES Miguel Catalán</p>
                        </div>
                        <div className="col-lg-6 col-12">
                            <p className="legal-text tooplate-link"><Link to="/politica-de-cookies">Política de cookies</Link></p>
                        </div>

                        {/* <div className="col-lg-3 col-12 ms-auto">
                            <ul className="social-icon">
                                <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                <li><a href="https://twitter.com/search?q=tooplate" className="social-icon-link bi-twitter"></a></li>

                                <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                <li><a href="#" className="social-icon-link bi-linkedin"></a></li>

                                <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}

export default Footer