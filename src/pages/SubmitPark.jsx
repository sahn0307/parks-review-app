import NavBar from "../components/NavBar";
import { useState } from 'react';

function SubmitPark() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   image: "",
  //   location: "",
  //   description: ""
  // });
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const resp = await fetch ("http://localhost:3000/nationalParks", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await resp.json();

  //   }
  // }

  return(
    <>
      <NavBar />
      <h1>Submit a Park!</h1>
      <form className="new-park=form" > 
        <input
          type="text"
          name="name"
          placeholder="Park name"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          type="text"
          name="location"
          placeholder="Park location (State)"
        />
        <input
          type="text"
          name="description"
          placeholder="Park description (optional)"
        />
        <button type="submit">Add Park</button>
      </form>
    </>
  )
}

export default SubmitPark;