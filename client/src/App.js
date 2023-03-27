import React, { useState, useEffect } from 'react'

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
    <div>
      Hello
    </div>
  )
}

export default App