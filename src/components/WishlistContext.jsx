import { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [parks, setParks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/nationalParks")
            .then(resp => resp.json())
            .then(data => setParks(data))
            .catch(err => toast.error(err.message))
    }, []);

    const addToWishlist = (park) => {
        setWishlist([park, ...wishlist]);
        toast.success('Added to Wishlist')
    };

    const removeFromWishlist = (parkId) => {
        setWishlist(wishlist.filter(park => park.id !== parkId));
        toast.success('Removed from Wishlist')
    };

    return (
        <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, parks, setParks }}>
            {children}
        </WishlistContext.Provider>
    )
}

export { WishlistContext, WishlistProvider }