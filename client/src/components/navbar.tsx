import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  // Disable scrolling when the menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <header className="relative">
      <div className="container flex items-center h-[80px] px-4 py-6 justify-between">
        <NavLink to={"/"}>
          <h3 className="text-[#156b2c] text-center text-lg font-bold m-0">
            <span className="text-[#31ff38]">music</span> events
          </h3>
        </NavLink>

        {/* MobileMenu */}
        <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X /> : <Menu />}
        </div>

        {openMenu && (
          <div className="absolute mt-[80px] top-0 left-0 z-50 w-full h-[50vh] flex flex-col items-center gap-y-3 bg-green-200 py-6 transition-all duration-300">
            <NavLink
              to={"/"}
              className={cn(
                `text-[#156b2c] font-bold ${
                  pathname === "/" && "text-[#31ff38]"
                }`
              )}
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to={"/contact"}
              className={cn(
                `text-[#156b2c] font-bold ${
                  pathname === "/contact" && "text-[#31ff38]"
                }`
              )}
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
        <div className="hidden md:flex items-center gap-x-2">
          <NavLink
            to={"/"}
            className={cn(
              `text-[#156b2c] font-bold ${pathname === "/" && "text-[#31ff38]"}`
            )}
          >
            Home
          </NavLink>
          <NavLink
            to={"/contact"}
            className={cn(
              `text-[#156b2c] font-bold ${
                pathname === "/contact" && "text-[#31ff38]"
              }`
            )}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
