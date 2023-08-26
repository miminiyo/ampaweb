import React, { useEffect, useState } from "react"

import Constants from "../../constants/Constants"

const Image = (props) => {

    const [images, setImages] = useState([])
  
    const fetchUserData = () => {
      fetch(Constants.urlDom + "/wp-json/wp/v2/media/" + props.id)
        .then(response => {
          return response.json()
        })
        .then(data => {
            setImages(data)
        })
    }
  
    useEffect(() => {
      fetchUserData()
    }, [])

    return (
            <img src={images.x_featured_media_original} alt={images.alt_text}  class="img-fluid work-image"></img>
      );
}

export default Image