interface SectionHeaderProps {
  title: string;
  emoji: string;
  viewAllLink?: string;
  description?: string;
}

export default function SectionHeader({ title, emoji, viewAllLink, description }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
          <span className="text-3xl mr-3">{emoji}</span>
          {title}
        </h2>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        )}
      </div>
      {viewAllLink && (
        <a 
          href={viewAllLink}
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm hover:underline transition-colors"
        >
          ดูทั้งหมด →
        </a>
      )}
    </div>
  );
}
