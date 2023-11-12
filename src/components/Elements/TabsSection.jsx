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

                                        <p>En la temporada 2022-2023 hemos contado con un total de 11 equipos de Voleibol, de los cuales 6 han sido de categorías escolares y 5 de ellos, federados:</p>
                                        <ul>
                                            <li>3 equipos infantiles femeninos</li>
                                            <li>2 equipos infantiles masculinos</li>
                                            <li>1 equipo cadete femenino</li>
                                            <li>1 equipo juvenil femenino</li>
                                            <li>1 equipo junior femenino</li>
                                            <li>2 equipos sénior femeninos</li>
                                            <li>1 equipo sénior masculino</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                <div className="row">
                                <div className="col-lg-6 col-12 mb-lg-0 mb-4">
                                        <img src={futsal} className="img-fluid" alt=""/>
                                    </div>

                                    <div className="col-lg-5 col-12 m-auto">
                                        <p>En la temporada 2023-2024 contamos con equipos de Futbol Sala de las siguientes categorías:</p>
                                        <ul>
                                            <li>Senior A Masculino</li>
                                            <li>Senior B Masculino</li>
                                            <li>Juvenil Masculino</li>
                                            <li>Cadete A Masculino</li>
                                            <li>Cadete B Masculino</li>
                                            <li>Infantil Femenino</li>
                                            <li>Infantil Masculino</li>
                                        </ul>
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