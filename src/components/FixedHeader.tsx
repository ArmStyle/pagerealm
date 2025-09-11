"use client";

import { Search, Book, BookOpen, Menu, X, Sun, Moon, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import ReadingMode from "./ReadingMode";

export default function FixedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReadingModeOpen, setIsReadingModeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // หน้าที่ไม่ต้องการ header
  const hideHeaderPages = ["/login", "/register", "/reading-full"];

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // ซ่อน header ในหน้าที่ไม่ต้องการ
  if (hideHeaderPages.includes(pathname)) {
    return null;
  }

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Fixed Header */}
      <header className="layered-header shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center min-w-0 flex-shrink-0">
              <div className="flex-shrink-0 flex items-center group">
                <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Book className="h-4 w-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6 text-white" />
                </div>
                <span className="ml-2 sm:ml-3 text-lg sm:text-xl font-bold text-gradient truncate">
                  ReadToon
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-sm xl:max-w-lg mx-4 xl:mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 sm:h-5 w-4 sm:w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 glass-card text-foreground placeholder-muted-foreground modern-focus border-0 text-sm rounded-lg sm:rounded-xl"
                  placeholder="ค้นหานิยายหรือการ์ตูน..."
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-2 xl:px-4 py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-sm font-medium transition-all duration-200 hover:backdrop-blur-sm whitespace-nowrap"
              >
                <BookOpen className="h-4 w-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">นิยาย</span>
              </a>
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-2 xl:px-4 py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-sm font-medium transition-all duration-200 hover:backdrop-blur-sm whitespace-nowrap"
              >
                <Book className="h-4 w-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">การ์ตูน</span>
              </a>
              <a
                href="#"
                className="flex items-center text-muted-foreground hover:text-primary px-2 xl:px-4 py-2 xl:py-2.5 rounded-lg xl:rounded-xl text-sm font-medium transition-all duration-200 hover:backdrop-blur-sm whitespace-nowrap"
              >
                <span className="text-base xl:text-sm">🏆</span>
                <span className="hidden xl:inline ml-1">จัดอันดับ</span>
              </a>

              {/* Reading Mode Toggle */}
              <button
                onClick={() => setIsReadingModeOpen(true)}
                className="cursor-pointer p-2 xl:p-3 rounded-lg xl:rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
                aria-label="Reading mode settings"
                title="การตั้งค่าการอ่าน"
              >
                <Eye className="h-4 w-4 xl:h-5 xl:w-5" />
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="cursor-pointer p-2 xl:p-3 rounded-lg xl:rounded-xl text-muted-foreground hover:text-primary transition-all duration-200 hover:backdrop-blur-sm hover:shadow-lg"
                aria-label="Toggle theme"
                title="เปลี่ยนธีม"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4 xl:h-5 xl:w-5" />
                ) : (
                  <Sun className="h-4 w-4 xl:h-5 xl:w-5" />
                )}
              </button>
              {/* User Menu */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className="cursor-pointer modern-button text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2 whitespace-nowrap">
                  <span className="hidden xl:inline">เข้าสู่ระบบ</span>
                  <span className="xl:hidden">เข้าสู่ระบบ</span>
                </button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
              {/* Mobile Search Button */}
              <button className="lg:hidden p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-200">
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              
              <button
                onClick={() => setIsReadingModeOpen(true)}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-200"
                aria-label="Reading mode settings"
              >
                <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden">
              <div className="px-3 sm:px-4 pt-3 sm:pt-4 pb-4 sm:pb-6 space-y-2 sm:space-y-3 m-3 sm:m-4 rounded-xl sm:rounded-2xl">
                {/* Mobile Search */}
                <div className="relative mb-3 sm:mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-muted/50 dark:bg-muted/30 text-foreground placeholder-muted-foreground border border-border/50 dark:border-border/30 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                    placeholder="ค้นหานิยายหรือการ์ตูน..."
                  />
                </div>

                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-200"
                >
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  นิยาย
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-200"
                >
                  <Book className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                  การ์ตูน
                </a>
                <a
                  href="#"
                  className="flex items-center text-muted-foreground hover:text-primary hover:bg-muted/50 dark:hover:bg-muted/30 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg sm:rounded-xl transition-all duration-200"
                >
                  <span className="mr-2 sm:mr-3">🏆</span>
                  จัดอันดับ
                </a>
                
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg sm:rounded-xl px-4 py-2.5 sm:py-3 text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg">
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
