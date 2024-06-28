import React from 'react';
import './css/style.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Theme from './components/Theme'; 
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import WelcomeMessage from './components/WelcomeMessage';
import AppBenefits from './components/AppBenefits';
import InteractiveMenu from './components/InteractiveMenu';
import KeyFeatures from './components/KeyFeatures';
import LatestNews from './components/LatestNews';
import OurPortfolio from './components/OurPortfolio';
import Showcase from './components/Showcase';
import GetInTouch from './components/GetInTouch';
import ThankYouNote from './components/ThankYouNote';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="body-container">
        <Header />
        <HeroBanner />
        <WelcomeMessage />
        <AppBenefits />
        <InteractiveMenu />
        <KeyFeatures />
        <LatestNews />
        <OurPortfolio />
        <Showcase />
        <GetInTouch />
        <ThankYouNote />
      </div>
    </ThemeProvider>
  );
}

export default App;
