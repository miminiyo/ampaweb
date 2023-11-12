import React, { useEffect, useState } from "react"

import Constants from "../../../constants/Constants"
import { Link } from "react-router-dom"


const Junta = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/miembros")
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
            

          <section className="mc-junta page-padding" id="section_3">
                <div className="container">
                    

                        <h2>Miembros de la Junta</h2>
                        <p className="mb-5 text-center">Estos son los miembros actuales de la Junta del AMPA del IES Miguél Catalán.</p>
                            
                            {newUsersList.length > 0 && (
                              <div className="row">
                                {newUsersList.map(user => (
                                  <div className="col-md-6 col-lg-4 col-xl-3 col-12" key={user.id}>
                                    <div className="mc-junta__item">
                                      <img src={user.x_featured_media_medium}/>
                                      <p className="mc-junta__name"><strong>{user.title.rendered}</strong></p>
                                      <p className="mc-junta__location">
                                        {user.x_metadata.cargo}
                                        {user.x_metadata.seccion ? (
                                          " / " + user.x_metadata.seccion
                                          ) : (
                                          ""
                                        )}
                                       
                                       </p>
                                      <Link className="link" target="_blank" href={"mailto:" + user.x_metadata.email} rel="noreferrer">{user.x_metadata.email}</Link>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                          <p>También puedes contactar con el AMPA escribiendo al email: <Link href="mailto:info@ampamiguelcatalan.com" className="link" target="_blank" rel="noreferrer">info@ampamiguelcatalan.com</Link></p>
                    </div>
            </section>

        

    )
}

export default Junta