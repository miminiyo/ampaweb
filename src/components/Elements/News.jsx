import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Constants from "../../constants/Constants"

import Image from "./Image"

const News = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/noticias?per_page=4")
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
                                  <div className="col-lg-3 col-md-6 col-12" key={user.id}>



                                      <div className="work-thumb">
                                          <div className="work-image-wrap">
                                          <a href={"/detalle/" + user.id} className="image-popup">
                                                  <Image id={user.featured_media}/>
                                              </a>
                                          </div>
                                          <div className="work-text-info">
                                              {/* <small className="work-tag bg-white shadow-lg">Art Direction</small> */}
                                              <h4 className="work-title mb-3">{user.title.rendered}</h4>
                                              <a href="/"> Ver más</a>
                                          </div>
                                      </div> 
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="mt-5 text-center">
                              <Link to="noticias">Ver todas</Link>
                            </div>





                    </div>
          </section>


    )

}

export default News