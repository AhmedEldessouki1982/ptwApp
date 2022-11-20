import React from 'react';
import Cards from './components/cards/Cards';
import Navbar from './components/navbar/Navbar';
import { CardData } from './utils/CardsData';
import './app.scss';
import Requist from './components/requists/Requist';
import Popup from './components/Popup/Popup';


export default function App() {
  return (
    <>
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
    </>
  );
}