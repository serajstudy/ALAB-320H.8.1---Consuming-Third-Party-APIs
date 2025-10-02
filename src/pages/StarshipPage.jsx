import { useState, useEffect } from "react";
import axios from "axios";
import Person from "../components/Person";



export default function StarshipPage() {
  const [data, setData] = useState(null);

  let urlStr = "https://swapi.info/api/starships";


  useEffect(()=>{
    async function getData() {

      try {

        let res = await axios.get(urlStr);
        res.data.length = 11;
        setData(res.data);
        
      } catch (err) {
        console.error(err.message);
        
      }
      
    }
    getData()

    },[]);

    let loading=()=>{
      return <h1>Loading</h1>;
    };

    let loaded =()=>data.map ((per, i)=>{
      return <person key={i} {...per} />;

    }) 

  return  data ? <div className="container">{loaded()}</div> : loading();
}