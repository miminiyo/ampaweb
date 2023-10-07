import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Constants from "../../constants/Constants"

import Image from "./Image"

const Offert = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/ventajas?per_page=6&order_by=rand")
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
            

          <section className="mc-offert section-padding" id="section_3">
                <div className="container">
                    

                        <h2 className="mb-5 text-center">Ofertas para miembros del AMPA</h2>
                            
                            {users.length > 0 && (
                              <div className="row">
                                {users.map(user => (
                                  <div className="col-lg-4 col-12" key={user.id}>
                                    <div className="mc-offert__item">
                                      {/* <Image id={user.featured_media}/> */}
                                      <img src={user.x_featured_media_medium}/>
                                      <p className="mc-offert__name"><strong>{user.title.rendered}</strong></p>
                                      <p className="mc-offert__location">{user.x_metadata.ubicacion}</p>
                                      <a className="custom-btn custom-bg-dark btn" target="_blank" href={Constants.urlDom + user.x_metadata.PDF} rel="noreferrer">Ver Oferta</a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                            <div className="mt-5 text-center">
                              <Link to="ofertas">Ver todas</Link>
                            </div>
                    </div>
            </section>

        

    )

}

export default Offert