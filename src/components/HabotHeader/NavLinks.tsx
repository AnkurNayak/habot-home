import { useState } from "react";
import { HiBars3, HiMiniChevronDown } from "react-icons/hi2";
import { motion } from "framer-motion";
/* Routes:stateic*/
const routes = [
  { route: "Find Suppliers" },
  {
    route: "Find Service Tags",
    subRoutes: [{ route: "Sub route 1" }, { route: "Sub route 2" }],
  },
];
/* Main component */
const NavLinks = () => {
  return (
    <div>
      <NavHorizontal />
      <NavVertical />
    </div>
  );
};

const NavHorizontal = () => {
  return (
    <div className="hidden md:flex items-center space-x-2">
      {routes.map((route, index) => (
        <div
          key={index}
          className="flex items-center text-accent-text w-40 text-base space-x-2"
        >
          <div className="hover:bg-gray-100 px-2 py-1 rounded-full min-w-fit cursor-pointer flex items-center justify-center font-normal">
            <div>{route.route}</div>
            <div>
              {route.subRoutes && route.subRoutes.length > 0 && (
                <HiMiniChevronDown size={16} className="text-icon" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NavVertical = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen((pv) => !pv);
  return (
    <div className="relative md:hidden">
      <button
        className="h-10 w-10 flex items-center justify-center hover:bg-gray-100 rounded-full"
        onClick={toggleNav}
      >
        <HiBars3 size={24} />
      </button>
      {isNavOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.3, damping: 1 }}
          className="absolute top-14 shadow-custom min-w-60 bg-white rounded-md overflow-hidden"
        >
          {routes.map((route, index) => (
            <div
              key={index}
              className="flex items-center text-accent-text text-base"
            >
              <div
                className="hover:bg-gray-100 p-2 w-full cursor-pointer flex items-center font-normal justify-between"
                // onClick={() => setIsNavOpen(false)}
              >
                <div>{route.route}</div>
                <div>
                  {route.subRoutes && route.subRoutes.length > 0 && (
                    <HiMiniChevronDown size={16} className="text-icon" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default NavLinks;
