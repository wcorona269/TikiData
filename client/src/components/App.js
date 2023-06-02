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

import axios from 'axios'
let apiKey;

const getConfig = async () => {
  try {
    const response = await axios.get('/api/config');
    apiKey = response.data.api_key;
    // Use the API key in your frontend code
    // console.log(apiKey);
  } catch (error) {
    console.error(error);
  }
};

getConfig();

function App() {
  return (
    <>
    <NavBar/>
    <Modal/>
    {/* <Counter/> */}
      <Routes>
        <Route path='/leagues' element={<Leagues apiKey={apiKey} />}/> 
        <Route path='/nations' element={<Nations apiKey={apiKey} />}/>
        <Route path='/matches/' element={<MatchesTimeline apiKey={apiKey} />}/>
        {/* <Route path='/leagues' element={<Leagues/>}></Route> */}
        {/* <Route path='/clubs' element={}> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App

