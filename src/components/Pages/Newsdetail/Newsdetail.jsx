import React, { useEffect, useState } from "react"

import Constants from "../../../constants/Constants"

import Image from "../../Elements/Image"

const Newsdetail = () => {

    const [users, setUsers] = useState([])

  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/noticias/61")
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

    console.log(users.title?.rendered)


    return(
            
          <section className="mc-news-detail page-padding" id="section_3">
                <div className="container">
                    

                        <h2>{users.title?.rendered}</h2>
                            
                                  <div className="col-12" data-id={users.id} key={users.id}>



                                      <div className="work-thumb">
                                          <div className="work-image-wrap">
                                              <a href="images/work/anthony-espinosa-pYQSM-p_0_c-unsplash.jpg" className="image-popup">
                                                  <Image id={users.featured_media}/>
                                              </a>
                                          </div>
                                          <div className="work-text-info">
                                              <h4 className="work-title mb-3"></h4>
                                              <p>{users.x_date}</p>
                                              <div className="mc-news-detail__content" dangerouslySetInnerHTML={{__html:users.content?.rendered}}></div>
                                          </div>
                                      </div> 
                                  </div>
                    </div>
          </section>

    )

}

export default Newsdetail