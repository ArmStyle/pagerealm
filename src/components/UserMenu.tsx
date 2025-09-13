"use client";

import { useState, useRef, useEffect } from 'react';
import { User, Settings, History, Clock, Bookmark, Users, LogOut, Wallet, CreditCard } from 'lucide-react';
import { useUserStore } from '@/store/useUserStore';
import { AuthService } from '@/lib/auth-service';
import { Button } from './ui/Button';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout } = useUserStore();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) return null;

  const menuItems = [
    {
      icon: Wallet,
      label: 'กระเป๋าเงินของฉัน',
      description: '฿0.00',
      href: '/wallet'
    },
    {
      icon: CreditCard,
      label: 'หน้าเก็บเงินของฉัน',
      href: '/payment'
    },
    {
      icon: Bookmark,
      label: 'หน้าที่เก็บ',
      href: '/bookmarks'
    },
    {
      icon: History,
      label: 'อันดับล่าสุด',
      href: '/recent'
    },
    {
      icon: Clock,
      label: 'ประวัติการอ่าน',
      href: '/history'
    },
    {
      icon: Users,
      label: 'ติดตามแอดมิน',
      href: '/follow'
    },
    {
      icon: Settings,
      label: 'การตั้งค่า',
      href: '/settings'
    },
    {
      icon: Users,
      label: 'แนะนำเพื่อน',
      href: '/referral'
    }
  ];

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-1 rounded-full hover:bg-muted transition-colors"
      >
        <div className="relative">
          <img
            src={user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
            alt={user.profile_name}
            className="w-8 h-8 rounded-full border-2 border-primary/20"
          />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
          {/* User Info */}
          <div className="p-4 border-b border-border">
            <div className="flex items-center space-x-3">
              <img
                src={user.profile_picture || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`}
                alt={user.profile_name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">
                  {user.profile_name}
                </h3>
                <p className="text-sm text-muted-foreground truncate">
                  @{user.username}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-yellow-600">฿0.00</div>
                <Button size="sm" className="text-xs">
                  เติมเครดิต
                </Button>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center px-4 py-3 hover:bg-muted transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary mr-3" />
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>

          {/* Logout */}
          <div className="border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 hover:bg-muted transition-colors group text-red-600 hover:text-red-700"
            >
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">ออกจากระบบ</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
