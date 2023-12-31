import { Link } from 'react-router-dom';
import Constants from '../../constants/Constants';

import heroimage from '../../assets/images/bh1.webp'
import heroimage2 from '../../assets/images/bh2.webp'
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Bannerhero = () => {

    return(
        <section className="hero d-flex justify-content-center align-items-center" id="section_1">
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                >
                <SwiperSlide>
                    <div className="hero__mask"></div>
                    <img src={heroimage} className="hero__image"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heroText">
                                    <h1>
                                      <Link to="charlas" rel="noreferrer">
                                            Charlas<br/>para la familia
                                        </Link>
                                    </h1>
                                    {/* <a href="https://www.youtube.com/watch?v=AYaHuZ4BB6Y" className="popup-youtube play-icon-wrap d-flex align-items-center">
                                        <i className="bi-play play-icon"></i>

                                        <small>1:49 Minutes</small>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero__mask"></div>
                    <img src={heroimage2} className="hero__image"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="heroText">
                                    <h1>
                                      <Link to="ofertas" rel="noreferrer">
                                        Ofertas<br/> para socios
                                      </Link>
                                      </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay"></div> 
                </SwiperSlide>
            </Swiper>
            
        </section>
    )
}

export default Bannerhero