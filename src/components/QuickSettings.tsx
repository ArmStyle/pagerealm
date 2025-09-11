'use client';

import { Settings, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function QuickSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [contrast, setContrast] = useState('normal');
  const [isEyeComfort, setIsEyeComfort] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  const applyFontSize = (size: string) => {
    const root = document.documentElement;
    const sizes = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px'
    };
    root.style.setProperty('--global-font-size', sizes[size as keyof typeof sizes]);
    setFontSize(size);
  };

  const applyContrast = (level: string) => {
    const root = document.documentElement;
    root.classList.remove('contrast-low', 'contrast-normal', 'contrast-high');
    if (level !== 'normal') {
      root.classList.add(`contrast-${level}`);
    }
    setContrast(level);
  };

  const toggleEyeComfort = () => {
    const root = document.documentElement;
    if (isEyeComfort) {
      root.classList.remove('eye-comfort');
    } else {
      root.classList.add('eye-comfort');
    }
    setIsEyeComfort(!isEyeComfort);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Settings Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 w-80 mb-2">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Eye className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
            ปรับแต่งเพื่อสายตา
          </h3>
          
          <div className="space-y-4">
            {/* Theme Quick Switch */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                ธีม
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => theme !== 'light' && toggleTheme()}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors flex-1 ${
                    theme === 'light' 
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  ☀️ สว่าง
                </button>
                <button
                  onClick={() => theme !== 'dark' && toggleTheme()}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors flex-1 ${
                    theme === 'dark' 
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  🌙 มืด
                </button>
              </div>
            </div>

            {/* Font Size */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                ขนาดตัวอักษร
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['small', 'normal', 'large', 'xlarge'].map((size) => (
                  <button
                    key={size}
                    onClick={() => applyFontSize(size)}
                    className={`px-2 py-1 rounded text-xs transition-colors ${
                      fontSize === size 
                        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {size === 'small' ? 'A' : size === 'normal' ? 'A' : size === 'large' ? 'A' : 'A'}
                  </button>
                ))}
              </div>
            </div>

            {/* Contrast */}
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                ความเข้มข้น
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['low', 'normal', 'high'].map((level) => (
                  <button
                    key={level}
                    onClick={() => applyContrast(level)}
                    className={`px-2 py-1 rounded text-xs transition-colors ${
                      contrast === level 
                        ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {level === 'low' ? 'อ่อน' : level === 'normal' ? 'ปกติ' : 'เข้ม'}
                  </button>
                ))}
              </div>
            </div>

            {/* Eye Comfort */}
            <div>
              <button
                onClick={toggleEyeComfort}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  isEyeComfort 
                    ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' 
                    : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                } border`}
              >
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    โหมดถนอมสายตา
                  </span>
                </div>
                <div className={`w-8 h-4 rounded-full transition-colors ${
                  isEyeComfort ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                }`}>
                  <div className={`w-3 h-3 bg-white rounded-full shadow-sm transition-transform mt-0.5 ml-0.5 ${
                    isEyeComfort ? 'translate-x-4' : ''
                  }`} />
                </div>
              </button>
            </div>

            {/* Quick Tips */}
            <div className="text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 p-2 rounded">
              💡 <strong>เคล็ดลับ:</strong> กดปุ่ม Ctrl + หรือ - เพื่อปรับขนาดอย่างรวดเร็ว
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
          isOpen 
            ? 'bg-indigo-600 text-white rotate-45' 
            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
        } border border-gray-200 dark:border-gray-700`}
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
}
