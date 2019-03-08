import React from "react";

const GameCard = () => {
  return (
    <div className="ui card">
      <div className="image">
        <span className="ui green ribbon label">$32.99</span>
        <img
          src="http://ineasysteps.com/wp-content/uploads/2015/12/9781840786477_web-246x300.png"
          alt="Game cover"
        />
      </div>
      <div className="content" />
      <a href="" className="header">
        Quadropolis
      </a>
      <div className="meta">
        <i className="icon users" />
        2-4&nbsp;
        <i className="icon wait" />
        60 min
      </div>
    </div>
  );
};
export default GameCard;
