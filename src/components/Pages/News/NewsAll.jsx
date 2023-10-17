import React, { useEffect, useState } from "react"

import Constants from "../../../constants/Constants"

import Image from "../../Elements/Image"

const Newsall = () => {

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
            
          <section className="mc-news page-padding" id="section_3">
                <div className="container">
                    
                        <h2>Noticias</h2>
                            {users.length > 0 && (
                              <div className="row">
                                {users.map(user => (
                                  <div className="col-lg-3 col-md-6 col-12" data-id={user.id} key={user.id}>
                                      <div className="work-thumb">
                                          <div className="work-image-wrap">
                                              <a href={"/detalle/" + user.id} className="image-popup">
                                                  <Image id={user.featured_media}/>
                                              </a>
                                          </div>
                                          <div className="work-text-info">
                                              <h4 className="work-title mb-3">{user.title.rendered}</h4>
                                              <a href="/"> Ver más</a>
                                          </div>
                                      </div> 
                                  </div>
                                ))}
                              </div>
                            )}
                    </div>
          </section>
    )
}

export default Newsall