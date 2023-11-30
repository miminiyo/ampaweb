import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

import Constants from "../../constants/Constants"

import Image from "./Image"

const NextCharla = () => {


    const [users, setUsers] = useState([])

    const params = useParams()



  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/charlas/103")
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
     <section className="mc-conference mc-conference--bg">
      <div className="container">
        <h2>Siguiente Charla</h2>
        <div className="row">
            <div className="col-12 mc-conference__item" data-id={users.id} key={users.id}>
              <div className="mc-conference__thumb">
                  <div className="row">
                    <div className="col-12 col-sm-4">
                      <div className="mc-conference__image-wrap">
                        <Link to={"/detalle/" + users.id} className="image-popup">
                              <Image id={users.featured_media}/>
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 col-sm-8">
                      <div className="mc-conference__info">
                          <p className="mc-conference__date">{users.x_metadata?.fecha}</p>
                          <Link to={"/detalle/" + users.id} className="image-popup">
                            <h3 className="mc-conference__title mb-3">{users.title?.rendered}</h3>
                          </Link>
                          <div className="mc-news-detail__content" dangerouslySetInnerHTML={{__html:users.content?.rendered}}></div>
                      </div>
                    </div>
                  </div>
              </div> 
            </div>
        </div>
        <div className="mt-5 text-center">
          <Link to="charlas" className="link">Ver todas</Link>
        </div>
      </div>
     </section>       

    )

}

export default NextCharla