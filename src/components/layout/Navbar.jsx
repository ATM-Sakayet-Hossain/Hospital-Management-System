import React, { useState } from "react";
import MenuItem from "../MenuItem";

const Navbar = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => {
      return prev[menu] ? {} : { [menu]: true };
    });
  };

  return (
    <>
      <nav className="max-h-[95vh] shadow-xl flex flex-col bg-white">
        <div className="w-64 text-white overflow-y-auto scrollbar-none">
          <h2 className="text-black text-center">-</h2>
          <ul className="bg-blue-400 scroll-y-auto scroll-smooth">
            <MenuItem
              title="Appointment"
              open={openMenus.Appointment}
              onToggle={() => toggleMenu("Appointment")}
              subItems={[
                { title: "Patient Appointment", to: "/" },
                { title: "Dr Chamber Time Entry", to: "/" },
                { title: "Dr Leave Information", to: "/" },
                { title: "Dr Instructions", to: "/" },
              ]}
            />
            <MenuItem
              title="Appointment Report"
              open={openMenus.AppointmentReport}
              onToggle={() => toggleMenu("AppointmentReport")}
              subItems={[
                { title: "Doctor Appointment Report", to: "/" },
                { title: "Due Chamber Shifting Report", to: "/" },
                { title: "Doctor In & Out Report", to: "/" },
                { title: "Doctor Leave Info Report", to: "/" },
                { title: "Doctor Instructions Report", to: "/" },
              ]}
            />
            <MenuItem
              title="Prescription"
              open={openMenus.Prescription}
              onToggle={() => toggleMenu("Prescription")}
              subItems={[
                { title: "Prescription", to: "/" },
                { title: "Consultant Prescription", to: "/" },
                { title: "Prescription New", to: "/" },
              ]}
            />
            <MenuItem
              title="Diagnostic"
              open={openMenus.diagnostic}
              onToggle={() => toggleMenu("diagnostic")}
              subItems={[
                { title: "Invoice", to: "/DiagnosisInvoice" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Diagnostic Report"
              open={openMenus.DiagnosticReport}
              onToggle={() => toggleMenu("DiagnosticReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Income Report User Wise", to: "/" },
                { title: "Lab Report Before Process", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency Report"
              open={openMenus.EmergencyReport}
              onToggle={() => toggleMenu("EmergencyReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Invoice History", to: "/" },
              ]}
            />
            <MenuItem
              title="Physiotherapy"
              open={openMenus.Physiotherapy}
              onToggle={() => toggleMenu("Physiotherapy")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Physiotherapy Report"
              open={openMenus.PhysiotherapyReport}
              onToggle={() => toggleMenu("PhysiotherapyReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Invoice History", to: "/" },
              ]}
            />
            <MenuItem
              title="Ambulance"
              open={openMenus.Ambulance}
              onToggle={() => toggleMenu("Ambulance")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Ambulance Report"
              open={openMenus.AmbulanceReport}
              onToggle={() => toggleMenu("AmbulanceReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Invoice History", to: "/" },
              ]}
            />
            <MenuItem
              title="Dental"
              open={openMenus.Dental}
              onToggle={() => toggleMenu("Dental")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Dental Report"
              open={openMenus.DentalReport}
              onToggle={() => toggleMenu("DentalReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Invoice History", to: "/" },
              ]}
            />
            <MenuItem
              title="Dialysis"
              open={openMenus.Dialysis}
              onToggle={() => toggleMenu("Dialysis")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Dialysis Report"
              open={openMenus.DialysisReport}
              onToggle={() => toggleMenu("DialysisReport")}
              subItems={[
                { title: "Counted List of Tested Item", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Invoice Register", to: "/" },
                { title: "Sales Report", to: "/" },
                { title: "Invoice Register", to: "/" },
                { title: "Invoice History", to: "/" },
              ]}
            />
            <MenuItem
              title="Refund"
              open={openMenus.Refund}
              onToggle={() => toggleMenu("Refund")}
              subItems={[
                { title: "Outdoor Return", to: "/" },
                { title: "Indoor Return", to: "/" },
                { title: "OPD Ticket Return", to: "/" },
                { title: "OPD Refund", to: "/" },
              ]}
            />
            <MenuItem
              title="Invoices Edit"
              open={openMenus.InvoicesEdit}
              onToggle={() => toggleMenu("InvoicesEdit")}
              subItems={[
                { title: "Invoices Edit", to: "/" },
              ]}
            />
            <MenuItem
              title="Indoor Patient"
              open={openMenus.Indoor}
              onToggle={() => toggleMenu("Indoor")}
              subItems={[
                { title: "Admission", to: "/" },
                { title: "Advance Collection", to: "/" },
                { title: "Extra Bed", to: "/" },
                { title: "Procedure Entry", to: "/" },
                { title: "Doctor Visit", to: "/" },
                { title: "Bed Change", to: "/" },
                { title: "Patient Follow Up", to: "/" },
                { title: "Patient Release", to: "/" },
                { title: "Patient Status", to: "/" },
                { title: "Discharge Certificate", to: "/" },
                { title: "BIll Details", to: "/" },
                { title: "Patient Release Package", to: "/" },
                { title: "Release Time Collection", to: "/" },
                { title: "Probably Patient Release", to: "/" },
                { title: "Probably Patient Release Unblock", to: "/" },
                { title: "Medicine Req For Indoor", to: "/" },
                { title: "Admission", to: "/" },
              ]}
            />
            <MenuItem
              title="IPD Report"
              open={openMenus.IPDReport}
              onToggle={() => toggleMenu("IPDReport")}
              subItems={[
                { title: "Admitted Patient", to: "/" },
                { title: "Release Patient Due", to: "/" },
                { title: "Discount Report", to: "/" },
                { title: "Release Patient Information", to: "/" },
                { title: "Indoor History", to: "/" },
                { title: "Doctor Ledger", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Collection", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="MIS Report"
              open={openMenus.MISReport}
              onToggle={() => toggleMenu("MISReport")}
              subItems={[
                { title: "Current Patient (Consultant Wise)", to: "/" },
                { title: "Available Bed Information", to: "/" },
                { title: "Current Patient Due", to: "/" },
                { title: "Date Wise Admitted Patient Info", to: "/" },
                { title: "Occupied Bed Information", to: "/" },
                { title: "Income Report Details", to: "/" },
                { title: "Income Report Summarized", to: "/" },
                { title: "Item Wise Sales Report (Details)", to: "/" },
                { title: "Collection Report Summary", to: "/" },
              ]}
            />
            <MenuItem
              title="Pharmacy"
              open={openMenus.Pharmacy}
              onToggle={() => toggleMenu("Pharmacy")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
            <MenuItem
              title="Emergency"
              open={openMenus.Emergency}
              onToggle={() => toggleMenu("Emergency")}
              subItems={[
                { title: "Invoice", to: "/" },
                { title: "Due Collection", to: "/" },
              ]}
            />
          </ul>
          <h2 className="text-black text-center">-</h2>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
