import React, { useEffect, useState } from "react"

import Constants from "../../../constants/Constants"

import Image from "../../Elements/Image"

const Offerts = () => {

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

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    const newUsersList = shuffle(users);

    return(
            

          <section className="mc-offert page-padding" id="section_3">
                <div className="container">
                    

                        <h2>Ofertas para miembros del AMPA</h2>
                            
                            {newUsersList.length > 0 && (
                              <div className="row">
                                {newUsersList.map(user => (
                                  <div className="col-lg-4 col-12" key={user.id}>
                                    <div className="mc-offert__item">
                                      <Image id={user.featured_media}/>
                                      <p className="mc-offert__name"><strong>{user.title.rendered}</strong></p>
                                      <p className="mc-offert__location">{user.x_metadata.ubicacion}</p>
                                      <a className="custom-btn custom-bg-dark btn" target="_blank" href={Constants.urlDom + user.x_metadata.PDF} rel="noreferrer">Ver Oferta</a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                    </div>
            </section>

        

    )
}

export default Offerts