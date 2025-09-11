"use client";

import { Search, Book, BookOpen, Menu, X, Sun, Moon, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ReadingMode from "./ReadingMode";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReadingModeOpen, setIsReadingModeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <header className="layered-header sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center group">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Book className="h-6 w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold text-gradient">
                  ReadToon
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-4 py-3 glass-card text-foreground placeholder-muted-foreground modern-focus border-0 text-sm"
                  placeholder="ค้นหานิยายหรือการ์ตูน..."
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-2 items-center">
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                นิยาย
              </a>
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
              >
                <Book className="h-4 w-4 mr-2" />
                การ์ตูน
              </a>
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
              >
                🏆 จัดอันดับ
              </a>

              {/* Reading Mode Toggle */}
              <button
                onClick={() => setIsReadingModeOpen(true)}
                className="cursor-pointer p-3 rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg"
                aria-label="Reading mode settings"
                title="การตั้งค่าการอ่าน"
              >
                <Eye className="h-5 w-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="cursor-pointer p-3 rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm hover:shadow-lg"
                aria-label="Toggle theme"
                title="เปลี่ยนธีม"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              {/* User Menu */}
              <div className="hidden md:flex items-center space-x-4">
                <button className="cursor-pointer modern-button text-sm">เข้าสู่ระบบ</button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsReadingModeOpen(true)}
                className="p-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
                aria-label="Reading mode settings"
              >
                <Eye className="h-5 w-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2.5 rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:bg-white/20 hover:backdrop-blur-sm"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 pt-4 pb-6 space-y-3 glass-card m-4 rounded-2xl">
                {/* Mobile Search */}
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-4 py-3 glass-card text-foreground placeholder-muted-foreground modern-focus border-0 text-sm rounded-xl"
                    placeholder="ค้นหานิยายหรือการ์ตูน..."
                  />
                </div>

                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:bg-white/20"
                >
                  <BookOpen className="h-5 w-5 mr-3" />
                  นิยาย
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:bg-white/20"
                >
                  <Book className="h-5 w-5 mr-3" />
                  การ์ตูน
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 hover:bg-white/20"
                >
                  🏆 จัดอันดับ
                </a>
                <button className="w-full modern-button text-base mt-4">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <ReadingMode
        isOpen={isReadingModeOpen}
        onClose={() => setIsReadingModeOpen(false)}
      />
    </>
  );
}
