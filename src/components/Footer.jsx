import { Facebook, Instagram, Youtube } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
    <>
<footer className="bg-[#fef2e4]">

  {/* TOP SECTION */}
  <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-5 gap-10">

    {/* BRAND */}
    <div className="lg:col-span-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
          <span className="text-teal-600 text-xl font-bold">★</span>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Ludhiana Hub
        </h2>
      </div>

      <p className="text-gray-500 text-sm max-w-md">
        Contemporary fashion, premium fabrics and everyday essentials.
      </p>
    </div>

    {/* SHOP */}
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Shop</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>New arrivals</li>
        <li>Best sellers</li>
        <li>Men</li>
        <li>Women</li>
      </ul>
    </div>

    {/* COMPANY */}
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>About</li>
        <li>Careers</li>
        <li>Store locator</li>
      </ul>
    </div>

    {/* HELP */}
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Help</h3>
      <ul className="space-y-2 text-sm text-gray-500">
        <li>Support</li>
        <li>Shipping & returns</li>
        <li>Size guide</li>
      </ul>
    </div>

  </div>

  {/* DIVIDER */}
  <div className=""></div>

  {/* BOTTOM BAR */}
  <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

    {/* LEFT */}
    <div className="flex gap-4 text-sm text-gray-500">
      <span>Privacy policy</span>
      <span>Terms</span>
      <span>Cookies</span>
    </div>

    {/* RIGHT */}
    <div className="flex items-center gap-4 text-gray-500">
      <span className="w-8 h-8 border rounded-full flex items-center justify-center">
        <Instagram/>
      </span>
      <span className="w-8 h-8 border rounded-full flex items-center justify-center">
        <Facebook/>
      </span>
      <span className="w-8 h-8 border rounded-full flex items-center justify-center">
        <Youtube/>
      </span>
    </div>

  </div>

  <div className="text-center text-xs text-gray-400 pb-6">
    © 2025 Ludhiana Hub. All rights reserved.
  </div>

</footer>





    </>
  )
}
