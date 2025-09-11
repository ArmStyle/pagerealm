export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl sm:text-3xl mr-3">📚</div>
              <span className="text-xl sm:text-2xl font-bold">ReadToon</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 max-w-md text-sm sm:text-base">
              แพลตฟอร์มอ่านนิยายและการ์ตูนออนไลน์ที่ดีที่สุด 
              พร้อมเนื้อหาคุณภาพสูงและการอัปเดตทุกวัน
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                💬 Line
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                ✉️ Email
              </a>
            </div>
          </div>

          {/* For Readers */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">สำหรับนักอ่าน</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  📖 นิยาย
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  🎨 การ์ตูน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  🏆 จัดอันดับ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  💰 วิธีเติมเหรียญ
                </a>
              </li>
            </ul>
          </div>

          {/* For Writers */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">สำหรับนักเขียน</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  ✍️ เริ่มเขียน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  📚 คู่มือใช้งาน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  💡 เคล็ดลับการเขียน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors text-sm sm:text-base">
                  💼 โอกาสรายได้
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm text-center md:text-left">
              © 2025 ReadToon. สงวนลิขสิทธิ์ทุกประการ
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">
                ข้อตกลงการใช้งาน
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">
                รายงานปัญหา
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
