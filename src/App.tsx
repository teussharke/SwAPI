import { useState, useEffect } from "react";
import "./App.css";

const url = "https://swapi.dev/api/people/1/";


export function App() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [height, setHeight] = useState(0);
  const [mass, setMass] = useState(0);
  const [gender, setGender] = useState("");
  const [films, setFilms] = useState("");

  // 1 - resgatando dados
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json();

      setPeople(data);
    }
    fetchData();
  }, []);

  console.log(people);

  return <div className="App"></div>;
}
