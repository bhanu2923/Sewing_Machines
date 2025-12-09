import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Brands', path: '/brands' },
    { name: 'Types', path: '/types' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="bg-[#047DAA] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          Delivery Only in AndhraPradesh
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://res.cloudinary.com/durbtkhbz/image/upload/v1765255577/logo_sewing_td6tcf.png" 
                alt="Murthy Sewing Machines" 
                className="h-14 w-auto"
              />
              <span className="text-xl font-bold text-[#c54513] hidden md:block">
                Murthy Sewing Machines
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-[#c54513] border-b-2 border-[#c54513]'
                      : 'text-gray-700 hover:text-[#c54513]'
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#c54513] transition-colors">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-[#c54513] transition-colors">
              <ShoppingCart size={20} />
            </button>
            <button
              className="lg:hidden text-gray-700 hover:text-[#c54513] transition-colors"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.path)
                      ? 'bg-gray-100 text-[#c54513]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#c54513]'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
