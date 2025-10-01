import {useState,useEffect} from "react";
import axios from "axios";
import Person from "../components/Person";


export default function PlanetsPage() {
  const[data, setData] = useState(null);

  let urlStr = "https://swapi.info/api/planets"

  useEffect(()=>{
    async function getData() {
      try {
        let res = await axios.get(urlStr);
        res.data.length = 10;
            
      } catch (err) {
        console.error(err.message);
        
      }
      
    }
  })







  return <h1>Planets Page</h1>;
}