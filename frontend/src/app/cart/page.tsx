import React from 'react';
import {
  Trash2,
  Minus,
  Plus,
  ChevronRight,
  ShieldCheck,
  Truck,
  ArrowRight,
  ShoppingBag
} from 'lucide-react';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      title: "Dino Mate Backpack",
      price: 28.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "Green"
    },
    {
      id: 2,
      title: "Unicorn Dream",
      price: 34.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: "Pink"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-gray-800 selection:bg-[#FFD6E0]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
      `}} />

      <main className="container mx-auto px-4 lg:px-8 py-8 md:py-12 max-w-7xl">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-8 sm:mb-10">
          <a href="/" className="hover:text-[#FF8FAB] transition-colors">Home</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <span className="text-gray-800">Your Cart</span>
        </nav>

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight leading-tight flex items-center gap-4">
            <ShoppingBag className="text-[#FF8FAB]" size={40} strokeWidth={2.5} />
            Your Cart
            <span className="text-[#FF8FAB] bg-[#FFD6E0]/40 px-3 py-1 rounded-full text-2xl ml-2">3</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Cart Items List */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-[#FFD6E0]/40 space-y-6">
              
              <div className="hidden sm:grid grid-cols-12 gap-4 pb-4 border-b border-[#FFD6E0]/50 text-gray-400 font-extrabold text-sm uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-3 text-right">Total</div>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="group flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center py-4 border-b border-[#FFD6E0]/30 last:border-0 relative">
                  
                  {/* Delete Button Mobile (Absolute Top Right) */}
                  <button className="sm:hidden absolute top-4 right-0 text-gray-300 hover:text-red-500 transition-colors p-2">
                    <Trash2 size={20} />
                  </button>

                  {/* Product Info (Col 1-6) */}
                  <div className="col-span-6 flex items-center gap-6 w-full">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 bg-[#FFF9FB] rounded-2xl p-2 border border-[#FFD6E0]/40 group-hover:bg-[#FFD6E0]/20 group-hover:border-[#FF8FAB]/50 transition-colors">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col flex-1 pb-2 sm:pb-0">
                      <h3 className="text-xl font-extrabold text-gray-800 leading-tight mb-1 group-hover:text-[#FF8FAB] transition-colors pr-8 sm:pr-0">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 font-bold mb-3">Color: {item.color}</p>
                      <span className="text-[#FF8FAB] font-black text-lg sm:hidden">${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Quantity UI (Col 7-9) */}
                  <div className="col-span-3 flex justify-start sm:justify-center w-full sm:w-auto">
                    <div className="flex items-center bg-white border-2 border-[#FFD6E0]/60 rounded-2xl p-1 shadow-inner h-12">
                      <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] rounded-xl transition-colors">
                        <Minus size={18} strokeWidth={3} />
                      </button>
                      <span className="w-10 text-center font-extrabold text-lg">{item.quantity}</span>
                      <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] rounded-xl transition-colors">
                        <Plus size={18} strokeWidth={3} />
                      </button>
                    </div>
                  </div>

                  {/* Total & Remove (Col 10-12) */}
                  <div className="col-span-3 hidden sm:flex items-center justify-end gap-6 w-full">
                    <span className="text-gray-800 font-extrabold text-xl">${(item.price * item.quantity).toFixed(2)}</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm bg-white border border-gray-100">
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              ))}

            </div>
          </div>

          {/* Cart Summary (Right Side Panel) */}
          <aside className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-[#FFD6E0]/40 sticky top-32">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-6 pb-4 border-b border-[#FFD6E0]/50">Order Summary</h2>

              <div className="space-y-4 mb-6 text-lg">
                <div className="flex justify-between items-center text-gray-600 font-bold">
                  <span>Subtotal</span>
                  <span className="text-gray-800 font-extrabold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-bold">
                  <span>Shipping</span>
                  <span className="text-gray-800 font-extrabold">${shipping.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-[#FFD6E0]/50 pt-6 mb-8">
                <span className="text-xl font-extrabold text-gray-800 uppercase tracking-wide">Total</span>
                <span className="text-4xl font-black text-[#FF8FAB] tracking-tight">${total.toFixed(2)}</span>
              </div>

              <div className="space-y-4">
                <button className="w-full py-4.5 px-6 bg-[#FF8FAB] hover:bg-[#ff7a9b] text-white font-extrabold rounded-2xl shadow-[0_8px_20px_-6px_rgba(255,143,171,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(255,143,171,0.7)] hover:-translate-y-1 transition-all active:translate-y-0 flex items-center justify-center gap-2 text-lg h-16">
                  Proceed to Checkout
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>

                <a href="/backpacks" className="block w-full py-4 px-6 bg-[#FFF9FB] text-[#FF8FAB] text-center font-extrabold rounded-2xl hover:bg-[#FFD6E0]/30 transition-colors border-2 border-transparent hover:border-[#FFD6E0]/50 h-16 flex items-center justify-center">
                  Continue Shopping
                </a>
              </div>

              {/* Trust Badges below summary */}
              <div className="mt-8 space-y-4 pt-6 border-t border-[#FFD6E0]/30">
                <div className="flex items-center gap-3 text-sm text-gray-500 font-bold">
                  <ShieldCheck size={20} className="text-[#FFE66D]" />
                  Secure Checkout
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-500 font-bold">
                  <Truck size={20} className="text-[#FFE66D]" />
                  Fast Delivery on all orders
                </div>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
