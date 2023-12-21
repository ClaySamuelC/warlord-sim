import { useState } from "react";
import "./App.css";

function App() {
  const [resources, setResources] = useState({
    laborers: 150,
    gold: 1000,
    food: 1000,
    wood: 100,
    iron: 80,
  });

  const [villages, setVillages] = useState([
    {
      name: 'Fortville',
      output: {food: 100},
      defense: 500,
    },
    {
      name: 'Ironmont',
      output: {iron: 60},
      defense: 90,
    }
  ]);

  const [armies, setArmies] = useState([
    {
      name: 'First Division',
      size: 50,
      location: 'home',
      supplies: {
        food: 100,
        wood: 20,
        iron: 10,
      },
    },
    {
      name: 'Second Division',
      size: 30,
      location: 'home',
      supplies: {
        food: 60,
        wood: 30,
        iron: 20,
      },
    }
  ])
  
  const spendResources = (cost) => {
    const payload = {...resources};
  
    for (const [resource, amount] of Object.entries(cost)) {
      if (resources[resource] > amount) {
        console.log("Not enough resources");
        return;
      } else {
        payload[resource] -= amount;
      }
    }
  
    setResources(payload);
  };

  return (
    <div className="App">
      <VillageTracker villages={villages} />
      <p>Warlord Sim</p>
      <ResourceTracker resources={resources} />
      <ArmyTracker armies={armies}/>
    </div>
  );
}

function VillageTracker({villages}) {
  return (
    <div className="Villages">
      <p>Villages</p>
      {villages.map((village, i) => {
        return (
          <Village key={i} data={village} />
        )
      })}
    </div>
  )
}

function Village({data}) {
  return (
    <div className="Village">
      <p>{data.name}</p>
      <p>Defense: {data.defense}</p>
    </div>
  )
}

function ArmyTracker({armies}) {
  return (
    <div className="Reserve-Armies">
      <p>Armies</p>
      {armies.map((army, i) => {
        return (
          <Army key={i} data={army} />
        )
      })}
    </div>
  );
}

function Army({data}) {
  return (
    <div className="Army">
      <p className="Army-Name">{data.name}</p>
      <p>Army Size: {data.size}</p>
      <p>Supplies:</p>
      <ul className="Army-Resources">
        {Object.entries(data.supplies).map(([name, amount], i) => {
          return (
            <li key={i}>
              {name}: {amount}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function ResourceTracker({resources}) {
  return (
    <ul className="Resource-Tracker">
      {Object.entries(resources).map(([name, amount], i) => {
        return (<li key={i}>{name}: {amount}</li>)
      })}
    </ul>
  )
}

export default App;
