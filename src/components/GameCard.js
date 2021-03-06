import React from "react";
import PropTypes from "prop-types";
const GameCard = ({ game }) => {
  return (
    <div className="ui card">
      <div className="image">
        <span className="ui green ribbon label">{game.price}</span>
        <img src={game.thumbnail} alt="Quadropolis" />
      </div>
      <div className="content" />
      <a href="game" className="header">
        {game.name}
      </a>
      <div className="meta">
        <i className="icon users" />
        {game.players}&nbsp;
        <i className="icon wait" />
        {game.duration}min
      </div>
    </div>
  );
};

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired
  }).isRequired
};
export default GameCard;
