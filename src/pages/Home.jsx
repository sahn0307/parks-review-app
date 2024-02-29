import { useEffect } from "react";

function Home() {
  //const [parks, setParks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/nationalParks")
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }, []);

  

}


export default Home;