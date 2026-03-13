
import { Heart, HeartIcon } from 'lucide-react'
import React from 'react'
import ProductCard from '../components/productCard'
import { Product } from '/src/data/product.jsx'
import FilterBar from "../components/filterBar";
import useProductFilters from "../hooks/useProductFilter";

export default function Kides() {
  const {
    filters,
    toggleFilter,
    toggleSize,
    setMinPrice,
    clearAllFilters,
    filteredProducts,
  } = useProductFilters(Product, "kids");

  return (
    <>
    <section className="mx-auto md:p-5 p-3 bg-[#fff7ed]">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
      

      <h1 className="text-xl md:text-4xl font-semibold text-gray-900 mb-2 mt-5">
       Kids Collection
      </h1>

      <p className="text-gray-600 max-w-xl text-sm md:text-md">
        Soft, comfortable styles perfect for everyday play.
      </p>
    </div>



  </div>
</section>



<section className=" mx-auto md:p-5 p-3 bg-[#fff7ed]">
        <FilterBar
            openFilter={filters.openFilter}
            toggleFilter={toggleFilter}
            minPrice={filters.minPrice}
            setMinPrice={setMinPrice}
            selectedSizes={filters.selectedSizes}
            toggleSize={toggleSize}
            clearAllFilters={clearAllFilters}
            totalProducts={filteredProducts.length}
          />



  {/* PRODUCT GRID */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">

    {/* CARD 1 */}
 {filteredProducts.length > 0 ? (
 
 filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
) : (
     <div className="col-span-full text-center py-10">
      <p className="text-gray-600 text-lg font-medium">
        No products found
      </p>
      <p className="text-gray-400 text-sm mt-1">
        Try changing your filters.
      </p>
    </div>
)
}
    

  </div>
</section>


    </>
  )
}



import { Link } from "react-router-dom";




