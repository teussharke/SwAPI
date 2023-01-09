import { useState, useEffect } from 'react'
import './App.css'

const url = 'https://swapi.dev/api/'

 export function App() {
    const [people, setPeople] = useState([])
    const [home, setHome] = useState([])

    // 1 - resgatando dados
    useEffect(async () => {
        const res = await fetch(url)
        const data = await res.json()

        setPeople(data.people)


    }, [])
  };





