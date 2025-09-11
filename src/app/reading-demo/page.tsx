'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from '@/components/FixedHeader';
import Footer from '@/components/Footer';
import QuickSettings from '@/components/QuickSettings';
import { ArrowLeft, BookOpen, Eye, Type, Palette } from 'lucide-react';
import Link from 'next/link';

// Mock content for reading demo
const demoContent = {
  title: "เทพธิดาแห่งความมืด",
  chapter: "ตอนที่ 245: การเผชิญหน้าครั้งสุดท้าย",
  author: "นักเขียนลึกลับ",
  content: [
    "แสงแดดยามเช้าส่องผ่านหน้าต่างขนาดใหญ่ของห้องสมุดโบราณ ทำให้ฝุ่นละอองที่ลอยอยู่ในอากาศเปล่งประกายดุจดาวเล็กๆ นับพัน เอเลน่านั่งอยู่ที่โต๊ะไม้โบราณ กำลังพลิกหน้าหนังสือเก่าแก่ที่เธอค้นพบในห้องใต้ดินของหอคอยนักเวทย์",
    
    "\"นี่คือสิ่งที่เราตามหามาตลอด\" เธอกระซิบกับตัวเอง ขณะที่นิ้วของเธอลื่นไปตามบรรทัดข้อความโบราณที่เขียนด้วยหมึกทอง คาถาการปลดปล่อยพลังแห่งความมืดที่ถูกปิดผนึกมากว่าพันปี",
    
    "ทันใดนั้น เสียงฝีเท้าดังก้องมาจากทางเดิน เอเลน่ารีบซ่อนหนังสือไว้ใต้เสื้อคลุม เธอรู้ดีว่าหากใครมาพบเธอที่นี่ในเวลานี้ ความลับทั้งหมดจะถูกเปิดเผย",
    
    "\"เอเลน่า คุณอยู่ที่นี่หรือ?\" เสียงของมาร์คัสดังขึ้น หัวหน้าผู้พิทักษ์หอคอยที่เธอเคารพและไว้วางใจมากที่สุด แต่ตอนนี้เธอไม่แน่ใจแล้วว่าใครคือพันธมิตรและใครคือศัตรู",
    
    "เธอเดินออกจากซอกหนังสือ ยิ้มให้กับมาร์คัสอย่างเป็นธรรมชาติ \"ข้าแค่มาหาหนังสือเกี่ยวกับประวัติศาสตร์โบราณ\" เธอตอบ พยายามทำเสียงให้ฟังดูสบายๆ",
    
    "แต่สายตาของมาร์คัสไม่ได้มองไปที่เธอ แต่จ้องไปที่มุมห้องที่เธอเพิ่งออกมา \"หนังสือเล่มไหนละ?\" เขาถาม น้ำเสียงเย็นชาผิดปกติ",
    
    "เอเลน่ารู้สึกได้ถึงความตึงเครียดในอากาศ หัวใจของเธอเต้นแรงขึ้น แต่เธอต้องรักษาความสงบเอาไว้ \"หนังสือเรื่องราชวงศ์โบราณ\" เธอพูดโกหกอย่างคล่องแคล่ว \"แต่ดูเหมือนจะไม่มีอะไรน่าสนใจ\"",
    
    "มาร์คัสเดินเข้ามาใกล้มากขึ้น เอเลน่าสามารถได้กลิ่นโลหะเหมือนเลือดจากเขา \"เอเลน่า\" เขาเอ่ยชื่อเธออย่างช้าๆ \"เรารู้ว่าเธอซ่อนอะไรอยู่\"",
    
    "ในพริบตา บรรยากาศในห้องเปลี่ยนไป เอเลน่ารู้สึกได้ถึงพลังมืดที่เริ่มคลื่นไส้รอบๆ ตัวมาร์คัส ตาของเขาเปลี่ยนเป็นสีแดงเข้ม และรอยยิ้มที่ไม่ใช่ของมนุษย์ปรากฏบนใบหน้าของเขา",
    
    "\"เธอไม่ใช่มาร์คัส...\" เอเลน่าถอยหลัง มือของเธอเรืองแสงฟ้าขณะเตรียมเสกคาถาป้องกัน \"เธอคือใคร?\"",
    
    "สิ่งมีชีวิตที่แปลงร่างเป็นมาร์คัสหัวเราะเสียงเฮือก \"ข้าคือผู้ที่จะทำลายโลกใบนี้ และเธอ... เธอจะเป็นกุญแจสำคัญในการปลดปล่อยนายของข้า\" มันพูดพร้อมกับยื่นมือออกมา พลังมืดที่น่าสะพรึงกลัวพวยพุ่งออกมา"
  ]
};

