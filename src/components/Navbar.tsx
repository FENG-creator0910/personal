import { Link, useLocation } from 'react-router-dom';
import { Mail, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/projects' },
    { name: 'Articles', path: '/articles' },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="bg-white neo-border-thick rounded-full flex items-center px-6 py-3 neo-shadow-sm w-full max-w-3xl justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border-4 border-black flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6 font-display font-bold text-sm">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-neo-blue transition-colors ${path === link.path ? 'text-neo-blue' : 'text-black'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="font-display font-bold text-sm hidden sm:block hover:text-neo-blue transition-colors">
            Cart(0)
          </button>
          <button className="bg-black text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
            <Mail size={18} />
          </button>
        </div>
      </nav>
    </div>
  );
}
