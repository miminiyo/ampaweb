import React, { useEffect, useState } from "react"
import parse from 'html-react-parser'

import Constants from "../../../constants/Constants"


const Static = () => {

    const [text, setText] = useState([])
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/posts/1")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setText(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

    const title = text.title?.rendered;
    const content = text.content?.rendered;

    return(
           <section className="mc-post section-padding">
            <div className="container">
              <h1>
                {title}
              </h1>
              {parse(content || '')} 
            </div>
           </section>
    )
}

export default Static