import React from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import ProtectedRoute from './util/route_util';
import NavBar from './nav_bar/nav-bar';
import Footer from './footer/footer'
import Home from './home/home'
import Modal from './modal/modal';
import Welcome from './home/welcome'
import Explore from './home/leagues/leagues';
import axios from 'axios'
import MatchesTimeline from './matches/timeline';
import ClubProfile from './club/clubProfile';
import LeagueProfile from './league/leagueProfile';
import PlayerProfile from './player/playerProfile';
import MatchOverview from './match/match-overview';
import NewsTimeline from './news/news-timeline';

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
      <NavBar />
      <div className='inner-body'>
        <Routes>
          <Route path='/'element={
            // <ProtectedRoute component={Home}/>
            <Home/>
          }/>
          <Route path='/matches'
            element={<MatchesTimeline apiKey={apiKey} />}
          />  
          <Route path='/news'
            element={<NewsTimeline/>}
          />
          <Route path='/favorites'
            element={<MatchesTimeline apiKey={apiKey}/>}
          />
          <Route path='/explore'
            element={<Explore/>}
          />
          <Route path='/club/:clubId'
            element={<ClubProfile/>}
          />
          <Route path='/league-overview/:leagueId'
            element={<LeagueProfile/>}
          />
          <Route
            path='/player-profile/:playerId'
            element={<PlayerProfile/>}
          />
          <Route
            path='match-overview/:matchId'
            element={<MatchOverview/>}
          />
        <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App;