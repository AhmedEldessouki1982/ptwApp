import React from 'react';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';
import { CardData } from './utils/CardsData';
import './app.scss';
import Requist from './components/requists/Requist';
import Popup from './components/Popup/Popup';
//import MUI theme
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './components/theme/theme';

export default function App() {
  let [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value = {colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {/*Navbar component*/}
          <Navbar />
          {/*card component*/}
          <div className='app__cards'>
            {
              CardData.map (
                (Card,i) => {
                  return (
                    <Cards
                    key = {i}
                    title = {Card.title}
                    color = {Card.color}
                    icon = {Card.icon}
                    />
                  )
                }
              )
            }
          </div>
          {/*requists component*/}
          <Requist />
          {/*popup component */}
          <Popup />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}