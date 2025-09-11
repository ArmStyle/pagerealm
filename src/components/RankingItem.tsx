import Image from 'next/image';

interface RankingItemProps {
  rank: number;
  title: string;
  author: string;
  views: string;
  imageUrl: string;
  change?: 'up' | 'down' | 'same';
}

export default function RankingItem({ rank, title, author, views, imageUrl, change }: RankingItemProps) {
  const getRankStyle = (rank: number) => {
    if (rank === 1) return 'bg-yellow-400 text-yellow-900';
    if (rank === 2) return 'bg-gray-300 text-gray-800';
    if (rank === 3) return 'bg-orange-400 text-orange-900';
    return 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300';
  };

  const getChangeIcon = (change?: 'up' | 'down' | 'same') => {
    if (change === 'up') return '📈';
    if (change === 'down') return '📉';
    return '➖';
  };

  return (
    <div className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-md dark:shadow-gray-900/20 transition-shadow">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankStyle(rank)}`}>
        {rank}
      </div>
      
      <div className="w-12 h-16 flex-shrink-0 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded"
          sizes="48px"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-gray-900 dark:text-white truncate">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 truncate">โดย {author}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">👁️ {views}</p>
      </div>
      
      {change && (
        <div className="text-lg">
          {getChangeIcon(change)}
        </div>
      )}
    </div>
  );
}
