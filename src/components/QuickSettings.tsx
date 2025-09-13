'use client';

import { Settings, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function QuickSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [lineHeight, setLineHeight] = useState(1.6);
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

  const toggleEyeComfort = () => {
    const root = document.documentElement;
    const newValue = !isEyeComfort;
    
    if (newValue) {
      root.classList.add('eye-comfort');
    } else {
      root.classList.remove('eye-comfort');
    }
    setIsEyeComfort(newValue);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Quick Settings Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 quick-settings-panel rounded-xl p-4 w-80 mb-2">
          <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
            <Eye className="h-4 w-4 mr-2 text-primary" />
            ปรับแต่งเพื่อสายตา
          </h3>
          
          <div className="space-y-4">
            {/* Theme Quick Switch */}
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                ธีม
              </label>
              <div className="flex space-x-2">
                <button
                  onClick={() => theme !== 'light' && toggleTheme()}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors flex-1 border ${
                    theme === 'light' 
                      ? 'settings-btn-active' 
                      : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
                  }`}
                >
                  ☀️ สว่าง
                </button>
                <button
                  onClick={() => theme !== 'dark' && toggleTheme()}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors flex-1 border ${
                    theme === 'dark' 
                      ? 'settings-btn-active' 
                      : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
                  }`}
                >
                  🌙 มืด
                </button>
              </div>
            </div>

            {/* Font Size */}
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                ขนาดตัวอักษร
              </label>
              <div className="grid grid-cols-4 gap-2">
                {['small', 'normal', 'large', 'xlarge'].map((size) => (
                  <button
                    key={size}
                    onClick={() => applyFontSize(size)}
                    className={`px-2 py-1 rounded text-xs transition-colors border ${
                      fontSize === size 
                        ? 'settings-btn-active' 
                        : 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80'
                    }`}
                  >
                    {size === 'small' ? 'A' : size === 'normal' ? 'A' : size === 'large' ? 'A' : 'A'}
                  </button>
                ))}
              </div>
            </div>

            {/* Line Height */}
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                ระยะห่างบรรทัด
              </label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setLineHeight(Math.max(1.2, lineHeight - 0.1))}
                  className="px-3 py-2 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 text-center text-card-foreground font-medium">
                  {lineHeight.toFixed(1)}
                </span>
                <button
                  onClick={() => setLineHeight(Math.min(2.0, lineHeight + 0.1))}
                  className="px-3 py-2 bg-secondary text-secondary-foreground border border-border rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  +
                </button>
              </div>
              <input
                type="range"
                min="1.2"
                max="2.0"
                step="0.1"
                value={lineHeight}
                onChange={(e) => setLineHeight(parseFloat(e.target.value))}
                className="w-full mt-2 accent-primary"
              />
            </div>

            {/* Eye Comfort */}
            <div>
              <label className="flex items-center justify-between p-3 bg-muted rounded-lg cursor-pointer border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm font-medium text-card-foreground">
                    โหมดถนอมสายตา
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={isEyeComfort}
                  onChange={toggleEyeComfort}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${
                  isEyeComfort ? 'bg-primary' : 'bg-border'
                }`}>
                  <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform mt-1 ml-1 ${
                    isEyeComfort ? 'translate-x-5' : ''
                  }`} />
                </div>
              </label>
            </div>

            {/* Quick Tips */}
            <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
              💡 <strong>เคล็ดลับ:</strong> กดปุ่ม Ctrl + หรือ - เพื่อปรับขนาดอย่างรวดเร็ว
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 rounded-full transition-all duration-200 flex items-center justify-center ${
          isOpen 
            ? 'quick-settings-button active rotate-45' 
            : 'quick-settings-button hover:bg-secondary'
        }`}
      >
        <Settings className="h-5 w-5" />
      </button>
    </div>
  );
}
