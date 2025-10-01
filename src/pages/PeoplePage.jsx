import { useState, useEffect } from "react";
import axios from "axios";
import Person from "../components/Person";
// import apiService from "../utilities/apiService.mjs";

export default function PeoplePage() {
  const [data, setData] = useState(null);

  let urlStr = "https://swapi.info/api/people";

  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get(urlStr);

        res.data.length = 10;

        setData(res.data);
      } catch (err) {
        console.error(err.message);
      }
    }

    getData();
  }, []);

  let loading = () => {
    return <h1>Loading...</h1>;
  };

  let loaded = () => data.map((per, i) => {
    return <Person key={i} {...per} />;
  });

  return data ? <div className="container">{loaded()}</div> : loading();
}