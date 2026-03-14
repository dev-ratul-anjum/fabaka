import React from 'react';
import {
  Heart,
  Star,
  ShoppingCart,
  ChevronRight,
  ChevronLeft,
  Filter,
  ChevronDown
} from 'lucide-react';

// Reusable ProductCard Component
interface ProductCardProps {
  image: string;
  title: string;
  subtitle?: string;
  price: string;
  rating: number;
  badges?: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  image, 
  title, 
  subtitle, 
  price, 
  rating, 
  badges = [] 
}) => {
  return (
    <div className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col items-center hover:-translate-y-2 border border-[#FFD6E0]/40">
      
      {/* Top Badges (Absolute) */}
      {badges.length > 0 && (
        <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
          {badges.map((badge, idx) => (
            <div 
              key={idx} 
              className={`text-xs font-black px-3 py-1.5 rounded-full shadow-sm tracking-wide ${
                idx === 0 ? 'bg-[#FF8FAB] text-white' : 'bg-[#FFE66D] text-gray-900'
              }`}
            >
              {badge}
            </div>
          ))}
        </div>
      )}

      {/* Top Right Wishlist Icon */}
      <button className="absolute top-6 right-6 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform active:scale-95">
        <Heart size={20} className="stroke-[2.5]" />
      </button>

      {/* Product Image Area */}
      <div className="w-full aspect-square bg-[#FFF9FB] rounded-2xl overflow-hidden mb-5 flex items-center justify-center relative shadow-inner p-5 group-hover:bg-[#FFD6E0]/20 transition-colors duration-300">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain rounded-xl group-hover:scale-110 transition-transform duration-500 will-change-transform"
        />
      </div>

      {/* Center: Title, Subtitle, Rating */}
      <div className="w-full text-center flex-grow flex flex-col items-center px-2">
        <h3 className="text-xl font-extrabold text-gray-800 mb-1 leading-tight group-hover:text-[#FF8FAB] transition-colors">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 font-bold mb-3">{subtitle}</p>}
        
        <div className="flex justify-center gap-1 mb-4 mt-auto">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < rating ? "#FFE66D" : "transparent"} 
              color={i < rating ? "#FFE66D" : "#FFD6E0"} 
            />
          ))}
        </div>

        {/* Bottom: Price and Add to Cart */}
        <div className="flex items-center justify-between w-full mt-2 gap-3">
          <span className="text-[#FF8FAB] font-black text-2xl tracking-tight">{price}</span>
          <button className="flex-1 py-3 px-4 bg-[#FFF9FB] text-gray-800 font-extrabold rounded-xl hover:bg-[#FF8FAB] hover:text-white transition-all duration-300 shadow-sm border border-[#FFD6E0]/50 flex items-center justify-center gap-2 group/btn active:scale-95">
            <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" strokeWidth={2.5} />
            <span className="hidden sm:inline">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Products / Shop Page Component
