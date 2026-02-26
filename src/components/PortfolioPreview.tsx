import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function PortfolioPreview() {
  const projects = [
    {
      title: 'Studio user research and analysis',
      description: 'In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.',
      company: 'studio',
      tag: 'UI/UX Design',
      bgColor: 'bg-neo-purple',
      image: 'https://picsum.photos/seed/studio/800/600'
    },
    {
      title: 'Venture Workspace web app redesign',
      description: 'In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.',
      company: 'venture',
      tag: 'UI/UX Design',
      bgColor: 'bg-neo-blue',
      image: 'https://picsum.photos/seed/venture/800/600'
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          Take a look at my<br />
          <span className="bg-neo-yellow text-black px-2 py-1 inline-block mt-2">design portfolio</span>
        </h2>
      </div>

      <div className="space-y-12 mb-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-[2rem] neo-border-thick neo-shadow overflow-hidden flex flex-col md:flex-row neo-shadow-hover transition-transform">
            <div className="p-12 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-neo-purple flex items-center justify-center text-white font-bold neo-border">
                  {project.company[0].toUpperCase()}
                </div>
                <span className="font-display font-bold text-xl">{project.company}</span>
              </div>
              <div className="mb-6">
                <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">{project.tag}</span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">{project.title}</h3>
              <p className="text-gray-600 font-sans mb-8">{project.description}</p>
              <Link to="/project" className="font-display font-bold flex items-center gap-2 hover:text-neo-blue transition-colors">
                View case study <ArrowRight size={16} />
              </Link>
            </div>
            <div className={`flex-1 ${project.bgColor} p-12 flex items-center justify-center border-t-4 md:border-t-0 md:border-l-4 border-black`}>
              <div className="bg-white rounded-xl neo-border-thick neo-shadow w-full aspect-video overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/projects" className="bg-black text-white px-8 py-4 rounded-xl font-display font-bold inline-flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors neo-shadow-hover">
          <ImageIcon size={20} />
          Browse all portfolio
        </Link>
      </div>
    </section>
  );
}
