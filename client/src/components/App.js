import React, { useState, useEffect } from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer'
import Home from './home/home'
import Leagues from './home/leagues'
import Nations from './home/nations'
import MatchesTimeline from './matches/timeline';

function App() {
  const [data, setData] = useState([{}])

  // useEffect(() => {
  //   fetch("/teams").then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setData(data)
  //     }
  //   )
  // }, [])

  return (
    <body>
      <NavBar/>
      <Routes>
        <Route path='/leagues' element={<Leagues/>}/> 
        <Route path='/nations' element={<Nations/>}/>
        <Route path='/matches/' element={<MatchesTimeline/>}/>
        {/* <Route path='/leagues' element={<Leagues/>}></Route> */}
        {/* <Route path='/clubs' element={}> */}
      </Routes>
      <Footer/>
    </body>
  )
}

export default App

