import React, { useState } from "react";
import MenuItem from "../MenuItem";

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <>
      <nav className="h-screen shadow-xl flex flex-col bg-white">
        <div className="w-64 text-white h-screen">
          <h2 className="text-black text-center">-</h2>
          <ul className="bg-blue-400">
            <MenuItem
              title="Diagnostic"
              open={openMenus.diagnostic}
              onToggle={() => toggleMenu("diagnostic")}
              subItems={[{ title: "Invoice" }, { title: "Due Collection" }]}
            />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
