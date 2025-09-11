'use client';

import { Eye, EyeOff, Type } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ReadingModeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReadingMode({ isOpen, onClose }: ReadingModeProps) {
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.6);
  const [isEyeComfort, setIsEyeComfort] = useState(false);

  // ป้องกันการ scroll ของหน้าจอหลักเมื่อ modal เปิด
  useEffect(() => {
    if (isOpen) {
      // เก็บค่า overflow เดิมไว้
      const originalStyle = window.getComputedStyle(document.body).overflow;
      // ปิดการ scroll
      document.body.style.overflow = 'hidden';
      
      return () => {
        // คืนค่าเดิมเมื่อปิด modal
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  const applySettings = () => {
    const root = document.documentElement;
    root.style.setProperty('--reading-font-size', `${fontSize}px`);
    root.style.setProperty('--reading-line-height', lineHeight.toString());
    
    if (isEyeComfort) {
      root.classList.add('eye-comfort');
    } else {
      root.classList.remove('eye-comfort');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="h-[100vh] fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl w-full max-w-md max-h-[90vh] shadow-2xl border border-white/20 flex flex-col">
        <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Eye className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400" />
            การตั้งค่าสำหรับการอ่าน
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <div className="space-y-6">
          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              <Type className="h-4 w-4 inline mr-2" />
              ขนาดตัวอักษร
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setFontSize(Math.max(12, fontSize - 2))}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                A-
              </button>
              <span className="flex-1 text-center text-gray-900 dark:text-white font-medium">
                {fontSize}px
              </span>
              <button
                onClick={() => setFontSize(Math.min(24, fontSize + 2))}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                A+
              </button>
            </div>
            <input
              type="range"
              min="12"
              max="24"
              step="2"
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value))}
              className="w-full mt-2"
            />
          </div>

          {/* Line Height */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              ระยะห่างบรรทัด
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setLineHeight(Math.max(1.2, lineHeight - 0.2))}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                -
              </button>
              <span className="flex-1 text-center text-gray-900 dark:text-white font-medium">
                {lineHeight.toFixed(1)}
              </span>
              <button
                onClick={() => setLineHeight(Math.min(2.0, lineHeight + 0.2))}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
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
              className="w-full mt-2"
            />
          </div>

          {/* Eye Comfort Mode */}
          <div>
            <label className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer">
              <div className="flex items-center">
                <EyeOff className="h-5 w-5 mr-3 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    โหมดถนอมสายตา
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    ลดความเข้มของสีและแสง
                  </div>
                </div>
              </div>
              <input
                type="checkbox"
                checked={isEyeComfort}
                onChange={(e) => setIsEyeComfort(e.target.checked)}
                className="sr-only"
              />
              <div className={`w-11 h-6 rounded-full transition-colors ${
                isEyeComfort ? 'bg-indigo-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform mt-1 ml-1 ${
                  isEyeComfort ? 'translate-x-5' : ''
                }`} />
              </div>
            </label>
          </div>

          {/* Reading Tips */}
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-200 mb-2">
              💡 เคล็ดลับการอ่านที่ดีต่อสายตา
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
              <li>• พักสายตาทุก 20 นาที</li>
              <li>• ปรับแสงห้องให้เหมาะสม</li>
              <li>• นั่งห่างจากหน้าจอ 50-60 ซม.</li>
              <li>• กะพริบตาบ่อยๆ เพื่อความชุ่มชื้น</li>
            </ul>
          </div>

          {/* Apply Button */}
          <button
            onClick={() => {
              applySettings();
              onClose();
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition-colors"
          >
            ใช้การตั้งค่า
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
