import { peopleApi } from "../../App";
import styles from "../Card/styles.module.css";

interface CardProps {
  person: peopleApi;
  idPerson: number;
}

export function Card({ person, idPerson }: CardProps) {
  return (
    <>
      <div className={styles.personName}>
        <img
          className={styles.personLogo}
          src={`./personagem/${idPerson}.png`}
        />

        <h1 className={styles.personBorder}>{person.name}</h1>

        <p>{person.birth_year}</p>
        <p>{person.gender}</p>
      </div>
    </>
  );
}
