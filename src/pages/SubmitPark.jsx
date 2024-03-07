import { useState, useContext } from 'react';
import { WishlistContext } from '../components/WishlistContext';
import toast from "react-hot-toast";
import NavBar from "../components/NavBar";
import "../components/SubmitPark.css"


function SubmitPark() {
  const { setParks } = useContext(WishlistContext);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    location: "",
    description: "",
    visitors: ""
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
        description: "",
        visitors: ""
      });
      setParks(prevParks => [...prevParks, data]);
      toast.success('Your park has been added!')
    } catch (err) {
      toast.error(err.message)
    }
  };

  return(
    <>
      <div className="nav-bar-container">
        <h1 className="banner">Park Pal</h1>
        <NavBar />
      </div>
      <div className="submit-container">
        <h2>Submit a Park!</h2>
        <form className="new-park-form" onSubmit={handleFormSubmit} > 
          <input
            type="text"
            name="name"
            placeholder="Park name"
            value={formData.name}
            onChange={handleFormInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleFormInputChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Park location by state"
            value={formData.location}
            onChange={handleFormInputChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Park description (optional)"
            value={formData.description}
            onChange={handleFormInputChange}
          />
          <input
            type="text"
            name="visitors"
            placeholder="2023 Visitors (optional)"
            value={formData.visitors}
            onChange={handleFormInputChange}
          />
          <button type="submit">Add Park</button>
        </form>
      </div>
    </>
  )
}

export default SubmitPark;