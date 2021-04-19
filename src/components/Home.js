import React from 'react';
import PropTypes from 'prop-types';
import reviewStar from "./../img/review-star.png"


function Home(props){
  return (
    <React.Fragment>
      <hr/>
      <p>{props.lodgingType}
      <h3>{props.name}</h3>
      {props.image}<br></br>
      {props.description}<br></br>
      <img src={reviewStar} alt="Star" width="15px;"></img>
      <strong>{props.reviews}</strong><br></br>
      <strong>{props.price}</strong>/night</p>
    </React.Fragment>
  );
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  lodgingType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

export default Home;