export default function ReadingDemo() {
  const [fontSize, setFontSize] = useState(18);
  const [lineHeight, setLineHeight] = useState(1.7);
  const [isEyeComfort, setIsEyeComfort] = useState(false);
  const [fontFamily, setFontFamily] = useState('thai');

  const applySettings = useCallback(() => {
    const root = document.documentElement;
    root.style.setProperty('--reading-font-size', `${fontSize}px`);
    root.style.setProperty('--reading-line-height', lineHeight.toString());
    
    if (isEyeComfort) {
      document.body.classList.add('eye-comfort');
    } else {
      document.body.classList.remove('eye-comfort');
    }
  }, [fontSize, lineHeight, isEyeComfort]);

  // Apply settings whenever they change
  useEffect(() => {
    applySettings();
  }, [applySettings]);

  return (
    <div className="min-h-screen bg-background transition-colors">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับสู่หน้าหลัก
          </Link>
        </div>

        {/* Reading Settings Panel */}
        <div className="bg-card rounded-lg border border-border p-6 mb-8 shadow-sm">
          <div className="flex items-center mb-4">
            <BookOpen className="w-5 h-5 text-primary mr-2" />
            <h2 className="text-xl font-semibold text-foreground">การตั้งค่าการอ่าน</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Font Size */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Type className="w-4 h-4 text-muted-foreground mr-2" />
                <label className="text-sm font-medium text-foreground">
                  ขนาดตัวอักษร: {fontSize}px
                </label>
              </div>
              <input
                type="range"
                min="14"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>เล็ก</span>
                <span>กลาง</span>
                <span>ใหญ่</span>
              </div>
            </div>

            {/* Line Height */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground flex items-center">
                <div className="w-4 h-4 mr-2 flex flex-col justify-between">
                  <div className="h-px bg-muted-foreground"></div>
                  <div className="h-px bg-muted-foreground"></div>
                  <div className="h-px bg-muted-foreground"></div>
                </div>
                ระยะห่างบรรทัด: {lineHeight}
              </label>
              <input
                type="range"
                min="1.4"
                max="2.2"
                step="0.1"
                value={lineHeight}
                onChange={(e) => setLineHeight(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>ชิด</span>
                <span>กลาง</span>
                <span>ห่าง</span>
              </div>
            </div>

            {/* Eye Comfort */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Eye className="w-4 h-4 text-muted-foreground mr-2" />
                โหมดถนอมสายตา
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isEyeComfort}
                  onChange={(e) => setIsEyeComfort(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
              </label>
              <p className="text-xs text-muted-foreground">
                ลดแสงสีฟ้าและปรับความสว่าง
              </p>
            </div>

            {/* Font Family */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Palette className="w-4 h-4 text-muted-foreground mr-2" />
                รูปแบบตัวอักษร
              </label>
              <select
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              >
                <option value="thai">Noto Sans Thai (แนะนำ)</option>
                <option value="reading">Noto Thai + Georgia</option>
                <option value="sans">Geist Sans</option>
                <option value="mono">Geist Mono</option>
              </select>
              <p className="text-xs text-muted-foreground">
                เลือกแบบอักษรที่เหมาะกับการอ่าน
              </p>
            </div>
          </div>
        </div>

        {/* Reading Content */}
        <article className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
          {/* Article Header */}
          <div className="bg-muted/50 px-6 py-4 border-b border-border">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              {demoContent.title}
            </h1>
            <div className="flex items-center text-muted-foreground text-sm">
              <span>{demoContent.chapter}</span>
              <span className="mx-2">•</span>
              <span>โดย {demoContent.author}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6">
            <div 
              className={`reading-text space-y-6 ${
                fontFamily === 'thai' ? 'font-thai' :
                fontFamily === 'reading' ? 'font-reading' :
                fontFamily === 'sans' ? 'font-sans' :
                fontFamily === 'mono' ? 'font-mono' : 'font-thai'
              }`}
              style={{
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight
              }}
            >
              {demoContent.content.map((paragraph, index) => (
                <p key={index} className="text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Article Footer */}
          <div className="bg-muted/50 px-6 py-4 border-t border-border">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>อ่านแล้ว 2,547 คำ</span>
              <span>เหลือประมาณ 5 นาที</span>
            </div>
          </div>
        </article>

        {/* Demo Instructions */}
        <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            🎯 วิธีการใช้งาน
          </h3>
          <ul className="space-y-2 text-foreground mb-6">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>ปรับขนาดตัวอักษรด้วยแถบเลื่อนด้านบน</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>เปลี่ยนระยะห่างบรรทัดตามความสะดวกของคุณ</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>เปิดโหมดถนอมสายตาสำหรับการอ่านยาวๆ</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>เลือกรูปแบบตัวอักษรที่เหมาะกับการอ่าน</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>ใช้ปุ่ม Quick Settings ที่มุมล่างขวาสำหรับการปรับแต่งเพิ่มเติม</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>สลับธีมสีได้ตลอดเวลาผ่านปุ่มที่ header</span>
            </li>
          </ul>

          <div className="border-t border-primary/20 pt-4">
            <h4 className="text-md font-medium text-foreground mb-3">
              📝 ตัวอย่างแบบอักษร
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-thai text-foreground">
                  <span className="text-primary font-medium">Noto Sans Thai:</span><br />
                  การอ่านนิยายภาษาไทยด้วยแบบอักษรที่เหมาะสม
                </p>
                <p className="font-reading text-foreground">
                  <span className="text-primary font-medium">Noto Thai + Georgia:</span><br />
                  การผสมผสานระหว่างภาษาไทยและ Serif สำหรับการอ่าน
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-sans text-foreground">
                  <span className="text-primary font-medium">Geist Sans:</span><br />
                  Modern sans-serif font for clean reading experience
                </p>
                <p className="font-mono text-foreground">
                  <span className="text-primary font-medium">Geist Mono:</span><br />
                  Fixed-width font for code or special content
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <QuickSettings />
    </div>
  );
}
