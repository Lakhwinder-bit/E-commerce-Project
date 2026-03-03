
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
    <section className="mx-auto px-10 py-10 ">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

    {/* LEFT CONTENT */}
    <div>
      

      <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
       Kids Collection
      </h1>

      <p className="text-gray-600 max-w-xl">
        Soft, comfortable styles perfect for everyday play.
      </p>
    </div>



  </div>
</section>



<section className=" mx-auto px-10 py-10">
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
 {filteredProducts.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
    

  </div>
</section>


    </>
  )
}