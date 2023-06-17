import React from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import ProtectedRoute from './util/route_util';
import NavBar from './nav_bar/nav_bar';
import Footer from './footer/footer'
import Home from './home/home'
import Modal from './modal/modal';
import Welcome from './home/welcome'
import Leagues from './home/leagues/leagues';
import axios from 'axios'
import MatchesTimeline from './matches/timeline';
import ClubProfile from './club/club';
import LeagueProfile from './league/leagueProfile';
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
    <div className='outer-body'>
      <Modal/>
      <div className='inner-body'>
        <NavBar />
        <Routes>
          <Route path='/'element={
            // <ProtectedRoute component={Home}/>
            <Home/>
          }/>
          <Route path='/matches'
            element={<MatchesTimeline apiKey={apiKey} />}
          />  
          <Route path='/favorites'
            element={<MatchesTimeline apiKey={apiKey}/>}
          />
          <Route path='/leagues'
            element={<Leagues/>}
          />
          <Route path='/club/:clubId'
            element={<ClubProfile/>}
          />
          <Route path='/league-overview/:leagueId'
            element={<LeagueProfile/>}
          />
        <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
        <Footer/>
      </div>
    </div>
    </>
  )
}

export default App;