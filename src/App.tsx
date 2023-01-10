import { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./components/Home";



interface peopleAPI{
  name: string;
  height: number;
  mass: number;
  gender: string;
 
}

export function App() {
  
  return (
    <Home />
  )
}
