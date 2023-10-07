import React, { useEffect, useState } from "react"

import Constants from "../../../constants/Constants"


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

    console.log(fetchUserData)
  
    useEffect(() => {
      fetchUserData()
    }, [])

    return(
            

          <section className="mc-junta page-padding" id="section_3">
                <div className="container">
                    

                        <h2>Miembros de la Junta</h2>
                            
                            {users.length > 0 && (
                              <div className="row">
                                {users.map(user => (
                                  <div className="col-md-6 col-lg-4 col-xl-3 col-12" key={user.id}>
                                    <div className="mc-junta__item">
                                      <img src={user.x_featured_media_medium}/>
                                      <p className="mc-junta__name"><strong>{user.title.rendered}</strong></p>
                                      <p className="mc-junta__location">{user.x_metadata.cargo}</p>
                                      <a className="" target="_blank" href={"mailto:" + Constants.urlDom + user.x_metadata.email} rel="noreferrer">{user.x_metadata.email}</a>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                    </div>
            </section>

        

    )
}

export default Junta