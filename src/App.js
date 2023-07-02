import React, { useEffect, useState } from "react"

import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';

import Image from "./components/Elements/Image";

//import useFetch from './hooks/useFetch';

const App = () => {
  

  const [users, setUsers] = useState([])
  
  const fetchUserData = () => {
    fetch("http://localhost:8888/apiampa/wp-json/wp/v2/ventajas")
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

  return (
    <div>
      <Header/>
        <main>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <Image/>
                <p>{user.title.rendered}</p>
              </li>
            ))}
          </ul>
        )}
        </main>
      <Footer/>
    </div>
  );
}

export default App;
