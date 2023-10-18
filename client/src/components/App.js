import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useEffect } from 'react'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import ProtectedRoute from './util/route_util';
import NavBar from './nav_bar/nav-bar';
import Footer from './footer/footer'
import Home from './home/home'
import Modal from './modal/modal';
import Welcome from './home/welcome'
import Explore from './home/leagues/leagues';
import axios from 'axios'
import MatchesTimeline from './matches/matches-timeline';
import ClubProfile from './club/club-profile';
import LeagueProfile from './league/league-profile';
import PlayerProfile from './player/player-profile';
import MatchOverview from './match/match-overview';
import NewsTimeline from './news/news-timeline';
import { Paper, createTheme, ThemeProvider, Container } from '@mui/material';
import { fetchCurrentUser } from '../actions/user_actions';
import { useDispatch, useSelector } from 'react-redux';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00a672',
      light: '#00c49a',
      dark: '#005a2c'
    },
    secondary: {
      main: '#18ade5',
      light: '#84d6f0',
      dark: '#005c8f'
    }
  },
  typography: {
    fontFamily: 'Ubuntu',
    bold: 'Ubuntu-Bold',
    light: 'Ubuntu-Light',
    regular: 'Ubuntu-Regular'
  }
})

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
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.users?.user?.username || null);
  useEffect(() => { dispatch(fetchCurrentUser()) }, []);
  useEffect(() => {}, [ currentUser ]);

  
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{height: 'fit-content', minHeight: '150vh'}}>
        <Modal/>
        <NavBar currentUser={currentUser} />
        <Container sx={{paddingTop: '6rem'}} fixed >
          <Routes>
            <Route path='/home'
              element={<ProtectedRoute currentUser={currentUser} component={<Home/>}/>}
            />
            <Route path='/matches'
              element={<ProtectedRoute currentUser={currentUser} component={<MatchesTimeline apiKey={apiKey} />} />}
            />  
            <Route path='/news'
              element={<ProtectedRoute currentUser={currentUser} component={<NewsTimeline/>}/>}
            />
            <Route path='/explore'
              element={<ProtectedRoute currentUser={currentUser} component={<Explore />} />}
            />
            <Route path='/club/:clubId'
              element={<ProtectedRoute currentUser={currentUser} component={<ClubProfile/>} />}
            />
            <Route path='/league-overview/:leagueId'
              element={<ProtectedRoute currentUser={currentUser} component={<LeagueProfile />} />}
            />
            <Route path='/player-profile/:playerId'
              element={<ProtectedRoute currentUser={currentUser} component={<PlayerProfile />} />}
            />
            <Route
              path='match-overview/:matchId'
              element={<ProtectedRoute currentUser={currentUser} component={<MatchOverview />} />}
            />
          <Route path='/welcome' element={<Welcome/>}/>
          </Routes>
        </Container>
      </Paper>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;