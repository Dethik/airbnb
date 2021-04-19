import React from 'react';
import Home from "./Home";
import dome from "./../img/dome.jpg"
import fancy from "./../img/fancy-house.jpg"
import fancyGuest from "./../img/fancy-guest-house.jpg"

const masterHomeList = [
  {
    lodgingType: "Entire House",
    name: "Fancy House",
    image: <img src={fancy} width="200px"></img>,
    description: "4 guests, 2 bedrooms, 2 beds, 1.5 bath",
    reviews: "4.72 stars (45 reviews)",
    price: 154
  },
  {
    lodgingType: "Dome House",
    name: "Dome Sweet Dome",
    image: <img src={dome} width="200px"></img>,
    description: "3 guests, 2 bedrooms, 2 beds, 1 bath",
    reviews: "4.93 stars (201 reviews)",
    price: 1538
  },
  {
    lodgingType: "Entire guesthouse",
    name: "Fancy Guesthouse I'm rich",
    image: <img src={fancyGuest} width="200px"></img>,
    description: "4 guests, 1 bedroom, 2 beds, 1 beds",
    reviews: "5.0 stars (132 reviews)",
    price: 118
  }
];

function HomeList(){
  return (
    <React.Fragment>
      {masterHomeList.map((home, index) =>
      <Home
      lodgingType={home.lodgingType}
      image={home.image}
      name={home.name}
      description= {home.description}
      reviews= {home.reviews}
      price= {home.price}
      />
      )}
    </React.Fragment>
  );
}

export default HomeList;