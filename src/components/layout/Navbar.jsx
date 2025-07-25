import React, { useState } from "react";
import MenuItem from "../MenuItem";

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => {
      return prev[menu]
        ? {}
        : { [menu]: true };
    });
  };

  return (
    <>
      <nav className="max-h-[95vh] shadow-xl flex flex-col bg-white">
        <div className="w-64 text-white overflow-y-auto scrollbar-none">
          <h2 className="text-black text-center">-</h2>
          <ul className="bg-blue-400 scroll-y-auto scroll-smooth">
            <MenuItem
              title="Diagnostic"
              open={openMenus.diagnostic}
              onToggle={() => toggleMenu("diagnostic")}
              subItems={[{ title: "Invoice", to: "/DiagnosisInvoice" }, { title: "Due Collection", to: "/"}]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[{ title: "Invoice", to: "/" }, { title: "Due Collection", to: "/" }]}
            />
          </ul>
          <h2 className="text-black text-center">-</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
