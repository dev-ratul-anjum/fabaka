import React from 'react';
import { ProductCard } from '../page';
import {
  Heart,
  Star,
  ShoppingCart,
  ChevronRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  CreditCard,
  Minus,
  Plus,
  Share2,
  ThumbsUp
} from 'lucide-react';

export default function ProductDetailsPage() {
  const images = [
    "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  ];

  const relatedProducts = [
    { id: 2, title: "Kitty Cuddle", subtitle: "Purr-fect Companion", price: "$32.99", rating: 4, image: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["Kids Favorite"] },
    { id: 3, title: "Little Fox", subtitle: "Woodland Friend", price: "$29.99", rating: 5, image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "Penguin Pal", subtitle: "Chilly but cuddly", price: "$25.99", rating: 4, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["New"] },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-gray-800 selection:bg-[#FFD6E0]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
      `}} />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-8 sm:mb-10">
          <a href="/" className="hover:text-[#FF8FAB] transition-colors">Home</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <a href="/backpacks" className="hover:text-[#FF8FAB] transition-colors">Shop</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <a href="/backpacks" className="hover:text-[#FF8FAB] transition-colors">Animal Backpacks</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <span className="text-gray-800">Dino Mate</span>
        </nav>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          
          {/* Left: Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square bg-white rounded-[2rem] border-2 border-[#FFD6E0]/40 overflow-hidden flex items-center justify-center p-6 lg:p-10 shadow-sm relative group">
              <div className="absolute top-6 left-6 z-20 bg-[#FF8FAB] text-white text-sm font-black px-4 py-1.5 rounded-full shadow-sm tracking-wide">
                Best Seller
              </div>
              <button className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform active:scale-95">
                <Share2 size={20} className="stroke-[2.5]" />
              </button>
              <img 
                src={images[0]} 
                alt="Main Product" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 will-change-transform" 
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <div key={idx} className={`aspect-square bg-white rounded-2xl border-2 flex items-center justify-center p-2 cursor-pointer overflow-hidden transition-all hover:border-[#FF8FAB] ${idx === 0 ? 'border-[#FF8FAB] shadow-md scale-95' : 'border-[#FFD6E0]/40 hover:scale-95'}`}>
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">Dino Mate Backpack</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < 4 ? "#FFE66D" : "transparent"} color={i < 4 ? "#FFE66D" : "#FFD6E0"} />
                  ))}
                </div>
                <span className="text-sm font-bold text-gray-500">(128 reviews)</span>
                <span className="text-[#FF8FAB] text-sm font-extrabold flex items-center gap-1 bg-[#FFD6E0]/30 px-3 py-1 rounded-full">
                  <CheckCircle2 size={16} /> In Stock
                </span>
              </div>
              
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-black text-[#FF8FAB] tracking-tight">$28.99</span>
                <span className="text-xl font-bold text-gray-400 line-through mb-1">$35.00</span>
              </div>
            </div>

            <p className="text-gray-600 font-semibold text-lg mb-8 leading-relaxed">
              Roar into adventure with our Dino Mate Backpack! Designed for little explorers, this super soft and huggable backpack is perfect for carrying toys, snacks, and treasure.
            </p>

            {/* Small Product Features List */}
            <div className="space-y-3 mb-8 bg-white p-6 rounded-3xl border border-[#FFD6E0]/40 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFE66D]/30 flex items-center justify-center text-[#e0b800]">
                  <CheckCircle2 size={18} strokeWidth={3} />
                </div>
                <span className="font-extrabold text-gray-700">Soft plush material</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFD6E0]/50 flex items-center justify-center text-[#FF8FAB]">
                  <CheckCircle2 size={18} strokeWidth={3} />
                </div>
                <span className="font-extrabold text-gray-700">Ultra lightweight & comfortable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E0F2FE] flex items-center justify-center text-blue-500">
                  <CheckCircle2 size={18} strokeWidth={3} />
                </div>
                <span className="font-extrabold text-gray-700">Perfect size for kids (Ages 3-8)</span>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div className="space-y-4 mb-8">
              <span className="font-bold text-gray-700 mb-2 block text-sm uppercase tracking-wider">Quantity</span>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white border-2 border-[#FFD6E0]/60 rounded-2xl p-1 shadow-sm w-fit">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] rounded-xl transition-colors">
                    <Minus size={18} strokeWidth={3} />
                  </button>
                  <span className="w-10 text-center font-extrabold text-lg">1</span>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] rounded-xl transition-colors">
                    <Plus size={18} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 py-4 px-6 bg-[#FF8FAB] hover:bg-[#ff7a9b] text-white font-extrabold rounded-2xl shadow-[0_8px_20px_-6px_rgba(255,143,171,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(255,143,171,0.7)] hover:-translate-y-1 transition-all active:translate-y-0 flex items-center justify-center gap-2 text-lg">
                <ShoppingCart size={22} strokeWidth={2.5} />
                Add to Cart
              </button>
              
              <button className="flex-[0.8] py-4 px-6 bg-[#FFE66D] hover:bg-[#ffda3d] text-gray-900 font-extrabold rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all active:translate-y-0 flex items-center justify-center gap-2 text-lg">
                <CreditCard size={22} strokeWidth={2.5} />
                Buy Now
              </button>
              
              <button className="sm:w-16 h-16 shrink-0 bg-white border-2 border-[#FFD6E0]/60 text-gray-400 hover:text-[#FF8FAB] hover:border-[#FF8FAB] rounded-2xl flex items-center justify-center transition-all shadow-sm group">
                <Heart size={24} className="group-hover:scale-110 transition-transform stroke-[2.5]" />
              </button>
            </div>

            {/* Extra Benefits Info */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#FFD6E0]/50 pt-6 mt-auto">
              <div className="flex items-center gap-3">
                <Truck size={24} className="text-[#FF8FAB]" />
                <span className="text-sm font-bold text-gray-600">Free shipping<br/>over $50</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={24} className="text-[#FFE66D]" />
                <span className="text-sm font-bold text-gray-600">30-day easy<br/>returns</span>
              </div>
            </div>

          </div>
        </div>

        {/* Product Info Tabs */}
        <section className="mb-20 mt-16 lg:mt-24">
          <div className="border-b-2 border-[#FFD6E0]/50 flex gap-8 mb-8 overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <button className="pb-4 text-xl font-extrabold text-[#FF8FAB] border-b-4 border-[#FF8FAB] whitespace-nowrap px-2">
              Description
            </button>
            <button className="pb-4 text-xl font-extrabold text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap px-2 flex-shrink-0">
              Specifications
            </button>
            <button className="pb-4 text-xl font-extrabold text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap px-2 flex-shrink-0">
              Shipping Info
            </button>
          </div>
          
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#FFD6E0]/40">
            <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Meet your new best friend!</h3>
            <p className="text-gray-600 font-semibold text-lg mb-6 leading-relaxed">
              The Dino Mate backpack is more than just a bag; it's a cuddly companion for preschool, daycare, or trips to the park. Made from our signature cloud-soft plush fabric, it feels like hugging a favorite stuffed animal. The vibrant green color and cute little spikes will make your child the coolest kid on the playground.
            </p>
            <p className="text-gray-600 font-semibold text-lg leading-relaxed">
              It features a roomy main compartment perfect for a change of clothes or their favorite toys, plus an easy-to-use zipper designed specifically for little hands. The adjustable shoulder straps are padded for extra comfort and can grow with your child.
            </p>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight mb-2">Customer Reviews</h2>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < 4 ? "#FFE66D" : "transparent"} color={i < 4 ? "#FFE66D" : "#FFD6E0"} />
                  ))}
                </div>
                <span className="text-lg font-extrabold text-gray-700">4.8 out of 5</span>
              </div>
            </div>
            <button className="px-6 py-3 bg-white border-2 border-[#FFD6E0]/60 text-gray-700 font-extrabold rounded-2xl hover:border-[#FF8FAB] hover:text-[#FF8FAB] shadow-sm transition-all active:scale-95">
              Write a Review
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Amanda T.", date: "Oct 12, 2025", rating: 5, comment: "My son absolutely loves his Dino backpack! He wears it everywhere, even entirely around the house. Super soft and fits his little water bottle perfectly.", helpful: 12 },
              { name: "Jessica R.", date: "Sep 28, 2025", rating: 5, comment: "Great quality! The zipper is very sturdy and the material hasn't faded after washing it (I washed it on gentle cold). Highly recommend for toddlers.", helpful: 8 },
              { name: "Mark S.", date: "Sep 05, 2025", rating: 4, comment: "Very cute design. It's a bit smaller than I expected, but perfect for my 3-year-old. Best for small toys and snacks rather than full size folders.", helpful: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-[#FFD6E0]/40 flex flex-col hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FFD6E0]/50 rounded-full flex items-center justify-center text-xl font-black text-[#FF8FAB]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-gray-800">{review.name}</h4>
                    <span className="text-sm font-bold text-gray-400">{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill={j < review.rating ? "#FFE66D" : "transparent"} color={j < review.rating ? "#FFE66D" : "#FFD6E0"} />
                  ))}
                </div>
                <p className="text-gray-600 font-semibold mb-6 flex-1">"{review.comment}"</p>
                
                <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#FF8FAB] transition-colors mt-auto w-fit">
                  <ThumbsUp size={16} /> Helpful ({review.helpful})
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Related Products Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">You Might Also Like</h2>
            <a href="/backpacks" className="text-[#FF8FAB] font-extrabold hover:underline underline-offset-4 flex items-center gap-1">
              View All <ChevronRight size={18} />
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
