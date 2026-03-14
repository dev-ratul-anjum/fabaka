"use client";

import React, { useState } from 'react';
import { 
  User, 
  Phone, 
  MapPin, 
  Building, 
  MapPinned, 
  Banknote, 
  Smartphone,
  ShieldCheck,
  Lock
} from 'lucide-react';

const CHECKOUT_PRODUCTS = [
  {
    id: 1,
    name: "Strawberry Bunny Plush",
    price: 24.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    name: "Sleepy Bear Backpack",
    price: 34.99,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=400"
  }
];

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const subtotal = CHECKOUT_PRODUCTS.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-pink-50/30 font-nunito py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">Checkout</h1>
          <p className="text-gray-500 mt-2 font-medium">Please fill in your details to complete your order</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side: Forms */}
          <div className="flex-1 space-y-8">
            {/* Shipping Information */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-pink-400" />
                Shipping Information
              </h2>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Mia Thermopolis" 
                        className="pl-10 w-full bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="pl-10 w-full bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 block">Address</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MapPinned className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea 
                      rows={3}
                      placeholder="123 Plushie Lane, Suite 100" 
                      className="pl-10 w-full bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all font-medium resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">City</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Fluffytown" 
                        className="pl-10 w-full bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 block">Postal Code</label>
                    <input 
                      type="text" 
                      placeholder="10001" 
                      className="w-full bg-pink-50/50 border border-pink-100 text-gray-800 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white transition-all font-medium"
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-pink-400" />
                Payment Method
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setPaymentMethod('cod')}
                  className={`cursor-pointer border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'cod' ? 'border-pink-400 bg-pink-50' : 'border-gray-100 hover:border-pink-200 bg-white'}`}
                >
                  <Banknote className={`w-8 h-8 ${paymentMethod === 'cod' ? 'text-pink-500' : 'text-gray-400'}`} />
                  <span className={`font-bold ${paymentMethod === 'cod' ? 'text-pink-600' : 'text-gray-600'}`}>Cash on Delivery</span>
                </div>
                
                <div 
                  onClick={() => setPaymentMethod('mobile')}
                  className={`cursor-pointer border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 transition-all ${paymentMethod === 'mobile' ? 'border-pink-400 bg-pink-50' : 'border-gray-100 hover:border-pink-200 bg-white'}`}
                >
                  <Smartphone className={`w-8 h-8 ${paymentMethod === 'mobile' ? 'text-pink-500' : 'text-gray-400'}`} />
                  <span className={`font-bold ${paymentMethod === 'mobile' ? 'text-pink-600' : 'text-gray-600'}`}>Mobile Banking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Order Summary */}
          <div className="lg:w-[450px]">
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-pink-100 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Lock className="w-5 h-5 text-gray-500" />
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                {CHECKOUT_PRODUCTS.map((product) => (
                  <div key={product.id} className="flex gap-4 items-center">
                    <div className="w-20 h-20 bg-pink-50 rounded-2xl overflow-hidden relative border border-pink-100 shrink-0">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-400 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white shadow-sm z-10 hidden">
                        {/* Alternative placement for quantity badge if not fully visible, using standard absolute positioning now */}
                      </div>
                      <div className="absolute top-1 right-1 bg-pink-400 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center opacity-90">
                        {product.quantity}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-gray-800 line-clamp-2">{product.name}</h3>
                      <p className="text-pink-500 font-extrabold mt-1">${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-dashed border-gray-200 space-y-4">
                <div className="flex justify-between items-center text-gray-600 font-medium pb-2 border-b border-gray-50">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium pb-2 border-b border-gray-50">
                  <span>Shipping</span>
                  <span className="font-bold text-gray-800">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-lg font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-extrabold text-pink-500">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-pink-400 hover:bg-pink-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2">
                Place Order
              </button>
              
              <p className="text-center text-xs text-gray-400 font-medium mt-4">
                By placing your order you agree to our Terms & Conditions, privacy and returns policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
