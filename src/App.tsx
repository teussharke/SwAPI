import { useState, useEffect } from 'react'
import './App.css'
import { People } from './pages/Peoples'

const url = "https://swapi.dev/api/people/1/"

 export function App() {
    const [people, setPeople] = useState([]);
 

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
    

 }