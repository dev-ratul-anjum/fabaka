import React from 'react';
import {
  ShoppingCart,
  Menu,
  Heart,
  Eye,
  Star,
  ShieldCheck,
  Smile,
  Gift,
  Search,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FFF9FB] text-gray-800 selection:bg-[#FFD6E0]">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#FFF9FB]/80 backdrop-blur-md border-b border-[#FFD6E0]">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-extrabold text-[#FF8FAB] tracking-tight drop-shadow-sm">PlushyPack</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-600">
            <a href="#" className="text-[#FF8FAB] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#FF8FAB] after:rounded-full">Home</a>
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Shop</a>
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Categories</a>
            <a href="#" className="hover:text-[#FF8FAB] transition-colors">Wishlist</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#FF8FAB] transition-colors">
              <Search size={22} className="stroke-[2.5]" />
            </button>
            <button className="text-gray-600 hover:text-[#FF8FAB] transition-colors">
              <Heart size={22} className="stroke-[2.5]" />
            </button>
            <button className="relative text-gray-600 hover:text-[#FF8FAB] transition-colors group">
              <ShoppingCart size={22} className="stroke-[2.5]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#FFE66D] text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center text-gray-800 shadow-sm group-hover:scale-110 transition-transform">3</span>
            </button>
            <button className="md:hidden text-gray-600 hover:text-[#FF8FAB] transition-colors">
              <Menu size={24} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FFD6E0]/20 py-16 lg:py-24">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFE66D]/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF8FAB]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left z-10">
            <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold text-[#FF8FAB] shadow-sm mb-2 border border-[#FFD6E0]/50">
              ✨ New Arrivals
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
              Cute Backpacks <br className="hidden lg:block"/>
              <span className="text-[#FF8FAB] relative inline-block">
                Kids Love!
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE66D] opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
              Super soft, ultra-huggable plush backpacks designed for little adventurers and everyday magic.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#FF8FAB] hover:bg-[#ff7a9b] text-white font-bold rounded-2xl shadow-[0_8px_20px_-6px_rgba(255,143,171,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(255,143,171,0.7)] hover:-translate-y-1 transition-all active:translate-y-0">
                Shop Now
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all active:bg-gray-100">
                Explore Categories
              </button>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center mt-8 md:mt-0">
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD6E0] to-[#FFE66D]/40 rounded-[3rem] rotate-6 scale-95 shadow-lg"></div>
              <div className="absolute inset-0 bg-white rounded-[3rem] -rotate-3 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center p-8 group">
                <img 
                  src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Cute Pink Backpack" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce flex-col text-[#FF8FAB] border border-[#FFD6E0]/50">
                <Heart fill="#FF8FAB" className="w-6 h-6" />
                <span className="text-xs font-bold text-gray-600">Loved!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">Shop by Category</h2>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">Find the perfect plushy friend for every personality type.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { name: 'Animal Backpacks', img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-[#FFD6E0]' },
            { name: 'Cartoon Backpacks', img: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-[#FFE66D]/50' },
            { name: 'Cute Character Bags', img: 'https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-[#FF8FAB]/30' },
            { name: 'Mini Plush Bags', img: 'https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', color: 'bg-indigo-100' },
          ].map((cat, i) => (
            <div key={i} className="group cursor-pointer">
              <div className={`relative aspect-square rounded-[2rem] ${cat.color} mb-4 overflow-hidden flex items-center justify-center p-6 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2`}>
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2.5px)', backgroundSize: '20px 20px'}}></div>
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500 relative z-10"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-gray-800 group-hover:text-[#FF8FAB] transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-[#FFF9FB]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">Featured Fluffiness</h2>
              <p className="text-gray-500 font-medium">Explore our hand-picked delightful collection.</p>
            </div>
            <button className="text-[#FF8FAB] font-bold hover:underline underline-offset-4 flex items-center gap-1">
              View All <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Pink Bunny Hug", price: "$29.99", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", tag: "New" },
              { title: "Sleepy Bear Mini", price: "$24.99", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "Unicorn Dream", price: "$34.99", img: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "Puppy Pal Pack", price: "$27.99", img: "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col items-center">
                {product.tag && (
                  <div className="absolute top-6 left-6 z-20 bg-[#FFE66D] text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.tag}
                  </div>
                )}
                
                <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300 delay-75">
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform">
                    <Heart size={18} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform">
                    <Eye size={18} />
                  </button>
                </div>

                <div className="w-full aspect-square bg-[#FFD6E0]/10 rounded-2xl overflow-hidden mb-4 flex items-center justify-center relative shadow-inner p-4">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="w-full mt-2 text-center pb-2">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[#FF8FAB] font-extrabold text-lg">{product.price}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-[#FFF9FB] text-gray-800 font-bold rounded-xl mt-2 group-hover:bg-[#FF8FAB] group-hover:text-white transition-colors duration-300 border border-[#FFD6E0]/50">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#FFD6E0]/20 relative z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#FFD6E0]/50 rounded-2xl flex items-center justify-center mb-6 text-[#FF8FAB] group-hover:scale-110 group-hover:rotate-3 transition-all">
                <Smile size={32} className="stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Super Soft Plush</h3>
              <p className="text-gray-500 font-medium">Made from premium cloud-like materials perfect for hugging.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#FFE66D]/30 rounded-2xl flex items-center justify-center mb-6 text-[#e0b800] group-hover:scale-110 group-hover:-rotate-3 transition-all">
                <ShieldCheck size={32} className="stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Kid Friendly</h3>
              <p className="text-gray-500 font-medium">Safe, durable zippers and straps designed for little hands.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-[#FF8FAB]/20 rounded-2xl flex items-center justify-center mb-6 text-[#FF8FAB] group-hover:scale-110 group-hover:rotate-3 transition-all">
                <Gift size={32} className="stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect Gift</h3>
              <p className="text-gray-500 font-medium">Arrives in magical packaging, ready to bring endless smiles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">Best Sellers</h2>
              <p className="text-gray-500 font-medium">The most cuddled backpacks of the season.</p>
            </div>
            <button className="text-[#FF8FAB] font-bold hover:underline underline-offset-4 flex items-center gap-1">
              View All <span aria-hidden="true">&rarr;</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "Dino Mate", price: "$28.99", img: "https://images.unsplash.com/photo-1541085388147-167819ceab97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", tag: "Hot" },
              { title: "Kitty Cuddle", price: "$32.99", img: "https://images.unsplash.com/photo-1581553680321-4fffae59fdd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "Little Fox", price: "$29.99", img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
              { title: "Penguin Pal", price: "$25.99", img: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
            ].map((product, i) => (
              <div key={i} className="bg-[#FFF9FB] border border-[#FFD6E0]/40 rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-300 group relative flex flex-col items-center">
                {product.tag && (
                  <div className="absolute top-6 left-6 z-20 bg-[#FF8FAB] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {product.tag}
                  </div>
                )}
                
                <div className="absolute top-6 right-6 z-20 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-300 delay-75">
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform">
                    <Heart size={18} />
                  </button>
                  <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-500 hover:text-[#FF8FAB] shadow-md hover:scale-110 transition-transform">
                    <Eye size={18} />
                  </button>
                </div>

                <div className="w-full aspect-square bg-white rounded-2xl overflow-hidden mb-4 flex items-center justify-center relative shadow-sm p-4">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="w-full mt-2 text-center pb-2">
                  <div className="flex justify-center gap-1 mb-2">
                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="#FFE66D" color="#FFE66D" />)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{product.title}</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-[#FF8FAB] font-extrabold text-lg">{product.price}</span>
                  </div>
                </div>
                
                <button className="w-full py-3 bg-white text-gray-800 font-bold rounded-xl mt-2 group-hover:bg-[#FF8FAB] group-hover:text-white transition-colors duration-300 shadow-sm">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 lg:py-24 bg-[#FFD6E0]/20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 tracking-tight">Happy Parents & Kids</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", text: "Absolutely adorable! My daughter refuses to take her bunny backpack off. Very soft and the zipper is sturdy enough for a toddler.", rating: 5 },
              { name: "Jessica T.", text: "The perfect size for preschool. Fits a water bottle, snacks, and a change of clothes. Plus, it's so incredibly cute!", rating: 5 },
              { name: "Emily R.", text: "Bought this as a gift for my niece and she squealed with joy. The plush material feels very premium.", rating: 5 }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] relative shadow-sm hover:shadow-lg transition-shadow mt-6 md:mt-0">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#FFD6E0] rounded-full flex items-center justify-center text-2xl shadow-sm border-4 border-white">
                  🧸
                </div>
                <div className="flex justify-center gap-1 mb-4 mt-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="#FFE66D" color="#FFE66D" />)}
                </div>
                <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">"{review.text}"</p>
                <h4 className="font-bold text-gray-800">- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 container mx-auto px-4 lg:px-8">
        <div className="bg-[#FF8FAB] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-xl text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFE66D]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Join the Plushy Club!</h2>
            <p className="text-white/90 font-medium text-lg mb-8">
              Subscribe to get 15% off your first cute backpack and hear about our newest fluffy friends before anyone else.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-2xl outline-none text-gray-800 focus:ring-4 focus:ring-white/30 font-medium placeholder-gray-400 shadow-inner"
              />
              <button 
                type="button" 
                className="px-8 py-4 bg-[#FFE66D] hover:bg-[#ffda3d] text-gray-900 font-extrabold rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/70 text-sm mt-4 font-medium">No spam, just cuteness! Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-[#FFD6E0]/50 mt-12 w-full">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-1">
              <span className="text-3xl font-extrabold text-[#FF8FAB] tracking-tight block mb-4">PlushyPack</span>
              <p className="text-gray-500 font-medium mb-6">
                Making everyday adventures cuter with the softest, most huggable backpacks for kids.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-[#FFF9FB] rounded-full flex items-center justify-center text-[#FF8FAB] hover:bg-[#FF8FAB] hover:text-white transition-colors border border-[#FFD6E0]/50">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FFF9FB] rounded-full flex items-center justify-center text-[#FF8FAB] hover:bg-[#FF8FAB] hover:text-white transition-colors border border-[#FFD6E0]/50">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-[#FFF9FB] rounded-full flex items-center justify-center text-[#FF8FAB] hover:bg-[#FF8FAB] hover:text-white transition-colors border border-[#FFD6E0]/50">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-lg">Shop</h4>
              <ul className="space-y-3 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">All Products</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-lg">Support</h4>
              <ul className="space-y-3 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-800 mb-6 text-lg">Legal</h4>
              <ul className="space-y-3 font-medium text-gray-500">
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FF8FAB] transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#FFD6E0]/50 text-gray-400 font-medium text-sm">
            <p>&copy; {new Date().getFullYear()} PlushyPack. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0 items-center">
              <span>Made with <Heart size={14} className="inline text-[#FF8FAB] fill-[#FF8FAB]" /> for cute kids</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}