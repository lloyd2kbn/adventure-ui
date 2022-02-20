import React from 'react'
import CartItem from './CartItem.js';
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout the epic destinations in the country</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                        <CartItem 
                            src="images/hanoi.jpg"
                            text="Explore tourist places Ha Noi"
                            label="Tourist"
                            path="/tours"
                            introduce="Introduction to Hanoi tourism - thousand years of civilization. ... The capital land is home to the most monuments in Vietnam, with 3840 monuments and 1164 national monuments. Hanoi also owns many 'UNESCO titles' such as: Ca Tru, Mother Goddess Worship, stele of Doctor Van Mieu Thang Long, tug of war..."
                        />
                              <CartItem 
                            src="images/saigon.jpg"
                            text="Explore tourist places Thanh Pho Ho Chi Minh"
                            label="Tourist"
                            path="/tours"
                            introduce="Traveling to Ho Chi Minh City means you come to the city located in the middle of the rich South region, adjacent to the South of the Southeast and the North edge of the Southwest. It is the largest and most populous city in Vietnam. This place is a major traffic hub, connecting with other provinces in the region and is the international gateway of the region."
                        />
                        
                </ul>
                
                <ul className='cards__items'>
                        <CartItem 
                            src="images/sapa.jpg"
                            text="Explore tourist places Sa Pa"
                            label="Tourist"
                            path="/tours"
                            introduce="Sa Pa is a tourist destination about 30 km from the center of Lao Cai city. Located at an average altitude of 1500 - 1800 m above sea level, Sapa Town is always immersed in floating clouds, creating a magical and strange picture. ... Hoang Lien Son National Forest has 136 species of birds, 56 species of mammals, and 553 species of insects."
                        />
                              <CartItem 
                            src="images/caobang.jpg"
                            text="Explore tourist places Cao Bang"
                            label="Tourist"
                            path="/tours"
                            introduce="Cao Bang tourism must immediately mention Ban Gioc Cao Bang waterfall. You will be ecstatic at the beauty of Ban Gioc Cao Bang waterfall - one of the most beautiful waterfalls in Vietnam. Ban Gioc Waterfall is located in Dam Thuy commune, Trung Khanh district, Cao Bang province and is the natural boundary between Vietnam and China."
                        />
                           <CartItem 
                            src="images/nhatrang.jpg"
                            text="Explore tourist places Nha Trang"
                            label="Tourist"
                            path="/tours"
                            introduce="Nha Trang is a coastal city and the center of politics, economy, culture, science, technology and tourism of Khanh Hoa province. Nha Trang is known as the pearl of the East Sea, the Blue Pearl because of its natural value, beauty as well as its climate. 1. ... Nha Trang city is located in the center of Khanh Hoa province"
                        />
                              <CartItem 
                            src="images/danang.jpg"
                            text="Explore tourist places Da Nang"
                            label="Tourist"
                            path="/tours"
                            introduce="With its position as one of the three major tourist centers on the tourist map of Vietnam, Da Nang is a beautiful, gentle and hospitable coastal city, where you can easily reach it by road or air. and waterways. A geographical and historical landmark, convenient transit point to world cultural heritages such as Hue, My Son, Hoi An and Cu Lao Cham world biosphere reserve. Over the years, Da Nang is increasingly asserting itself as an attractive and ideal destination for friends and tourists from all over the world. You will go from surprise to surprise in the journey to discover cultural, historical, scenic relics, Hai Van Pass - The First Heroic Universe, Ngu Hanh Son Legendary Boat"
                        />
                        
                        
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards