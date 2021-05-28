import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
    <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items" >
              <CardItem 
               src="images/4.jpg"
               text="Explore the hidden waterfall"
               label="Advanture"
               path="/services"
              />
                <CardItem 
               src="images/9.jpg"
               text="Travel through the Islands of Bali in a Private Cruise"
               label="Luxury"
               path="/services"
              />
              </ul>
              <ul className="cards__items" >
                <CardItem 
               src="images/7.jpg"
               text="6 of the most epic drives in the world"
               label="Advanture"
               path="/services"
              />
                <CardItem 
               src="images/10.jpg"
               text="Explore Riviera Maya with savings up to 25% "
               label="Advanture"
               path="/services"
              />
                 <CardItem 
               src="images/5.jpg"
               text="The whole family can vaction like a rock star at Hard Rock Park"
               label="Advanture"
               path="/services"
              />
            </ul>
        </div>
        </div>
    </div>
    );
}

export default Cards;