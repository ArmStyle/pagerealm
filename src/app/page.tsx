import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ContentCard from '@/components/ContentCard';
import RankingItem from '@/components/RankingItem';
import Footer from '@/components/Footer';
import QuickSettings from '@/components/QuickSettings';
import Link from 'next/link';

// Mock data for demonstration
const popularNovels = [
  {
    title: "เทพธิดาแห่งความมืด",
    author: "นักเขียนลึกลับ",
    genre: "แฟนตาซี",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    isNew: true,
    views: "125K",
    type: "novel" as const
  },
  {
    title: "รักนี้ในโลกมายากล",
    author: "ปากกาทอง",
    genre: "โรแมนซ์",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    views: "89K",
    type: "novel" as const
  },
  {
    title: "ดาบพิฆาตมาร",
    author: "อาจารย์ดาบ",
    genre: "แอคชั่น",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    views: "156K",
    type: "novel" as const
  },
  {
    title: "นักสืบเมืองปริศนา",
    author: "เชอร์ล็อคไทย",
    genre: "สืบสวน",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    views: "92K",
    type: "novel" as const
  }
];

const popularComics = [
  {
    title: "ฮีโร่โรงเรียนมัธยม",
    author: "อาร์ตไทย",
    genre: "ซูเปอร์ฮีโร่",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    isNew: true,
    views: "98K",
    type: "comic" as const
  },
  {
    title: "วัยรุ่นแวมไพร์",
    author: "ดาร์คอาร์ต",
    genre: "ดราม่า",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    views: "76K",
    type: "comic" as const
  },
  {
    title: "การ์ตูนตลกชีวิต",
    author: "คอมมิคเฮ้า",
    genre: "ตลก",
    rating: 4.4,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    views: "134K",
    type: "comic" as const
  },
  {
    title: "นักรบอนิเมะ",
    author: "มังงะมาสเตอร์",
    genre: "แอคชั่น",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    views: "189K",
    type: "comic" as const
  }
];

const novelRanking = [
  {
    rank: 1,
    title: "ดาบพิฆาตมาร",
    author: "อาจารย์ดาบ",
    views: "156K",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=60&h=80&fit=crop",
    change: "up" as const
  },
  {
    rank: 2,
    title: "เทพธิดาแห่งความมืด",
    author: "นักเขียนลึกลับ",
    views: "125K",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=60&h=80&fit=crop",
    change: "same" as const
  },
  {
    rank: 3,
    title: "นักสืบเมืองปริศนา",
    author: "เชอร์ล็อคไทย",
    views: "92K",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=60&h=80&fit=crop",
    change: "down" as const
  }
];

const latestUpdates = [
  {
    title: "เทพธิดาแห่งความมืด - ตอนที่ 245",
    author: "นักเขียนลึกลับ",
    genre: "แฟนตาซี",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    isNew: true,
    views: "12K",
    type: "novel" as const
  },
  {
    title: "ฮีโร่โรงเรียนมัธยม - ตอนที่ 89",
    author: "อาร์ตไทย",
    genre: "ซูเปอร์ฮีโร่",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
    isNew: true,
    views: "8K",
    type: "comic" as const
  },
  {
    title: "รักนี้ในโลกมายากล - ตอนที่ 156",
    author: "ปากกาทอง",
    genre: "โรแมนซ์",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    isNew: true,
    views: "15K",
    type: "novel" as const
  },
  {
    title: "นักรบอนิเมะ - ตอนที่ 67",
    author: "มังงะมาสเตอร์",
    genre: "แอคชั่น",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    isNew: true,
    views: "22K",
    type: "comic" as const
  }
];

export default function Home() {
  return (
    <div className="min-h-screen transition-all duration-300 page-transition">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        {/* Popular Novels Section */}
        <section className="content-section">
          <SectionHeader 
            title="นิยายยอดฮิต...ติดใจ" 
            emoji="🤩"
            viewAllLink="#"
            description="เรื่องราวที่ทุกคนหลงใหล อ่านแล้วติดตามต่อ"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {popularNovels.map((novel, index) => (
              <div key={index} className="stagger-item">
                <ContentCard {...novel} />
              </div>
            ))}
          </div>
        </section>

        {/* Popular Comics Section */}
        <section className="content-section">
          <SectionHeader 
            title="การ์ตูนยอดฮิต...ตลอดกาล" 
            emoji="🤩"
            viewAllLink="#"
            description="การ์ตูนคุณภาพสูงที่ไม่ควรพลาด"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {popularComics.map((comic, index) => (
              <div key={index} className="stagger-item">
                <ContentCard {...comic} />
              </div>
            ))}
          </div>
        </section>

        {/* Rankings Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="content-container p-8">
            <SectionHeader 
              title="จัดอันดับนิยาย" 
              emoji="🏆"
              viewAllLink="#"
            />
            <div className="space-y-3 mt-6">
              {novelRanking.map((item, index) => (
                <RankingItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <div className="content-container p-8">
            <SectionHeader 
              title="จัดอันดับการ์ตูน" 
              emoji="🏆"
              viewAllLink="#"
            />
            <div className="space-y-3 mt-6">
              {novelRanking.map((item, index) => (
                <RankingItem key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Random Picks Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="content-container p-8">
            <SectionHeader 
              title="นิยาย Random Picks!" 
              emoji="🧐"
              description="เรื่องน่าสนใจที่คัดสรรมาเพื่อคุณ"
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              {popularNovels.slice(0, 2).map((novel, index) => (
                <ContentCard key={index} {...novel} />
              ))}
            </div>
          </div>
          
          <div className="content-container p-8">
            <SectionHeader 
              title="การ์ตูน Random Picks!" 
              emoji="🧐"
              description="การ์ตูนแนะนำพิเศษ"
            />
            <div className="grid grid-cols-2 gap-4 mt-6">
              {popularComics.slice(0, 2).map((comic, index) => (
                <ContentCard key={index} {...comic} />
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="content-section">
          <SectionHeader 
            title="อัปเดตล่าสุด" 
            emoji="🆙"
            viewAllLink="#"
            description="ตอนใหม่ล่าสุดที่เพิ่งอัปเดต"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {latestUpdates.map((item, index) => (
              <div key={index} className="stagger-item">
                <ContentCard {...item} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12 bg-muted/50 rounded-2xl border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            พร้อมที่จะเริ่มการผจญภัยใหม่แล้วหรือยัง?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            สมัครสมาชิกวันนี้ และรับสิทธิพิเศษในการอ่านเนื้อหาครบถ้วน
          </p>
          <div className="space-x-4">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg transition-colors">
              สมัครสมาชิก
            </button>
            <Link
              href="/reading-demo"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
            >
              ทดลองอ่าน
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <QuickSettings />
    </div>
  );
}
