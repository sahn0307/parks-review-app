import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";

function Home() {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/nationalParks")
    .then(resp => resp.json())
    .then(data => setParks(data))
    .catch(err => console.log(err))
  }, []);

  

  return(
    <>
      <NavBar />
      <h1>This is the Homepage</h1>
    </>
  )

}


export default Home;