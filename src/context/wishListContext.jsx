import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  const [wishlist, setWishlist] = useState([]);

  // toggle like
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // check if liked
  const isWishlisted = (id) => {
    return wishlist.includes(id);
  };

  // 🔥 clear all wishlist
  const clearlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
        clearlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);