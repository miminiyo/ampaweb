const Pricing = () => {

    return(
        <section className="pricing section-padding" id="section_5">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="text-white mb-5 text-center">Cuota anual</h2>
                    </div>

                    <div className="col-lg-6 col-12 offset-lg-3">
                        <div className="pricing-plan bg-white">
                            <div className="d-flex flex-wrap align-items-center pricing-header">
                                <i className="pricing-icon bi-person"></i>

                                <div className="pricing-name">
                                    <h4>Precio</h4>
                                </div>

                                <div className="pricing-price">
                                    <h4>33 €</h4>
                                </div>

                            </div>

                            <div className="pricing-body">

                                <ul className="pricing-list">
                                    <li className="pricing-list-item">Fully Digital</li>
                                    <li className="pricing-list-item">Social Media Managements</li>
                                    <li className="pricing-list-item">Website Optimizations</li>
                                    <li className="pricing-list-item">24/7 Phone Calls and Emails</li>
                                </ul>

                                <h5 className="mt-lg-5 mt-4 mb-3">Small to Mid-size Businesses</h5>

                                <p>Everything you need for your digital marketing stuffs</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="overlay dark-overlay"></div>
        </section>
    )
}

export default Pricing