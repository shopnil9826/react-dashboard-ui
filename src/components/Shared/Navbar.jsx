import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Home,
  Package,
  Users,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { name: "Home", icon: Home, href: "/" },
    { name: "Profile", icon: Package, href: "/profile" },
    { name: "Users", icon: Users, href: "/" },
    { name: "Dashboard", icon: Settings, href: "/dashboard" },
  ];
  return (
    <header className="bg-white border-b shadow-sm px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold text-purple-600">
          Sugary
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((link) => (
            <Link
              key={link.to}
              to={link.href}
              className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col space-y-2 mt-10">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-600 transition-colors"
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3" />
                      <span>{item.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
