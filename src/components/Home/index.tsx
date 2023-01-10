import styles from "./styles.module.css";
import { useState, useEffect } from "react";

const url = "https://swapi.dev/api/people/1/";

interface peopleApi {
  name: string;
  height: number;
  mass: number;
  gender: string;
}

export function Home() {
  const [people, setPeople] = useState<peopleApi>({} as peopleApi);

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

  return (
    <div className={styles.card}>
      <h1>Personagens</h1>
      <p>Nome:{people.name} </p>
      <p>Altura:{people.height} </p>
      <p>Peso:{people.mass} </p>
      <p>Gênero:{people.gender} </p>
    </div>
  );
}
