import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Constants from "../../constants/Constants"

import Image from "./Image"

const News = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/noticias?per_page=3")
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

    return(
            
          <section className="mc-news section-padding" id="section_3">
                <div className="container">
                    

                        <h2 className="mb-5 text-center">Noticias</h2>
                            
                            {users.length > 0 && (
                              <div className="row">
                                {users.map(user => (
                                  <div className="col-lg-4 col-md-6 col-12" key={user.id}>
                                      <div className="work-thumb">
                                        <div className="work-image-wrap">
                                          <Link to={"/detalle/" + user.id} className="image-popup">
                                                <Image id={user.featured_media}/>
                                          </Link>
                                          <p className="work-date">{user.x_date}</p>
                                        </div>
                                        <div className="work-text-info">
                                            <Link to={"/detalle/" + user.id} className="image-popup">
                                              <h4 className="work-title mb-3">{user.title.rendered}</h4>
                                            </Link>

                                            <Link to={"/detalle/" + user.id} className="custom-btn">
                                              Ver más
                                            </Link>
                                        </div>
                                      </div> 
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="text-center">
                              <Link to="noticias" className="link">Ver todas</Link>
                            </div>





                    </div>
          </section>


    )

}

export default News