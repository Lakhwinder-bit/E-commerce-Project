import { useState } from "react";
import { filterProducts } from "../utils/filterProducts";

export default function useProductFilters(products, gender) {
  const [filters, setFilters] = useState({
    openFilter: null,
    minPrice: "",
    selectedSizes: [],
  });

  // 🔥 handlers
  const toggleFilter = (name) => {
    setFilters((prev) => ({
      ...prev,
      openFilter: prev.openFilter === name ? null : name,
    }));
  };

  const toggleSize = (size) => {
    setFilters((prev) => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(size)
        ? prev.selectedSizes.filter((s) => s !== size)
        : [...prev.selectedSizes, size],
    }));
  };

  const setMinPrice = (value) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: value,
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      openFilter: null,
      minPrice: "",
      selectedSizes: [],
    });
  };

  // ✅ filtered products
  const filteredProducts = filterProducts({
    products,
    gender,
    minPrice: filters.minPrice,
    selectedSizes: filters.selectedSizes,
  });

  return {
    filters,
    toggleFilter,
    toggleSize,
    setMinPrice,
    clearAllFilters,
    filteredProducts,
  };
}