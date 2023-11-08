import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from './util/route_util';
import NavBar from './nav_bar/nav-bar';
import Footer from './footer/footer'
import ModalContainer from './modal/modal';
import Welcome from './home/welcome'
import Explore from './home/explore';
import axios from 'axios'
import MatchFeed from './matches/match-feed';
import ClubProfile from './club/club-profile';
import LeagueProfile from './league/league-profile';
import PlayerProfile from './player/player-profile';
import MatchOverview from './match/match-overview';
import { createTheme, ThemeProvider, Container, Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import Notifications from './home/home-notifications';
import PostsTimeline from './home/posts-column';
import HomeNews from './home/home-news';
import PostShowPage from './post/post-show-page';
import UserProfile from './user/user-profile';
import UserUpdatePage from './user/user-update-page';

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
  const [lightMode, setLightMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: lightMode ? 'light' : 'dark',
      primary: {
        main: '#00a672',
        light: '#00c49a',
        dark: '#005a2c'
      },
      secondary: {
        main: '#18ade5',
        light: '#84d6f0',
        dark: '#005c8f'
      },
      background: {
        standard: lightMode ? '#f5f5f5' : '#121212'
      }
    },
    typography: {
      fontFamily: 'Ubuntu',
      bold: 'Ubuntu-Bold',
      light: 'Ubuntu-Light',
      regular: 'Ubuntu-Regular'
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.standard, color: theme.palette.text.primary, borderRadius: '0px', minHeight: '150vh' }} >
        <ModalContainer/>
        <NavBar lightMode={lightMode} setLightMode={setLightMode} />
        <Container sx={{paddingTop: '6rem'}} fixed >
          <Routes>
            <Route path='/' element={<ProtectedRoute/>} >
              <Route path='/home' element={<PostsTimeline/>} />
              <Route path='/notifications' element={<Notifications/>} />
              <Route path='/matches' element={<MatchFeed/>} />
              <Route path='/explore' element={<Explore/>} />
              <Route path='/news' element={<HomeNews/>} />
              <Route path='/match/:id' element={<MatchOverview/>} />
              <Route path='/user/:username' element={<UserProfile/>}/>
              <Route path='/club/:id' element={<ClubProfile/>} />
              <Route path='/league/:id' element={<LeagueProfile/>} />
              <Route path='/player/:id' element={<PlayerProfile/>} />
              <Route path='/post/:id' element={<PostShowPage/>}/>
              <Route path='/edit-profile/:username' element={<UserUpdatePage/>}/>
            </Route>
            <Route exact path='/welcome' element={<Welcome />} />
          </Routes>
        </Container>
      </Box>
      <Footer lightMode={lightMode} />
    </ThemeProvider>
  )
}

export default App;