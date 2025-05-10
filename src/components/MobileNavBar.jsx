import React, { useState } from 'react';
import { Menu, X, Home, Package, Users, Settings, ChevronRight } from 'lucide-react';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Materials', icon: Home, href: '/dashboard' },
    { name: 'Profile', icon: Package, href: '/dashboard/profile' },
    { name: 'Users', icon: Users, href: '/' },
    { name: 'OverView', icon: Settings, href: '/dashboard/overview' },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden mt-2 rounded-md text-purple-600 "
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full z-50 bg-white shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'w-[300px]' : 'w-0 overflow-hidden'
        } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="pt-16 px-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors"
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  <span>{item.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;