export default function BackpacksShopPage() {
  const products = [
    { id: 1, title: "Dino Mate", subtitle: "Soft T-Rex Pal", price: "$28.99", rating: 5, image: "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["Best Seller", "Kids Favorite"] },
    { id: 2, title: "Kitty Cuddle", subtitle: "Purr-fect Companion", price: "$32.99", rating: 4, image: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["Kids Favorite"] },
    { id: 3, title: "Little Fox", subtitle: "Woodland Friend", price: "$29.99", rating: 5, image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 4, title: "Penguin Pal", subtitle: "Chilly but cuddly", price: "$25.99", rating: 4, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["New"] },
    { id: 5, title: "Unicorn Dream", subtitle: "Magical Adventures", price: "$34.99", rating: 5, image: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 6, title: "Sleepy Bear", subtitle: "Naptime Hero", price: "$24.99", rating: 5, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["Best Seller"] },
    { id: 7, title: "Bunny Hop", subtitle: "Floppy Ears", price: "$26.99", rating: 5, image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 8, title: "Monkey Fun", subtitle: "Swinging Buddy", price: "$27.99", rating: 4, image: "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 9, title: "Koala Hug", subtitle: "Down Under Friend", price: "$31.99", rating: 5, image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", badges: ["Trending"] },
  ];

  const filters = {
    Category: ["Animal Backpacks", "Cartoon Backpacks", "Cute Character Bags", "Mini Plush Bags"],
    "Price Range": ["Under $20", "$20 - $30", "Over $30"],
    "Age Group": ["Toddler (1-3)", "Preschool (4-5)", "Kids (6+)"],
    Gender: ["Boys", "Girls", "Unisex"]
  };

  return (
    <div className="min-h-screen bg-[#FFF9FB] text-gray-800 selection:bg-[#FFD6E0]" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');
      `}} />
      
      <main className="container mx-auto px-4 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb navigation */}
        <nav className="flex items-center gap-2 text-sm font-bold text-gray-500 mb-8">
          <a href="#" className="hover:text-[#FF8FAB] transition-colors">Home</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <a href="#" className="hover:text-[#FF8FAB] transition-colors">Collections</a>
          <ChevronRight size={16} className="text-[#FFD6E0]" />
          <span className="text-gray-800">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-[#FFD6E0]/50 pb-8">
          <div>
            <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-black text-[#FF8FAB] shadow-sm mb-3 border border-[#FFD6E0]/50">
              🧸 All Fluffiness
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 tracking-tight leading-tight mb-2">
              Shop Cute Backpacks
            </h1>
            <p className="text-gray-500 font-semibold text-lg max-w-xl">
              Discover our magical collection of super soft, huggable backpacks designed for everyday adventures.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
            {/* Mobile Filter Button */}
            <button className="md:hidden flex flex-1 justify-center items-center gap-2 bg-[#FF8FAB] px-6 py-3.5 rounded-2xl text-white font-extrabold shadow-[0_8px_20px_-6px_rgba(255,143,171,0.6)] hover:bg-[#ff7a9b] transition-all active:scale-95">
              <Filter size={18} strokeWidth={2.5} /> 
              Filters
            </button>
            
            {/* Sort Dropdown */}
            <div className="relative group">
              <button className="w-full sm:w-auto flex items-center justify-between gap-3 bg-white border-2 border-[#FFD6E0]/60 px-6 py-3.5 rounded-2xl text-gray-700 font-extrabold shadow-sm hover:border-[#FF8FAB] hover:text-[#FF8FAB] transition-all focus:outline-none">
                <span className="text-gray-500 font-semibold mr-2">Sort:</span>
                Popular
                <ChevronDown size={18} className="text-gray-400 group-hover:text-[#FF8FAB] transition-colors" />
              </button>
              {/* Static Dropdown Menu for UI purposes */}
              <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-[#FFD6E0] rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30 translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <ul className="py-2">
                  <li className="px-5 py-3 text-sm font-bold text-[#FF8FAB] bg-[#FFF9FB] cursor-pointer">Popular</li>
                  <li className="px-5 py-3 text-sm font-bold text-gray-600 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] cursor-pointer transition-colors">Price: Low to High</li>
                  <li className="px-5 py-3 text-sm font-bold text-gray-600 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] cursor-pointer transition-colors">Price: High to Low</li>
                  <li className="px-5 py-3 text-sm font-bold text-gray-600 hover:text-[#FF8FAB] hover:bg-[#FFF9FB] cursor-pointer transition-colors">Newest Arrivals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
          
          {/* Desktop Filter Sidebar */}
          <aside className="hidden md:block w-72 shrink-0">
            <div className="bg-white p-7 rounded-[2rem] shadow-sm border border-[#FFD6E0]/40 space-y-8 sticky top-32">
              <div className="flex items-center justify-between border-b border-[#FFD6E0]/50 pb-4">
                <h2 className="text-xl font-extrabold text-gray-800 flex items-center gap-2">
                  <Filter size={20} className="text-[#FF8FAB]" />
                  Filters
                </h2>
                <button className="text-[#FF8FAB] text-sm font-bold hover:underline underline-offset-4">Reset</button>
              </div>

              {Object.entries(filters).map(([title, options], idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-extrabold text-gray-800 flex items-center justify-between cursor-pointer group">
                    {title}
                   <ChevronDown size={18} className="text-gray-400 group-hover:text-[#FF8FAB] transition-colors" />
                  </h3>
                  <div className="space-y-3 pt-1">
                    {options.map((opt, i) => (
                      <label key={i} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative w-6 h-6 rounded-lg border-2 border-[#FFD6E0] flex items-center justify-center group-hover:border-[#FF8FAB] transition-all overflow-hidden bg-[#FFF9FB]">
                           {/* Highlight effect for active state demonstration (first item checked) */}
                           {idx === 0 && i === 0 && (
                             <div className="w-full h-full bg-[#FF8FAB] flex items-center justify-center">
                               <svg className="w-3.5 h-3.5 text-white stroke-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                 <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                               </svg>
                             </div>
                           )}
                        </div>
                        <span className={`font-bold transition-colors ${idx === 0 && i === 0 ? 'text-[#FF8FAB]' : 'text-gray-600 group-hover:text-[#FF8FAB]'}`}>
                          {opt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Main Product Area */}
          <div className="flex-1">
            {/* Active Filters mobile style */}
            <div className="flex flex-wrap gap-2 mb-8 hidden md:flex items-center">
               <span className="text-sm font-bold text-gray-500 mr-2">Filters applied:</span>
               <span className="flex items-center justify-center gap-2 bg-[#FF8FAB]/10 border border-[#FF8FAB]/30 px-4 py-2 rounded-full text-sm font-extrabold text-[#FF8FAB] shadow-sm cursor-pointer hover:bg-[#FF8FAB]/20 transition-colors">
                 Animal Backpacks
                 <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF8FAB]">
                   &times;
                 </div>
               </span>
               <span className="flex items-center justify-center gap-2 bg-[#FF8FAB]/10 border border-[#FF8FAB]/30 px-4 py-2 rounded-full text-sm font-extrabold text-[#FF8FAB] shadow-sm cursor-pointer hover:bg-[#FF8FAB]/20 transition-colors">
                 Under $30
                 <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#FF8FAB]">
                   &times;
                 </div>
               </span>
               <button className="text-gray-400 text-sm font-extrabold hover:text-[#FF8FAB] px-2 transition-colors">Clear All</button>
            </div>

            {/* Product Grid Area: 1 col mobile, 2 tablet, 3 desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination Section */}
            <div className="flex flex-col items-center justify-center border-t border-[#FFD6E0]/50 pt-10 pb-16">
              <span className="text-sm font-bold text-gray-500 mb-6">Showing 1-9 of 36 products</span>
              
              <div className="flex items-center gap-2">
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border-2 border-[#FFD6E0]/60 text-gray-400 hover:text-[#FF8FAB] hover:border-[#FF8FAB] transition-all shadow-sm active:scale-95">
                  <ChevronLeft size={20} strokeWidth={3} />
                </button>
                
                {[1, 2, 3, "...", 8].map((page, i) => (
                  <button 
                    key={i} 
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-extrabold text-lg transition-all ${
                      page === 1 
                        ? "bg-[#FF8FAB] text-white shadow-[0_4px_12px_-4px_rgba(255,143,171,0.6)]" 
                        : page === "..."
                          ? "bg-transparent text-gray-400 cursor-default"
                          : "bg-white border-2 border-[#FFD6E0]/60 text-gray-600 hover:text-[#FF8FAB] hover:border-[#FF8FAB] shadow-sm active:scale-95"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-white border-2 border-[#FFD6E0]/60 text-gray-400 hover:text-[#FF8FAB] hover:border-[#FF8FAB] transition-all shadow-sm active:scale-95">
                  <ChevronRight size={20} strokeWidth={3} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
