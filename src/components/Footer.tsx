export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">📚</div>
              <span className="text-2xl font-bold">ReadToon</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-4 max-w-md">
              แพลตฟอร์มอ่านนิยายและการ์ตูนออนไลน์ที่ดีที่สุด 
              พร้อมเนื้อหาคุณภาพสูงและการอัปเดตทุกวัน
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                💬 Line
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                ✉️ Email
              </a>
            </div>
          </div>

          {/* For Readers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">สำหรับนักอ่าน</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  📖 นิยาย
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  🎨 การ์ตูน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  🏆 จัดอันดับ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  💰 วิธีเติมเหรียญ
                </a>
              </li>
            </ul>
          </div>

          {/* For Writers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">สำหรับนักเขียน</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  ✍️ เริ่มเขียน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  📚 คู่มือใช้งาน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  💡 เคล็ดลับการเขียน
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  💼 โอกาสรายได้
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © 2025 ReadToon. สงวนลิขสิทธิ์ทุกประการ
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-sm transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-sm transition-colors">
                ข้อตกลงการใช้งาน
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white text-sm transition-colors">
                รายงานปัญหา
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
