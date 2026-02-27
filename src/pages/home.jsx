import React from "react";
import HomeSlider from "../components/heroSlider";
import ProductCard from "../components/productCard";
import { Product } from "../data/Product.jsx";
import { Heart, MoveRight, ShoppingCartIcon } from "lucide-react";
export default function homePage() {
  return (
    <>
      <HomeSlider />
      <div className="px-35 mt-10">
        <div className="flex  justify-between">
          <h1 className="text-2xl font-semibold">Shop by Category</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            View All Categories <MoveRight className="pt-1 " />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
          {Product.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>



      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Styled By You</h2>
          <span className="text-sm text-gray-600 border px-3 py-1 rounded-md">
            @UrbanThread
          </span>
        </div>

        {/* Main Flex */}
        <div className="flex flex-col md:flex-row gap-3">
          {/* LEFT — 60% */}
          <div className="md:w-[50%] w-full">
            <div className="relative h-[495px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600"
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute bottom-4 left-4 text-white text-sm font-medium">
                @jason_st
              </span>
            </div>
          </div>

          {/* RIGHT — 40% */}
          <div className="md:w-[50%] w-full flex flex-col gap-3 h-[480px]">
            {/* Top Row */}
            <div className="flex gap-3 h-1/2">
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=600"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex gap-3 h-1/2">
              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1700056214664-4bd97cec12b4?w=600"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <div className="w-1/2 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 relative overflow-hidden">
        <div className="rounded-2xl overflow-hidden bg-black relative">
          {/* Background */}
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            alt=""
          />

          {/* Content */}
          <div className="relative z-10 p-10 text-white max-w-xl">
            <span className="text-xs uppercase tracking-widest text-gray-300">
              Limited Time Event
            </span>

            <h2 className="text-4xl font-bold mt-3 leading-tight">
              End of Season <br /> Clearance Sale
            </h2>

            <p className="text-gray-200 mt-4">
              Up to 50% off on selected items. Don&apos;t miss out on the
              biggest sale of the year.
            </p>

            <div className="flex gap-8 mt-8">
              <div>
                <div className="text-4xl font-bold">02</div>
                <span className="text-sm text-gray-300">Days</span>
              </div>
              <div>
                <div className="text-4xl font-bold">14</div>
                <span className="text-sm text-gray-300">Hours</span>
              </div>
              <div>
                <div className="text-4xl font-bold">35</div>
                <span className="text-sm text-gray-300">Mins</span>
              </div>
            </div>

            <button className="mt-8 bg-white text-black px-6 py-3 rounded-md font-medium">
              Shop The Sale
            </button>
          </div>

          {/* MOVING IMAGES */}
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {/* DUPLICATE IMAGES */}
              <img src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600" />
              <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600" />
              <img src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=600" />
              <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600" />

              <img src="https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?w=600" />
              <img src="https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=600" />
              <img src="https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=600" />
              <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">The Journal</h2>
          <a href="#" className="text-sm font-medium text-gray-900">
            Read All Stories
          </a>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800"
              alt=""
              className="w-full h-[260px] object-cover rounded-xl"
            />
            <span className="block text-xs text-gray-500 mt-4 uppercase">
              Culture
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Street Style Trends from Tokyo Fashion Week
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Discover what the trendsetters are wearing on the streets of
              Shibuya this season.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800"
              alt=""
              className="w-full h-[260px] object-cover rounded-xl"
            />
            <span className="block text-xs text-gray-500 mt-4 uppercase">
              Behind the Scenes
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Designing the Fall 2024 Collection
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              An exclusive look into our design process and material selection.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800"
              alt=""
              className="w-full h-[260px] object-cover rounded-xl"
            />
            <span className="block text-xs text-gray-500 mt-4 uppercase">
              Sustainability
            </span>
            <h3 className="text-xl font-semibold mt-2">
              Our Commitment to Eco-Friendly Fashion
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              How we’re reducing our carbon footprint one garment at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
