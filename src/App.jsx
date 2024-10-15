import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalAgility, setTotalAgility] = useState(0);
  const [totalStrength, setTotalStrength] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighters) => {
    if (money >= fighters.price) {
      setTeam((prevItems) => [...prevItems, JSON.stringify(fighters)]);
      setMoney((preMoney) => preMoney - fighters.price);
      setTotalStrength((preStrength) => preStrength + fighters.strength);
      setTotalAgility((preAgility) => preAgility + fighters.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (currFighters) => {
    setTeam((prevItems2) => [...prevItems2].toSpliced(currFighters, 1));
    setTotalStrength((preStrength2) => preStrength2 - currFighters.strength);
    setTotalAgility((preAgility2) => preAgility2 - currFighters.agility);
    setMoney((preMoney2) => preMoney2 + currFighters.price);
  };

  return (
    <>
      <div>Money: {money} </div>
      <div>Team Strength: {totalStrength} </div>
      <div>Agility: {totalAgility} </div>
      <div>
        Team : {team.length === 0 ? <p>Pick some team members!</p> : team}
      </div>
      {zombieFighters.map((item, idx) => {
        return (
          <div key={idx}>
            <ul>
              <li>
                <img src={item.img}></img>
              </li>
              <li>name ={item.name}</li>
              <li>price ={item.price}</li>
              <li>strength ={item.strength}</li>
              <li>agility={item.agility}</li>
            </ul>
            <button onClick={() => handleAddFighter(item)}>Add</button>
            <button onClick={() => handleRemoveFighter(item)}>Remove</button>
          </div>
        );
      })}
      ;
    </>
  );
};

export default App;
