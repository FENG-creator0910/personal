import { Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white text-black p-8 rounded-3xl neo-border-thick neo-shadow mb-16">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="w-16 h-16 bg-neo-blue rounded-full border-4 border-black flex items-center justify-center neo-shadow-sm">
              <Mail size={24} className="text-white" />
            </div>
            <h3 className="font-display font-bold text-2xl">Subscribe to my newsletter</h3>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded-l-xl border-2 border-black border-r-0 focus:outline-none w-full md:w-64 font-sans"
            />
            <button className="bg-black text-white px-8 py-4 rounded-r-xl font-display font-bold hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="font-display font-bold text-xl">Paperfolio X</span>
            </div>
            <p className="text-gray-400 mb-6 font-sans text-sm">
              Lorem ipsum dolor sit amet consecte adipiscing elit. Lectus mattis nunc.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition-colors"><Facebook size={16} className="text-white" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-300 transition-colors"><Twitter size={16} className="text-white" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-500 transition-colors"><Instagram size={16} className="text-white" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center hover:bg-red-500 transition-colors"><Youtube size={16} className="text-white" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors"><Linkedin size={16} className="text-white" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400 font-sans text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/project" className="hover:text-white transition-colors">Single Project</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Utility Pages</h4>
            <ul className="space-y-2 text-gray-400 font-sans text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Start Here</a></li>
              <li><a href="#" className="hover:text-white transition-colors">404 Not Found</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Password protected</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact us</h4>
            <ul className="space-y-2 text-gray-400 font-sans text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:nikhil@helpinggeeks.com" className="hover:text-white transition-colors">nikhil@helpinggeeks.com</a>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <a href="tel:+91-9000057810" className="hover:text-white transition-colors">+91-9000057810</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-sans">
          Made by Nikhil - Powered by VO
        </div>
      </div>
    </footer>
  );
}
