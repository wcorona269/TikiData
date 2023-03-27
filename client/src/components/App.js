import React, { useState, useEffect } from 'react'
import NavBar from './nav_bar/nav_bar'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/teams").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
      }
    )
  }, [])

  return ( 
    <>
      <NavBar/>
      <div>
        Hello
      </div>
    </>
  )
}

export default App