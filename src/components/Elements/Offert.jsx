import React, { useEffect, useState } from "react"

import Constants from "../../constants/Constants"

import Image from "./Image"

const Offert = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/ventajas")
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
                                      <Image id={user.featured_media}/>
                                      <p><strong>{user.title.rendered}</strong></p>
                                      <a className="custom-btn custom-bg-dark btn" target="_blank" href={"http://localhost:8888/apiampa/" + user.x_metadata.PDF}>Ver Oferta</a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                    </div>
            </section>

        

    )

}

export default Offert