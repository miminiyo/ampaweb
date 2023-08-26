import voleibol from '../../assets/images/Cadete-C-Voleibol.webp'
import futsal from '../../assets/images/Juvenil-B-Futsal.webp'



const TabsSection = () => {



    return(
        <section className="about section-padding" id="section_2">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12">
                        <h2 className="mb-5">Actividades deportivas</h2>
                    </div>

                    <div className="col-lg-4 col-12 ms-lg-auto mb-5 mb-lg-0">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-intro-tab" data-bs-toggle="tab" data-bs-target="#nav-intro" type="button" role="tab" aria-controls="nav-intro" aria-selected="true">Voleibol</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Fútbol Sala</button>
                            </div>
                        </nav>
                    </div>

                    <div className="col-12">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-intro" role="tabpanel" aria-labelledby="nav-intro-tab">
                                <div className="row">
                                    <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                        <img src={voleibol} className="img-fluid" alt=""/>
                                    </div>

                                    <div className="col-lg-5 col-12 m-auto">
                                        <h3 className="mb-3">Voleibol</h3>

                                        <p>We want you to be happy with our Tween Agency services. Our digital agency is ready to serve you to grow your business in a healthy way.</p>

                                        <p>This is Bootstrap 5 HTML template for your website provided by <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a>. You can download, edit and use this layout for your company website.</p>
                                        
                                        <p>Image credits go to <a rel="nofollow" href="https://freepik.com/" target="_blank">FreePik</a> and <a rel="nofollow" href="https://unsplash.com/" target="_blank">Unsplash</a> for images used in this template. We really appreciate these stock image websites for providing free photos to everyone.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row">
                                <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                        <img src={futsal} className="img-fluid" alt=""/>
                                    </div>

                                    <div className="col-lg-5 col-12 m-auto">
                                        <h3 className="mb-3">Fútbol Sala</h3>

                                        <p>We want you to be happy with our Tween Agency services. Our digital agency is ready to serve you to grow your business in a healthy way.</p>

                                        <p>This is Bootstrap 5 HTML template for your website provided by <a rel="nofollow" href="https://www.tooplate.com/" target="_blank">Tooplate</a>. You can download, edit and use this layout for your company website.</p>
                                        
                                        <p>Image credits go to <a rel="nofollow" href="https://freepik.com/" target="_blank">FreePik</a> and <a rel="nofollow" href="https://unsplash.com/" target="_blank">Unsplash</a> for images used in this template. We really appreciate these stock image websites for providing free photos to everyone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TabsSection