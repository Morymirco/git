import React, { useState } from "react";

const Home = () => {
  const [person, setperson] = useState({
    firstname: "john",
    lastname: "Doe",
    age: 18,
  });
  const [count, setcount] = useState(0);
  const [time, settime] = useState(0);
  const [tab, settab] = useState(["mory", "koulibaly"]);

  function handlechange() {
    settab([...tab, "amadou"]);
  }

  function handleplus() {
    setcount((c) => c + 3);
  }
  //   OBJET
  function increment() {
    setperson({ ...person, age: person.age + 1 });
  }
  //   Time
  function handletime() {
    setInterval(() => {
      settime((c) => {
        return c + 1;
      });
    }, 1000);
  }
  return (
    <div>
      <h1>Bienvenue sur la page Home</h1>
      <p>Compteur : {count}</p>
      <p>Clock : {time}</p>
      <button onClick={handleplus}>+</button>
      <button onClick={increment}>incrementer</button>
      <button onClick={handlechange}>incrementer</button>
      <button onClick={handletime}>Changer l'heure</button>
      <ul>
        {tab.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>

      <ul>
        <li>{person.firstname}</li>
        <li>{person.lastname}</li>
        <li>{person.age}</li>
      </ul>
    </div>
  );
};
// HOOK => jamais dans une condition ou une boucle , pas de retourne avant , il utilise l'ordre d'appel
export default Home;
