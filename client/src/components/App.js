import React from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import ProtectedRoute from './util/route_util';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer'
import Home from './home/home'
import Counter from './home/counter'
import Leagues from './home/leagues'
import Nations from './home/nations'
import MatchesTimeline from './matches/timeline';
import Modal from './modal/modal';
import Welcome from './home/welcome'

import axios from 'axios'
let apiKey;

const getConfig = async () => {
  try {
    const response = await axios.get('/api/config');
    apiKey = response.data.api_key;
  } catch (error) {
    console.error(error);
  }
};

getConfig();

function App() {

  return (
    <>
      <Modal/>
      <NavBar />
      <Routes>
        <Route path='/'element={
          <ProtectedRoute component={Home}/>
        }/>
        <Route path='/welcome' element={<Welcome/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

