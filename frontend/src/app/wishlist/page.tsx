"use client";

import React, { useState } from "react";
import { Heart, ShoppingCart, ArrowRight, HeartCrack } from "lucide-react";

// Mock Data
const initialWishlistItems = [
  {
    id: 1,
    name: "Strawberry Milk Carton Plush",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "Fluffy Bunny Backpack",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1590845947376-2638caa89309?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "Pastel Cloud Cushion",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    name: "Boba Tea Plushie",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1625860646011-2096898b82ab?auto=format&fit=crop&q=80&w=400",
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div 
      className="min-h-screen bg-pink-50/50 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-500" 
      style={{ fontFamily: '"Nunito", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl text-gray-800 font-extrabold tracking-tight mb-4">
            Your Wishlist
          </h1>
          <p className="text-pink-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            All your favorite plushies and cute finds in one place!
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 flex flex-col relative"
              >
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-7 right-7 z-10 p-2.5 bg-white backdrop-blur-sm rounded-full text-pink-500 hover:bg-pink-50 shadow-md transition-all duration-300 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                  aria-label="Remove from Wishlist"
                  title="Remove from Wishlist"
                >
                  <Heart className="w-5 h-5 fill-pink-500" />
                </button>

                {/* Product Image */}
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-pink-50">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                  />
                  {/* Soft overlay on hover */}
                  <div className="absolute inset-0 bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Product Details */}
                <div className="flex flex-col flex-grow px-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-xl font-extrabold text-pink-500 mb-6">
                    {item.price}
                  </p>
                  
                  {/* Add to Cart */}
                  <div className="mt-auto pt-4 border-t border-pink-50">
                    <button className="w-full py-3.5 px-4 bg-pink-500 hover:bg-pink-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-300 active:scale-95">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-24 px-4 text-center bg-white rounded-[3rem] shadow-sm border border-pink-100 max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-lg">
            <div className="w-28 h-28 bg-pink-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <HeartCrack className="w-14 h-14 text-pink-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
              Looks like you haven't found your perfect cute companion yet! Let's fill this space with some magic.
            </p>
            <button className="group py-4 px-8 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-extrabold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 active:translate-y-0">
              Explore Products
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
