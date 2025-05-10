import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, Package, TableOfContents, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MobileNavbar from "../MobileNavBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const Sidebar = () => {
  const { logoutUser } = useAuth();
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Overview", href: "/dashboard/overview", icon: TableOfContents },
    { name: "Materials", href: "/dashboard", icon: Package },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col h-screen fixed bg-white border-r border-gray-200">
      <div className="text-2xl font-bold text-purple-600 p-6">Sugary Admin</div>
      <nav className="flex flex-col gap-1 px-4 flex-grow">
        {navItems.map((item) => {
          const isActive = currentPath === item.href;

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                isActive
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "text-purple-600 hover:bg-purple-50 hover:text-purple-800"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-4 border-t border-gray-100">
        <button
          onClick={() => logoutUser()}
          className="w-full bg-purple-600 text-center py-3 text-white text-sm font-medium 
          hover:bg-purple-700 hover:shadow-md active:scale-95 hover:scale-105 
          transition-transform duration-200 rounded-md"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};

export const Topbar = () => {
  const { logoutUser, auth } = useAuth();

  return (
    <div>
      <header className="flex items-center justify-between p-4 border-b border-purple-500 md:ml-64">
        <div className="md:hidden">
          <MobileNavbar />
        </div>
        <h1 className="text-xl font-semibold text-purple-500">
          Welcome to the dashboard!
        </h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full p-0"
              >
                <Avatar className="h-8 w-8 border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <AvatarImage
                    src={`https://d1wh1xji6f82aw.cloudfront.net/${auth?.User.Avatar}`}
                    alt="User profile"
                  />
                  <AvatarFallback className="bg-purple-100 text-purple-700 font-medium">
                    U
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 mt-6 bg-white border-white"
              align="end"
              forceMount
            >
              <DropdownMenuItem className="cursor-pointer hover:bg-purple-50">
                <User className="mr-2 h-4 w-4 text-purple-500" />
                <span>
                  <Link to={`/profile`}>Profile</Link>
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer text-red-600 hover:bg-red-50 focus:text-red-600"
                onClick={logoutUser}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};
