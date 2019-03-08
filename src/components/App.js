import React from "react";
import GamesList from "./GamesList";
const games = [
  {
    _id: 1,
    name: "Quadropolis",
    thumbnail:
      "http://www.gioconomicon.net/images/stories/scatole//QuadropolisCover.jpg",
    price: 32.99,
    players: "2-4",
    duration: 60
  },
  {
    _id: 2,
    name: "Five Tribes",
    thumbnail:
      "https://target.scene7.com/is/image/Target/GUEST_0870deb7-dd18-4dc8-a916-cc48ea7cef18?wid=488&hei=488&fmt=pjpeg",
    price: 51.0,
    players: "2-4",
    duration: 80
  },
  {
    _id: 3,
    name: "Roll for the Galaxy",
    thumbnail:
      "https://www.planetongames.com/21860-large_default/roll-for-the-galaxy.jpg",
    price: 22.99,
    players: "2-5",
    duration: 45
  }
];
const App = () => {
  return (
    <ul className="container">
      <GamesList games={games} />
    </ul>
  );
};

export default App;
