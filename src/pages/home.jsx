import React from "react";
import HomeSlider from "../components/heroSlider";
import { Heart, MoveRight, ShoppingCartIcon } from "lucide-react";
export default function homePage() {
  return (
    <>
      <HomeSlider />
      <div className="px-35">
        <div className="flex  justify-between">
          <h1 className="text-2xl font-semibold">Curated Collections</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            View All Categories <MoveRight className="pt-1 " />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-full w-[330px]  pt-12">
            <div className="relative">
              <img
                className="rounded-lg bg-cover h-[350px] object-cover brightness-50 "
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="absolute bottom-0 p-5">
                <p className="text-white text-2xl font-bold ">Man</p>
                <p className="text-white text-2xl font-bold">142 items</p>
              </div>
            </div>
          </div>
          <div className="h-full w-[330px]  pt-12">
            <div className="relative">
              <img
                className="rounded-lg bg-cover h-[350px] object-cover brightness-50 "
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="absolute bottom-0 p-5">
                <p className="text-white text-2xl font-bold ">Man</p>
                <p className="text-white text-2xl font-bold">142 items</p>
              </div>
            </div>
          </div>
          <div className="h-full w-[330px]  pt-12">
            <div className="relative">
              <img
                className="rounded-lg bg-cover h-[350px] object-cover brightness-50 "
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="absolute bottom-0 p-5">
                <p className="text-white text-2xl font-bold ">Man</p>
                <p className="text-white text-2xl font-bold">142 items</p>
              </div>
            </div>
          </div>
          <div className="h-full w-[330px]  pt-12">
            <div className="relative">
              <img
                className="rounded-lg bg-cover h-[350px] object-cover brightness-50 "
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="absolute bottom-0 p-5">
                <p className="text-white text-2xl font-bold ">Man</p>
                <p className="text-white text-2xl font-bold">142 items</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Weekly Highlights
          </h2>
          <p className="text-gray-500 mt-3">
            Handpicked essentials that are defining the current season's trends.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow relative">
            <div className="relative h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1759667642661-97dcfb78e8a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                -20% OFF
              </span>
            </div>

            <div className="p-2">
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-lg">$32.00</div>
                  <div className="text-sm text-gray-400 line-through leading-[60%]">
                    $40.00
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-semibold text-lg">Midnight Heavy Tee</h3>

                  <p className="text-sm text-gray-500 mt-3">
                    The Core Collection
                  </p>
                  <div className="flex gap-1 mt-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-30 right-4 z-40">
              <div className="flex flex-col gap-1.5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Heart className="w-5 h-5"/></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><ShoppingCartIcon className="w-5 h-5"/></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
             <div className="bg-white rounded-lg overflow-hidden shadow relative">
            <div className="relative h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1759667642661-97dcfb78e8a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                -20% OFF
              </span>
            </div>

            <div className="p-2">
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-lg">$32.00</div>
                  <div className="text-sm text-gray-400 line-through leading-[60%]">
                    $40.00
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-semibold text-lg">Midnight Heavy Tee</h3>

                  <p className="text-sm text-gray-500 mt-3">
                    The Core Collection
                  </p>
                  <div className="flex gap-1 mt-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-30 right-4 z-40">
              <div className="flex flex-col gap-1.5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Heart className="w-5 h-5"/></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><ShoppingCartIcon className="w-5 h-5"/></div>
              </div>
            </div>
          </div>

            {/* Card 3 */}
             <div className="bg-white rounded-lg overflow-hidden shadow relative">
            <div className="relative h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1759667642661-97dcfb78e8a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                -20% OFF
              </span>
            </div>

            <div className="p-2">
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-lg">$32.00</div>
                  <div className="text-sm text-gray-400 line-through leading-[60%]">
                    $40.00
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-semibold text-lg">Midnight Heavy Tee</h3>

                  <p className="text-sm text-gray-500 mt-3">
                    The Core Collection
                  </p>
                  <div className="flex gap-1 mt-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-30 right-4 z-40">
              <div className="flex flex-col gap-1.5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Heart className="w-5 h-5"/></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><ShoppingCartIcon className="w-5 h-5"/></div>
              </div>
            </div>
          </div>

            {/* Card 4 */}
             <div className="bg-white rounded-lg overflow-hidden shadow relative">
            <div className="relative h-[380px]">
              <img
                src="https://images.unsplash.com/photo-1759667642661-97dcfb78e8a6?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover"
                alt=""
              />
              <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
                -20% OFF
              </span>
            </div>

            <div className="p-2">
              <div className="flex flex-row-reverse justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-lg">$32.00</div>
                  <div className="text-sm text-gray-400 line-through leading-[60%]">
                    $40.00
                  </div>
                </div>

                <div className="mt-2">
                  <h3 className="font-semibold text-lg">Midnight Heavy Tee</h3>

                  <p className="text-sm text-gray-500 mt-3">
                    The Core Collection
                  </p>
                  <div className="flex gap-1 mt-2">
                  <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-30 right-4 z-40">
              <div className="flex flex-col gap-1.5">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><Heart className="w-5 h-5"/></div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center"><ShoppingCartIcon className="w-5 h-5"/></div>
              </div>
            </div>
          </div>
        </div>
      </section>


    <section className="max-w-7xl mx-auto px-6 py-16">
  {/* Header */}
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-3xl font-bold text-gray-900">
      Styled By You
    </h2>
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
        Up to 50% off on selected items. Don&apos;t miss out on the biggest sale
        of the year.
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
        <h2 className="text-4xl font-bold text-gray-900">
          The Journal
        </h2>
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
