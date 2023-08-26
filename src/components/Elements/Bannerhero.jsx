import heroimage from '../../assets/images/hall.jpg'

const Bannerhero = () => {

    return(
        <section className="hero d-flex justify-content-center align-items-center" id="section_1">
            <img src={heroimage} className="hero__image"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="heroText">
                            <h1 className="text-white mb-lg-5 mb-4">AMPA IES Miguel Catalán</h1>
                            <a href="https://www.youtube.com/watch?v=AYaHuZ4BB6Y" className="popup-youtube play-icon-wrap d-flex align-items-center">
                                <i className="bi-play play-icon"></i>

                                <small>1:49 Minutes</small>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </section>
    )
}

export default Bannerhero