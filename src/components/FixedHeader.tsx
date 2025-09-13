"use client";

import { Search, Book, BookOpen, Menu, X, Sun, Moon, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ReadingMode from "./ReadingMode";
import UserMenu from "./UserMenu";
import { useUserStore } from "@/store/useUserStore";

export default function FixedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReadingModeOpen, setIsReadingModeOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { isAuthenticated, user } = useUserStore();

  // หน้าที่ไม่ต้องการ header
  const hideHeaderPages = ["/login", "/register", "/forgot-password", "/verify-otp", "/reading-full"];

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
      <header className="fixed-header">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center group">
                <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-purple-600 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Book className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  ReadToon
                </span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  className="search-input block w-full pl-12 pr-4 py-3 text-sm"
                  placeholder="ค้นหานิยายหรือการ์ตูน..."
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <a href="#" className="nav-link text-sm">
                <BookOpen className="h-4 w-4 mr-2" />
                นิยาย
              </a>
              <a href="#" className="nav-link text-sm">
                <Book className="h-4 w-4 mr-2" />
                การ์ตูน
              </a>
              <a href="#" className="nav-link text-sm">
                <span className="text-base mr-2">🏆</span>
                จัดอันดับ
              </a>

              {/* Action Buttons */}
              <div className="flex items-center space-x-1 ml-4">
                <button
                  onClick={() => setIsReadingModeOpen(true)}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  title="การตั้งค่าการอ่าน"
                >
                  <Eye className="h-5 w-5" />
                </button>

                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  title="เปลี่ยนธีม"
                >
                  {theme === "light" ? (
                    <Moon className="h-5 w-5" />
                  ) : (
                    <Sun className="h-5 w-5" />
                  )}
                </button>

                {/* User Authentication */}
                {isAuthenticated && user ? (
                  <UserMenu />
                ) : (
                  <Link
                    href="/login"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg px-4 py-2 text-sm transition-colors"
                  >
                    เข้าสู่ระบบ
                  </Link>
                )}
              </div>
            </nav>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              <button className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors">
                <Search className="h-5 w-5" />
              </button>
              
              <button
                onClick={() => setIsReadingModeOpen(true)}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                <Eye className="h-5 w-5" />
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border mt-4">
              <div className="py-4 space-y-2">
                {/* Mobile Search */}
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <input
                    type="text"
                    className="search-input block w-full pl-12 pr-4 py-3 text-sm"
                    placeholder="ค้นหานิยายหรือการ์ตูน..."
                  />
                </div>

                {/* Mobile Navigation Links */}
                <a href="#" className="nav-link">
                  <BookOpen className="h-5 w-5 mr-3" />
                  นิยาย
                </a>
                <a href="#" className="nav-link">
                  <Book className="h-5 w-5 mr-3" />
                  การ์ตูน
                </a>
                <a href="#" className="nav-link">
                  <span className="text-lg mr-3">🏆</span>
                  จัดอันดับ
                </a>
                
                {/* Mobile Login Button */}
                {isAuthenticated && user ? (
                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                        alt={user.profile_name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {user.profile_name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          @{user.username}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg px-4 py-3 mt-4 transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    เข้าสู่ระบบ
                  </Link>
                )}
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
