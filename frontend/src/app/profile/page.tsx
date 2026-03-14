import React from 'react';
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  LogOut,
  Mail,
  Phone,
  MapPin,
  Camera,
  ChevronRight
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-pink-50/30 pt-12 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">My Profile</h1>
          <p className="text-slate-500 mt-2 text-lg">Manage your account, orders, and preferences.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Menu */}
          <div className="w-full md:w-72 shrink-0">
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden sticky top-8">
              <nav className="p-4 flex flex-col gap-2">
                <MenuLink icon={<User size={22} />} label="Profile" active />
                <MenuLink icon={<Package size={22} />} label="Orders" />
                <MenuLink icon={<Heart size={22} />} label="Wishlist" />
                <MenuLink icon={<Settings size={22} />} label="Settings" />
              </nav>
              <div className="p-4 border-t border-slate-100 mt-2 block">
                <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-2xl transition-colors font-semibold">
                  <LogOut size={22} />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Profile Section */}
          <div className="flex-1 space-y-8">
            
            {/* User Info Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-10 transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-bold text-slate-800">Personal Information</h2>
                 <button className="px-5 py-2.5 bg-pink-50 hover:bg-pink-100 text-pink-600 rounded-full font-bold text-sm transition-all focus:ring-4 focus:ring-pink-100 outline-none">
                    Edit
                 </button>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start text-center lg:text-left">
                {/* Avatar */}
                <div className="relative group cursor-pointer shrink-0">
                  <div className="w-32 h-32 rounded-full bg-pink-100 border-[6px] border-white shadow-lg overflow-hidden flex items-center justify-center">
                    <img 
                      src="https://api.dicebear.com/7.x/notionists/svg?seed=Lily&backgroundColor=fbcfe8" 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-slate-900/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <Camera className="text-white drop-shadow-md" size={28} />
                  </div>
                </div>

                {/* Details Grid */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 w-full">
                  <div>
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Display Name</label>
                    <div className="text-slate-800 font-bold text-lg">Lily Adventurer</div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Email Address</label>
                    <div className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 w-fit lg:w-full">
                      <Mail size={18} className="text-pink-400 shrink-0" />
                      <span className="truncate">lily.loves.backpacks@example.com</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Phone Number</label>
                    <div className="flex items-center justify-center lg:justify-start gap-2.5 text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 w-fit lg:w-full">
                      <Phone size={18} className="text-pink-400 shrink-0" />
                      <span>(555) 123-4567</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-wider block mb-2">Primary Address</label>
                    <div className="flex items-start justify-center lg:justify-start gap-2.5 text-slate-700 font-medium bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100 w-fit lg:w-full text-left">
                      <MapPin size={18} className="text-pink-400 shrink-0 mt-0.5" />
                      <span>123 Magic Lane, Sparkleville, CA 94000</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-10 transition-all hover:shadow-md">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-800">Recent Orders</h2>
                <button className="text-pink-500 hover:text-pink-600 font-bold text-sm flex items-center gap-1 transition-colors hover:underline underline-offset-4">
                  View All Orders <ChevronRight size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <OrderCard 
                  orderId="#FBK-88543" 
                  date="Oct 24, 2026" 
                  items={2} 
                  total={89.98} 
                  status="Delivered" 
                />
                <OrderCard 
                  orderId="#FBK-88210" 
                  date="Sep 12, 2026" 
                  items={1} 
                  total={45.00} 
                  status="Processing" 
                />
                <OrderCard 
                  orderId="#FBK-87999" 
                  date="Aug 05, 2026" 
                  items={3} 
                  total={124.50} 
                  status="Delivered" 
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

function MenuLink({ icon, label, active }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <a 
      href="#" 
      className={`flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all font-bold ${
        active 
          ? 'bg-gradient-to-r from-pink-500 to-pink-400 text-white shadow-md shadow-pink-200 hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-0.5' 
          : 'text-slate-500 hover:bg-pink-50 hover:text-pink-600'
      }`}
    >
      <div className={active ? 'text-white' : 'text-slate-400 group-hover:text-pink-500'}>
        {icon}
      </div>
      <span className="text-[15px]">{label}</span>
      {active && <ChevronRight size={18} className="ml-auto opacity-70" />}
    </a>
  );
}

function OrderCard({ 
  orderId, 
  date, 
  items, 
  total, 
  status 
}: { 
  orderId: string; 
  date: string; 
  items: number; 
  total: number; 
  status: string 
}) {
  const isDelivered = status === 'Delivered';
  
  return (
    <div className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 rounded-2xl border-2 border-slate-50 hover:border-pink-100 hover:bg-pink-50/40 transition-all gap-5">
      
      <div className="flex items-center gap-5">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
          isDelivered ? 'bg-emerald-50 text-emerald-500' : 'bg-amber-50 text-amber-500'
        }`}>
          <Package size={26} strokeWidth={2.5} />
        </div>
        
        <div>
          <div className="font-bold text-slate-800 flex flex-wrap items-center gap-2 mb-1">
            <span className="text-lg">{orderId}</span>
            <span className={`text-[11px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full ${
              isDelivered 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-amber-100 text-amber-700'
            }`}>
              {status}
            </span>
          </div>
          <div className="text-[15px] text-slate-500 font-medium">
            {date} <span className="mx-1.5 opacity-50">•</span> {items} {items === 1 ? 'item' : 'items'}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-6 sm:min-w-[200px] border-t-2 border-slate-50 sm:border-0 pt-5 sm:pt-0 mt-2 sm:mt-0">
        <div className="text-left sm:text-right">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Total Amount</div>
          <div className="font-extrabold text-slate-800 text-xl">${total.toFixed(2)}</div>
        </div>
        <button className="h-10 px-5 bg-white border-2 border-slate-100 group-hover:border-pink-200 group-hover:text-pink-600 text-slate-600 text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all whitespace-nowrap">
          Details
        </button>
      </div>
      
    </div>
  );
}
