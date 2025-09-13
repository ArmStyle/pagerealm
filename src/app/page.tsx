import HeroCarousel from '@/components/HeroCarousel';
import SectionHeader from '@/components/SectionHeader';
import ContentCarousel from '@/components/ContentCarousel';
import Footer from '@/components/Footer';

// Type definitions
interface ContentItem {
  title: string;
  author: string;
  genre: string;
  rating: number;
  imageUrl: string;
  isNew?: boolean;
  views: string;
  type: 'novel' | 'comic';
}

// Mock data for demonstration
const generateMoreContent = (baseItems: ContentItem[], count: number): ContentItem[] => {
  const result = [...baseItems];
  while (result.length < count) {
    const randomItem = baseItems[Math.floor(Math.random() * baseItems.length)];
    result.push({
      ...randomItem,
      title: `${randomItem.title} (${result.length + 1})`,
      views: `${Math.floor(Math.random() * 200) + 50}K`,
      rating: +(Math.random() * 1.5 + 3.5).toFixed(1),
    });
  }
  return result;
};

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
  },
  {
    title: "มหาศึกนักรบเวทย์",
    author: "นักเขียนเวทมนตร์",
    genre: "แฟนตาซี",
    rating: 4.5,
    imageUrl: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=300&h=400&fit=crop",
    views: "178K",
    type: "novel" as const
  },
  {
    title: "จักรพรรดิแห่งดาว",
    author: "อวกาศนิยาย",
    genre: "ไซไฟ",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=400&fit=crop",
    views: "143K",
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
  },
  {
    title: "เทพนักสู้มังงะ",
    author: "บาตเติลอาร์ต",
    genre: "แอคชั่น",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1612833365173-418b3e38426b?w=300&h=400&fit=crop",
    views: "201K",
    type: "comic" as const
  },
  {
    title: "โลกแห่งสีสัน",
    author: "สีสันมาสเตอร์",
    genre: "ผจญภัย",
    rating: 4.3,
    imageUrl: "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=300&h=400&fit=crop",
    views: "167K",
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

// Featured content for hero carousel
const heroItems = [
  {
    id: "1",
    title: "เทพธิดาแห่งความมืด",
    author: "นักเขียนลึกลับ",
    description: "เมื่อโลกตกอยู่ในความมืดมิด เทพธิดาผู้ยิ่งใหญ่จะต้องลุกขึ้นมาต่อสู้เพื่อปกป้องมนุษยชาติ ในการผจญภัยที่จะเปลี่ยนแปลงชะตากรรมของทุกคน",
    genre: "แฟนตาซี",
    rating: 4.8,
    views: "125K",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=600&fit=crop",
    isNew: true,
    chapters: 89,
    lastUpdate: "2 ชั่วโมงที่แล้ว",
    type: "novel" as const
  },
  {
    id: "2", 
    title: "ดาบพิฆาตมาร",
    author: "อาจารย์ดาบ",
    description: "นักรบผู้ถือดาบศักดิ์สิทธิ์ออกเดินทางเพื่อกำจัดปีศาจร้ายที่คุกคามโลก ด้วยพลังที่ซ่อนเร้นและเทคนิคการต่อสู้อันลึกลับ",
    genre: "แอคชั่น",
    rating: 4.9,
    views: "203K",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1520637836862-4d197d17c7a4?w=1200&h=600&fit=crop",
    chapters: 156,
    lastUpdate: "1 วันที่แล้ว",
    type: "novel" as const
  },
  {
    id: "3",
    title: "นักรบอนิเมะ",
    author: "มังงะมาสเตอร์", 
    description: "โลกแห่งการต่อสู้ที่นักรบต้องใช้พลังพิเศษในการปกป้องโลก การผจญภัยที่เต็มไปด้วยแอคชั่นและมิตรภาพอันแน่นแฟ้น",
    genre: "แอคชั่น",
    rating: 4.7,
    views: "189K",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
    bgImageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=600&fit=crop",
    isNew: true,
    chapters: 67,
    lastUpdate: "3 ชั่วโมงที่แล้ว",
    type: "comic" as const
  }
];

export default function Home() {
  // Generate 24 items for each category
  const extendedNovels = generateMoreContent(popularNovels, 24);
  const extendedComics = generateMoreContent(popularComics, 24);
  const extendedUpdates = generateMoreContent(latestUpdates, 24);

  return (
    <div className="min-h-screen transition-all duration-300 page-transition no-scrollbar-x">
      {/* Hero Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 container-safe">
        <HeroCarousel 
          items={heroItems}
          autoplay={true}
          autoplayDelay={8000}
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 container-safe">
        <div className="space-y-6 sm:space-y-8">
            <SectionHeader 
              title="นิยายยอดฮิต...ติดใจ" 
              emoji="🤩"
              viewAllLink="#"
              description="เรื่องราวที่ทุกคนหลงใหล อ่านแล้วติดตามต่อ"
            />
            <div className="w-full carousel-container">
              <ContentCarousel 
                items={extendedNovels}
                itemsPerSlide={{ mobile: 2, tablet: 3, desktop: 6 }}
                autoplayDelay={4000}
              />
            </div>
          </div>
      </section>
      
        {/* Popular Novels Section */}
        {/* <section className="max-w-7xl md:mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 content-section overflow-hidden">
          <div className="space-y-6 sm:space-y-8">
            <SectionHeader 
              title="นิยายยอดฮิต...ติดใจ" 
              emoji="🤩"
              viewAllLink="#"
              description="เรื่องราวที่ทุกคนหลงใหล อ่านแล้วติดตามต่อ"
            />
            <div className="w-full">
              <ContentCarousel 
                items={extendedNovels}
                itemsPerSlide={{ mobile: 2, tablet: 3, desktop: 6 }}
                autoplayDelay={4000}
              />
            </div>
          </div>
        </section> */}

        {/* Popular Comics Section */}
        {/* <section className="content-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <SectionHeader 
              title="การ์ตูนยอดฮิต...ตลอดกาล" 
              emoji="🤩"
              viewAllLink="#"
              description="การ์ตูนคุณภาพสูงที่ไม่ควรพลาด"
            />
            <div className="w-full">
              <ContentCarousel 
                items={extendedComics}
                itemsPerSlide={{ mobile: 2, tablet: 3, desktop: 6 }}
                autoplay={true}
                autoplayDelay={5000}
              />
            </div>
          </div>
        </section> */}

        {/* Rankings Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="content-container p-6 sm:p-8">
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
            
            <div className="content-container p-6 sm:p-8">
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
          </div>
        </section> */}

        {/* Random Picks Section */}
        {/* <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="content-container p-6 sm:p-8">
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
            
            <div className="content-container p-6 sm:p-8">
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
          </div>
        </section> */}

        {/* Latest Updates Section */}
        {/* <section className="content-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
            <SectionHeader 
              title="อัปเดตล่าสุด" 
              emoji="🆙"
              viewAllLink="#"
              description="ตอนใหม่ล่าสุดที่เพิ่งอัปเดต"
            />
            <div className="w-full">
              <ContentCarousel 
                items={extendedUpdates}
                itemsPerSlide={{ mobile: 2, tablet: 3, desktop: 6 }}
              />
            </div>
          </div>
        </section> */}

        {/* Call to Action 
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-8 sm:py-12 bg-muted/50 rounded-2xl border border-border">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              พร้อมที่จะเริ่มการผจญภัยใหม่แล้วหรือยัง?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              สมัครสมาชิกวันนี้ และรับสิทธิพิเศษในการอ่านเนื้อหาครบถ้วน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-medium text-base sm:text-lg transition-colors">
                สมัครสมาชิก
              </button>
              <Link
                href="/reading-demo"
                className="w-full sm:w-auto text-center border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 rounded-lg font-medium text-base sm:text-lg transition-colors inline-block"
              >
                ทดลองอ่าน
              </Link>
            </div>
          </div>
        </section> */}

      <Footer />
    </div>
  );
}
