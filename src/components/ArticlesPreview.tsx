import { Link } from 'react-router-dom';
import { Edit3 } from 'lucide-react';

export default function ArticlesPreview() {
  const articles = [
    {
      title: 'What is the right design tool to choose in 2023?',
      author: 'John Carter',
      date: 'Oct 28, 2022',
      category: 'Resources',
      image: 'https://picsum.photos/seed/tool/600/400',
      featured: true
    },
    {
      title: 'Font sizes in UI design: The complete guide to follow',
      description: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus',
      category: 'Articles',
      image: 'https://picsum.photos/seed/font/300/200',
      featured: false
    },
    {
      title: '6 practical exercises to learn become a pro UI/UX designer',
      description: 'Lorem ipsum dolor sit amet dolor consectetur adipiscing elit ectus',
      category: 'News',
      image: 'https://picsum.photos/seed/exercise/300/200',
      featured: false
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold">Articles & News</h2>
        <Link to="/articles" className="bg-white text-black px-8 py-4 rounded-xl font-display font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors neo-border neo-shadow-hover">
          <Edit3 size={20} />
          Browse all articles
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Featured Article */}
        <div className="bg-white rounded-3xl neo-border-thick neo-shadow overflow-hidden flex flex-col neo-shadow-hover transition-transform">
          <div className="relative h-64 bg-gray-100 border-b-4 border-black p-6">
            <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover rounded-xl neo-border" referrerPolicy="no-referrer" />
            <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
              {articles[0].category}
            </span>
          </div>
          <div className="p-8 flex-1 flex flex-col justify-between">
            <h3 className="text-2xl font-display font-bold mb-6 hover:text-neo-blue transition-colors cursor-pointer">
              {articles[0].title}
            </h3>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/avatar/100/100" alt={articles[0].author} className="w-12 h-12 rounded-full neo-border" referrerPolicy="no-referrer" />
              <div>
                <p className="font-display font-bold text-sm">{articles[0].author}</p>
                <p className="text-gray-500 font-sans text-xs">{articles[0].date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="flex flex-col gap-8">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="bg-white rounded-3xl neo-border-thick neo-shadow overflow-hidden flex flex-col sm:flex-row neo-shadow-hover transition-transform h-full">
              <div className="relative w-full sm:w-48 bg-gray-100 border-b-4 sm:border-b-0 sm:border-r-4 border-black p-4 flex-shrink-0">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover rounded-xl neo-border" referrerPolicy="no-referrer" />
                <span className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-xl font-display font-bold mb-3 hover:text-neo-blue transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 font-sans text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
