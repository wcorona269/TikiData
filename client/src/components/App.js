import React from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer'
import Home from './home/home'
import Counter from './home/counter'
import Leagues from './home/leagues'
import Nations from './home/nations'
import MatchesTimeline from './matches/timeline';
import Modal from './modal/modal';

function App() {
  return (
    <>
    <NavBar/>
    <Modal/>
    <Counter/>
      <Routes>
        <Route path='/leagues' element={<Leagues/>}/> 
        <Route path='/nations' element={<Nations/>}/>
        <Route path='/matches/' element={<MatchesTimeline/>}/>
        {/* <Route path='/leagues' element={<Leagues/>}></Route> */}
        {/* <Route path='/clubs' element={}> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App

