const Footer = () => {

    return(
        <footer className="site-footer">
        <div className="container">
            <div className="row">

                <div className="col-lg-5 col-12 me-auto mb-4">
                    <h5 className="text-white mb-3">Newsletter</h5>

                    <form className="custom-form subscribe-form mt-4" role="form">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-7">                                    
                                <input type="email" name="subscribe-email" id="subscribe-email" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Your email address" required=""/>
                            </div>

                            <div className="col-lg-4 col-md-4 col-5">                                  
                                <button type="submit" className="form-control" id="subscribe">Subscribe</button>
                            </div>

                        </div>
                    </form>
                </div>

                <div className="col-lg-2 col-12 mx-auto my-lg-0 my-4">
                    <h5 className="text-white mb-3">Services</h5>

                    <ul className="footer-menu">
                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Digital Marketing</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Creative Ideas</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Branding</a></li>

                        <li className="footer-menu-item"><a href="#" className="footer-menu-link">Video Contents</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-12">
                    <h5 className="text-white mb-3">Say Hi</h5>

                    <p className="text-white mb-1">Sunderland SR6 0JL, United Kingdom</p>

                    <p><a href="mailto:email@company.com" className="footer-link">email@company.com</a></p>
                </div>

                <div className="site-footer-bottom mt-5">
                    <div className="row pt-4">
                        <div className="col-lg-6 col-12">
                            <p className="copyright-text tooplate-link">Copyright © 2022 Tween Agency Co., Ltd.
                            Design: <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a></p>
                        </div>

                        <div className="col-lg-3 col-12 ms-auto">
                            <ul className="social-icon">
                                <li><a href="#" className="social-icon-link bi-facebook"></a></li>

                                <li><a href="https://twitter.com/search?q=tooplate" className="social-icon-link bi-twitter"></a></li>

                                <li><a href="#" className="social-icon-link bi-instagram"></a></li>

                                <li><a href="#" className="social-icon-link bi-linkedin"></a></li>

                                <li><a href="#" className="social-icon-link bi-youtube"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
}

export default Footer