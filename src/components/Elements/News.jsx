import React, { useEffect, useState } from "react"

import Constants from "../../constants/Constants"

import Image from "./Image"

const News = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/noticias")
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
                                  <div className="col-lg-4 col-12" key={user.id}>
                                    <div className="mc-offert__item">
                                      <Image id={user.featured_media}/>
                                      <p><strong>{user.title.rendered}</strong></p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                    </div>
            </section>

        

    )

}

export default News