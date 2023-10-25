import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import $ from 'jquery'

import Constants from "../../../constants/Constants"

import Image from "../../Elements/Image"

const activeMenu = () => {
      $(".nav-link-new").addClass('active');
}

const Newsdetail = () => {


    const [users, setUsers] = useState([])

    const params = useParams()



  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/noticias/" + params.id)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

    activeMenu()

    return(
            
          <section className="mc-news-detail page-padding" id="section_3">
                <div className="container">
                    <h2>{users.title?.rendered}</h2>
                    <div data-id={users.id} key={users.id}>
                        <div className="work-detail">
                            <div className="work-image-wrap">
                                <a href="images/work/anthony-espinosa-pYQSM-p_0_c-unsplash.jpg" className="image-popup">
                                    <Image id={users.featured_media}/>
                                </a>
                                <p className="work-date">{users.x_date}</p>
                            </div>
                            <div className="work-text-info">
                                <div className="mc-news-detail__content" dangerouslySetInnerHTML={{__html:users.content?.rendered}}></div>
                            </div>
                        </div> 
                    </div>
                    <p><a href="/noticias" className="link">Volver a litado de noticias</a></p>
                </div>
          </section>

    )

}

export default Newsdetail