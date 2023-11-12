import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Constants from "../../../constants/Constants"

import Image from "../../Elements/Image"

const Charlas = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/charlas")
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
            
          <section className="mc-conference page-padding" id="section_3">
                <div className="container">
                    
                        <h1>Charlas</h1>
                            {users.length > 0 && (
                              <div className="row">
                                {users.map(user => (
                                  <section className="mb-4">
                                    {!user.x_metadata.charla_realizada ? (
                                      <div className="col-12 mc-conference__item" data-id={user.id} key={user.id}>
                                        <div className="mc-conference__thumb">
                                            <div className="row">
                                              <div className="col-12 col-sm-4">
                                                <div className="mc-conference__image-wrap">
                                                  <Link to={"/detalle/" + user.id} className="image-popup">
                                                        <Image id={user.featured_media}/>
                                                  </Link>
                                                </div>
                                              </div>
                                              <div className="col-12 col-sm-8">
                                                <div className="mc-conference__info">
                                                    <p className="mc-conference__date">{user.x_metadata.fecha}</p>
                                                    <Link to={"/detalle/" + user.id} className="image-popup">
                                                      <h2 className="mc-conference__title mb-3">{user.title.rendered}</h2>
                                                    </Link>
                                                    <div className="mc-news-detail__content" dangerouslySetInnerHTML={{__html:user.content?.rendered}}></div>
                                                </div>
                                              </div>
                                            </div>
                                        </div> 
                                      </div>
                                      ) : ("")}
                                  </section>
                                ))}
                              </div>
                            )}
                            {users.length > 0 && (
                              <div className="row">
                                <h2 className="text-center mb-5">Charlas ya realizadas</h2>
                                {users.map(user => (
                                  <section>
                                    {user.x_metadata.charla_realizada ? (
                                      <div className="col-12 mc-conference__item" data-id={user.id} key={user.id}>
                                        <div className="mc-conference__thumb">
                                            <div className="row">
                                              <div className="col-12 col-sm-4">
                                                <div className="mc-conference__image-wrap">
                                                  <Link to={"/detalle/" + user.id} className="image-popup">
                                                        <Image id={user.featured_media}/>
                                                  </Link>
                                                </div>
                                              </div>
                                              <div className="col-12 col-sm-8">
                                                <div className="mc-conference__info">
                                                    <p className="mc-conference__date">{user.x_metadata.fecha}</p>
                                                    <Link to={"/detalle/" + user.id} className="image-popup">
                                                      <h2 className="mc-conference__title mb-3">{user.title.rendered}</h2>
                                                    </Link>
                                                    <div className="mc-news-detail__content" dangerouslySetInnerHTML={{__html:user.content?.rendered}}></div>
                                                </div>
                                              </div>
                                            </div>
                                        </div> 
                                      </div>
                                      ) : ("")}
                                  </section>
                                ))}
                              </div>
                            )}
                    </div>
          </section>
    )
}

export default Charlas