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
import Explore from './home/explore';
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
import Notifications from './home/home-notifications';
import PlayerOverview from './player/player-overview';
import PostsTimeline from './home/posts-column';
import HomeNews from './home/home-news';


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
            <Route path='/'
            element={<ProtectedRoute currentUser={currentUser} />}
            >
              <Route path='/home' element={<PostsTimeline/>} />
              <Route path='/notifications' element={<Notifications/>} />
              <Route path='/matches' element={<MatchesTimeline/>} />
              <Route path='/explore' element={<Explore/>} />
              <Route path='/news' element={<HomeNews/>} />
              <Route path='/match/:id' element={<MatchOverview/>} />
              {/* <Route path='/user/:id' element={<UserProfile/>}/> */}
              <Route path='/club/:id' element={<ClubProfile/>} />
              <Route path='/league/:id' element={<LeagueProfile/>} />
              <Route path='/player/:id' element={<PlayerProfile/>} />
            </Route>
              <Route exact path='/welcome' element={<Welcome />} />
            </Routes>

        </Container>
      </Paper>
      <Footer/>
    </ThemeProvider>
  )
}

export default App;