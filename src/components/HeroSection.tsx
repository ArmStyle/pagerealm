import { TrendingUp, Clock, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 dark:from-indigo-800 dark:via-purple-900 dark:to-pink-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 sm:w-72 h-32 sm:h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-32 sm:w-72 h-32 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-32 sm:w-72 h-32 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-white">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            ค้นพบโลกแห่งการอ่าน
            <br />
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">ที่ไม่มีที่สิ้นสุด</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            อ่านนิยายและการ์ตูนออนไลน์ฟรี พร้อมเนื้อหาใหม่ทุกวัน
          </p>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-12 sm:mb-16 px-4 sm:px-0">
            <div className="relative">
              <input
                type="text"
                placeholder="ค้นหาเรื่องที่คุณอยากอ่าน..."
                className="w-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg rounded-2xl text-foreground placeholder-muted-foreground glass-card border-0 modern-focus eye-comfort-enhanced"
              />
              <button className="absolute right-2 sm:right-3 top-2 sm:top-3 modern-button text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5">
                ค้นหา
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">10,000+</h3>
              <p className="text-white/80 text-base sm:text-lg">เรื่องยอดนิยม</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">ทุกวัน</h3>
              <p className="text-white/80 text-base sm:text-lg">อัปเดตใหม่</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="glass-card rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">4.8/5</h3>
              <p className="text-white/80 text-base sm:text-lg">คะแนนผู้ใช้</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
