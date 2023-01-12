import "./global.css";
import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import styles from "./components/Card/styles.module.css";
import axios from "axios";

const url = "https://swapi.dev/api/people/";

export interface peopleApi {
  name: string;
  height: number;
  mass: number;
  gender: string;
  birth_year: string;
}

export function App() {
  const [people, setPeople] = useState<peopleApi[]>([]);

  // 1 - resgatando dados

  async function fetchData() {
    const res = await (await (axios.get(url).then())).data;

    setPeople(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(people);

  return (
    <div className={styles.app}>
      <div className="logo">
        <img src={`./header/stlogo.png`} />
      </div>
      <div className={styles.mapStyle}>
        {people.map((people, i) => {
          return <Card key={i} person={people} idPerson={i} />;
        })
        }
      </div>
    </div>
  );
}
