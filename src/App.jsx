import React, { useState } from "react";
import "./index.css";
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

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam((prevItems) => [...prevItems, fighter]);
      setMoney((preMoney) => preMoney - fighter.price);
      setTotalStrength((preStrength) => preStrength + fighter.strength);
      setTotalAgility((preAgility) => preAgility + fighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (member) => {
    setTeam((prevItems) =>
      prevItems.filter((fighter) => fighter.name !== member.name)
    );
    setTotalStrength((preStrength) => preStrength - member.strength);
    setTotalAgility((preAgility) => preAgility - member.agility);
    setMoney((preMoney) => preMoney + member.price);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <div>Money: {money} </div>
      <div>Team Strength: {totalStrength} </div>
      <div>Agility: {totalAgility} </div>
      <div>
        <h2>Team</h2>
        <div className="member">
          {team.length === 0 ? (
            <p>Pick some team members!</p>
          ) : (
            team.map((member, idx) => {
              return (
                <div key={idx}>
                  <ul>
                    <li>
                      <img src={member.img}></img>
                    </li>
                    <li>name ={member.name}</li>
                    <li>price ={member.price}</li>
                    <li>strength ={member.strength}</li>
                    <li>agility={member.agility}</li>
                  </ul>
                  <button
                    className="buttons"
                    onClick={() => handleRemoveFighter(member)}
                  >
                    Remove
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
      <div>
        <h3>Fighters</h3>
        <section>
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
                <button
                  className="buttons"
                  onClick={() => handleAddFighter(item)}
                >
                  Add
                </button>
              </div>
            );
          })}
        </section>
      </div>
      ;
    </>
  );
};

export default App;
