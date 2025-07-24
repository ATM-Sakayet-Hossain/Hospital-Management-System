import React, { useState } from "react";
import MenuItem from "./MenuItem";

const SideNavbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <div className="w-64 bg-green-700 text-white h-screen">
      <ul className="p-2">
        <MenuItem
          title="Diagnostic"
          open={openMenus.diagnostic}
          onToggle={() => toggleMenu("diagnostic")}
          subItems={[
            { title: "Invoice" },
            { title: "Due Collection" },
          ]}
        />
      </ul>
    </div>
  );
};
export default SideNavbar;
