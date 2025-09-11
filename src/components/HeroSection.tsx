import { TrendingUp, Clock, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-indigo-800 dark:via-purple-900 dark:to-pink-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight">
            ค้นพบโลกแห่งการอ่าน
            <br />
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">ที่ไม่มีที่สิ้นสุด</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            อ่านนิยายและการ์ตูนออนไลน์ฟรี พร้อมเนื้อหาใหม่ทุกวัน
          </p>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาเรื่องที่คุณอยากอ่าน..."
                className="w-full px-8 py-5 text-lg rounded-2xl text-foreground placeholder-muted-foreground glass-card border-0 modern-focus eye-comfort-enhanced"
              />
              <button className="absolute right-3 top-3 modern-button">
                ค้นหา
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-6 mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-white/80 text-lg">เรื่องยอดนิยม</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-6 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">ทุกวัน</h3>
              <p className="text-white/80 text-lg">อัปเดตใหม่</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-6 mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold mb-2">4.8/5</h3>
              <p className="text-white/80 text-lg">คะแนนผู้ใช้</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
