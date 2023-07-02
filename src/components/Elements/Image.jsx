import React, { useEffect, useState } from "react"

const Image = () => {

    const [images, setImages] = useState([])
  
    const fetchUserData = () => {
      fetch("http://localhost:8888/apiampa/wp-json/wp/v2/media/9")
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
            <img src={"http://localhost:8888/apiampa/wp-content/uploads/" + images._wp_attached_file} alt={images.alt_text}></img>
      );
}

export default Image