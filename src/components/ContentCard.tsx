import Image from 'next/image';

interface ContentCardProps {
  title: string;
  author: string;
  genre: string;
  rating: number;
  imageUrl: string;
  isNew?: boolean;
  views?: string;
  type: 'novel' | 'comic';
}

export default function ContentCard({ 
  title, 
  author, 
  genre, 
  rating, 
  imageUrl, 
  isNew = false, 
  views, 
  type 
}: ContentCardProps) {
  return (
    <div className="group cursor-pointer floating-card overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-300 eye-comfort-enhanced"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {isNew && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1.5 rounded-full font-semibold shadow-lg">
            ใหม่
          </div>
        )}
        <div className="absolute top-3 right-3 glass-card text-xs px-3 py-1.5 rounded-full font-medium">
          {type === 'novel' ? '📖' : '🎨'}
        </div>
        {views && (
          <div className="absolute bottom-3 right-3 glass-card text-xs px-3 py-1.5 rounded-full font-medium">
            👁️ {views}
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-card-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 text-sm leading-snug">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3 font-medium">โดย {author}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs glass-card text-foreground px-3 py-1.5 rounded-full font-medium">
            {genre}
          </span>
          
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-semibold text-foreground">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
