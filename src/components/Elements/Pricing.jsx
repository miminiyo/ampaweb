import heroimage from '../../assets/images/bh1.webp'

var divStyle = {
    backgroundImage: 'url(' + heroimage + ')',
  };

const Pricing = () => {

    return(
        <section className="pricing section-padding" id="section_5" style={divStyle}>
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <h2 className="text-white mb-5 text-center">Cuota anual</h2>
                    </div>

                    <div className="col-lg-6 col-12 offset-lg-3">
                        <div className="pricing-plan bg-white">
                            <div className="d-flex flex-wrap align-items-center pricing-header">
                                <div className="pricing-name">
                                    <h4>Precio</h4>
                                </div>
                                <div className="pricing-price">
                                    <h4>30 €</h4>
                                </div>
                            </div>

                            <div className="pricing-body">

                                <ul className="pricing-list">
                                    <li className="pricing-list-item">Beneficios cuotas actividades deportivas</li>
                                    <li className="pricing-list-item">Ofertas para miembros en comercios asociados</li>
                                    <li className="pricing-list-item">Talleres y actividades para familias</li>
                                </ul>
                                {/* <h5 className="mt-lg-5 mt-4 mb-3">Small to Mid-size Businesses</h5>

                                <p>Everything you need for your digital marketing stuffs</p> */}
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