import React from 'react'
import CartItem from './CartItem.js';
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout the epic destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                        <CartItem 
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                              <CartItem 
                            src="images/img-2.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Adventure"
                            path="/services"
                        />
                        
                </ul>
                <ul className='cards__items'>
                        <CartItem 
                            src="images/img-1.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                              <CartItem 
                            src="images/img-3.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Adventure"
                            path="/services"
                        />
                           <CartItem 
                            src="images/img-8.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                              <CartItem 
                            src="images/img-5.jpg"
                            text="Travel through the Island of Bali in a Private Cruise"
                            label="Adventure"
                            path="/services"
                        />
                        
                        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards