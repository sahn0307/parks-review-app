import NavBar from "../components/NavBar";
import { useState } from 'react';

function SubmitPark() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    description: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleFormInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch ("http://localhost:3000/nationalParks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!resp.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await resp.json();
      setSubmitted(true);
      setFormData({
        name: "",
        image: "",
        location: "",
        description: ""
      });
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <>
      <NavBar />
      <h1>Submit a Park!</h1>
      {submitted && <p>Form submitted successfully!</p>}
      <form className="new-park=form" onSubmit={handleFormSubmit} > 
        <input
          type="text"
          name="name"
          placeholder="Park name"
          value={formData.name}
          onChange={handleFormInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleFormInputChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Park location by state"
          value={formData.location}
          onChange={handleFormInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Park description (optional)"
          value={formData.description}
          onChange={handleFormInputChange}
        />
        <button type="submit">Add Park</button>
      </form>
    </>
  )
}

export default SubmitPark;