import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleWishlist = (id) => {
    setWishlistIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const isWishlisted = (id) => wishlistIds.includes(id);

  // ✅ FIXED CLEAR
  const clearlist = () => {
    setWishlistIds([]);
  };

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  return (
    <WishlistContext.Provider
      value={{ wishlistIds, toggleWishlist, isWishlisted, clearlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);