import { createContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [parks, setParks] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3000/nationalParks")
    .then(resp => resp.json())
    .then(data => setParks(data))
    .catch(err => console.log(err))
  }, []);

  const addToWishlist = (park) => {
    setWishlist([park, ...wishlist]);
  };

  const removeFromWishlist = (parkId) => {
    setWishlist(wishlist.filter(park => park.id !== parkId));
  };

  return(
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, parks }}>
      {children}
    </WishlistContext.Provider>
  )
}

export { WishlistContext, WishlistProvider }