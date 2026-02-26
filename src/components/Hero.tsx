import { Mail, Folder } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1">
        <h1 className="text-6xl md:text-[80px] font-display font-bold leading-[1.1] mb-8 tracking-tight">
          I'm <span className="bg-[#f07178] text-white px-4 py-1 inline-block">John Carter</span>,<br />
          a Web Designer<br />
          from <span className="bg-[#4d7cff] text-white px-4 py-1 inline-block">New York</span>
        </h1>
        <p className="text-gray-800 font-sans mb-10 max-w-md text-lg leading-relaxed">
          Lacus, adipiscing lectus convallis purus aliquet cursus magnaol montes augue donec cras turpis ultrices nulla sed dolor.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/contact" className="bg-[#0f0f0f] text-white px-8 py-4 rounded-2xl font-display font-bold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-lg">
            <Mail size={18} />
            Get in touch
          </Link>
          <Link to="/projects" className="bg-white text-black px-8 py-4 rounded-2xl font-display font-bold flex items-center justify-center gap-3 border-2 border-black hover:bg-gray-50 transition-colors text-lg">
            <Folder size={18} />
            View portfolio
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-full max-w-md bg-[#ffca3a] rounded-[2rem] border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden aspect-square relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="https://picsum.photos/seed/avatar/600/600" 
              alt="John Carter" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
